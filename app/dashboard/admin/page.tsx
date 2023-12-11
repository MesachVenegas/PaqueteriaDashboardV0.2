
import { getUsers } from '@/app/libs/data';
import { UserProps } from '@/app/libs/definitions';
import UsersTable from '@/components/admin/Tables/UsersTable'
import AddUser from '@/components/admin/addUser/AddUser'
import { deleteUser as RemoveUser, createNewUser } from '@/app/libs/actions';
import { revalidatePath } from 'next/cache';
import Pagination from '@/components/dashboard/pagination/Pagination';

export default async function AdminPage({ searchParams }: { searchParams: { search: string, page: string }}) {
  const search = searchParams?.search || '';
  const page = searchParams?.page || '1';
  const response = await getUsers(search, parseInt(page));
  const { count, users } = Array.isArray(response) ? { count: 0, users: [] } : response;

    const deleteUser = async (id: string) => {
    'use server'
    await RemoveUser(id)
      .then( () => revalidatePath('/dashboard/admin'))
      .catch( (error) => console.log(error));
  }

  const handleForm =  async (data: Iterable<readonly [PropertyKey, any]>) => {
    'use server'
    createNewUser(data)
      .then( () => revalidatePath('/dashboard/admin'))
      .catch( err => console.log(err))
  }

  return (
    <div className='p-6'>
      <div className='flex flex-col w-full max-w-4xl gap-4'>
        <AddUser handleForm={handleForm} />
        <UsersTable data={users as UserProps[]}  removeUser={deleteUser}/>
        <Pagination count={count} />
      </div>
    </div>
  )
}
