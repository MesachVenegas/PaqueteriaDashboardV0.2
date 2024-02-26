'use client'

import { toast } from "react-toastify";
import { Card, Title } from "@tremor/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faCubes, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from "@/components/ui/button";
import { deleteClient } from "@/actions/clients";
import { ClientProps } from "@/types/client.types";
import ToastNotification from "@/components/toast-notification";
import EditClientBtn from "./edit-client-form";

interface ProductsTableProps {
  clients: ClientProps[] | null,
}

export default function ClientsTable({ clients } : ProductsTableProps) {

  const handleDelete = (id: string) => {
    deleteClient(id)
      .then( (res) => {
        toast.success(res.message)
      }).catch( error => toast.error(error.message))
  }

  return(
    <Card>
      <ToastNotification />
      <Title>Clientes Registrados</Title>
      <Table className="mt-5">
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead className="hidden md:table-cell">Correo Electrónico</TableHead>
            <TableHead>Tipo de cliente</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            clients?.map( client => (
              <TableRow key={client.id}>
                <TableCell className="capitalize">
                  {client.name} {client.last_name}
                </TableCell>
                <TableCell>
                  {client.phone}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {client.email}
                </TableCell>
                <TableCell>
                  {
                    client.type === 'minors'
                    ? (
                      <div className="flex gap-1.5 items-center">
                        <FontAwesomeIcon icon={faCube} className="w-4 h-4" />
                        <span>Minorista</span>
                      </div>
                    )
                    : (
                      <div className="flex gap-1.5 items-center">
                        <FontAwesomeIcon icon={faCubes} className="w-4 h-4" />
                        <span>Mayorista</span>
                      </div>
                    )
                  }
                </TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex gap-2 justify-end items-center px-3">
                    <EditClientBtn client={client} />
                    <Button
                      variant="ghost"
                      className="flex gap-1 items-center p-0 hover:text-red-400"
                      onClick={ () => handleDelete(client.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                      <span className="text-xs">Eliminar</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Card>
  )
};
