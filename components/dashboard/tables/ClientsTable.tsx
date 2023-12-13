'use client'

import Link from "next/link";
import { ClientProps } from "@/app/libs/definitions";
import { faCube, faCubes, faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";
import { format } from 'date-fns';


export default function ClientsTable({ data, removeClient } : {data: ClientProps[], removeClient: (id: string) => void}) {


  return(
    <Card className="h-[60vh]">
      <Title>Clientes Registrados</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="dark:text-gray-300">Nombre</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Teléfono</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Correo Electrónico</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Tipo</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Registro</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((item : ClientProps ) => (
              <TableRow key={item.name} className="hover:bg-slate-200 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-200">
                <TableCell>{item.name} {item.last_name}</TableCell>
                <TableCell>
                  {item.phone}
                </TableCell>
                <TableCell>
                  {item.email}
                </TableCell>
                <TableCell>
                    {
                      item.type === "minors"
                      ? (
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCube} className="w-5 h-5"/>
                          Minorista
                        </span>
                      )
                      : (
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCubes} className="w-5 h-5"/>
                          Mayorista
                        </span>
                      )
                    }
                </TableCell>
                <TableCell>
                    {format(item.registerAt, "dd/MM/yyyy hh:mm b")}
                </TableCell>
                <TableCell className="flex gap-8 items-center font-semibold">
                  <Link href={`/dashboard/clientes/${item.id}`} className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 cursor-pointer">
                    <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
                    Ver
                  </Link>
                  <button className="flex items-center gap-2 text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-500 cursor-pointer" >
                    <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
                    Editar
                  </button>
                  <button
                    className="flex items-center gap-2 text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-500 cursor-pointer"
                    onClick={() => removeClient(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                    Eliminar
                  </button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Card>
  )
};
