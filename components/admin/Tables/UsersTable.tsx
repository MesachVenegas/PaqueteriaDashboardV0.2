'use client'

import { UserProps } from "@/app/libs/definitions";
import { faBlackTie } from "@fortawesome/free-brands-svg-icons";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";
import { format } from 'date-fns';

export default function UsersTable({ data, removeUser }: { data: UserProps[], removeUser: (id: string) => void }) {

  return(
    <Card>
      <Title>Usuarios Registrados</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="dark:text-gray-300">Usuario</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Nombre</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Rol</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className="dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-800">
              <TableCell>{item.username}</TableCell>
              <TableCell>{item.name} {item.last_name}</TableCell>
              <TableCell>
                  {
                    !item.is_admin
                    ? (
                      <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                        <span>User</span>
                      </div>
                    )
                    : (
                      <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faBlackTie} className="w-4 h-4" />
                        <span>Admin</span>
                      </div>
                    )
                  }
              </TableCell>
              <TableCell className="flex gap-4 items-center font-semibold">
                <span className="flex items-center gap-2 text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-500 cursor-pointer">
                  <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
                  Editar
                </span>
                <span className="flex items-center gap-2 text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-500 cursor-pointer" onClick={() => removeUser(item.id)}>
                  <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                  Eliminar
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
};
