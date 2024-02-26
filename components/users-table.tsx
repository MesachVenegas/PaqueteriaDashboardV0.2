'use client'

import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { UserProps } from '@/types/user.types';
import { Badge } from '@/components/ui/badge';
import { TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import EditUserForm from '@/components/edit-user-form';


export default function UsersTable({ users } : { users: UserProps[] } ) {
  return (
    <TabsContent value="users">
      <Table>
        <TableCaption>Usuarios registrados</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Usuario</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Rol</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            users.map( user => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.name} {user.last_name}</TableCell>
                <TableCell className='capitalize'>
                  {user.role === 'admin' ? 'Administrador': 'usuario'}
                </TableCell>
                <TableCell>
                  <Badge className={`
                    ${user.is_active ? 'bg-emerald-400 hover:bg-emerald-700' : 'bg-red-400 hover:bg-red-700'}
                    text-black hover:text-white uppercase font-bold`
                  }
                  >
                    {user.is_active ? 'Activo': 'Inactivo'}
                  </Badge>
                </TableCell>
                <TableCell className="flex items-center gap-4">
                    <EditUserForm user={user} />
                    <button type="button" className='flex items-center gap-2 hover:text-red-500'>
                      <FontAwesomeIcon icon={faTrashCan} className="w-4 h-4" />
                      eliminar
                    </button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TabsContent>
  )
}
