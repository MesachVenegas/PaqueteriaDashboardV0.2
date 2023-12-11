
import AddUser from '@/components/admin/addUser/AddUser'
import UsersTable from '@/components/dashboard/tables/UsersTable'

export default async function AdminPage() {

  return (
    <div className='p-6'>
      <div className='flex flex-col w-full max-w-4xl gap-4'>
        <AddUser />
        <UsersTable />
      </div>
    </div>
  )
}
