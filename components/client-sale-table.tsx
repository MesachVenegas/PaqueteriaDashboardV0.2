'use client'

import { Card, Title } from "@tremor/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faCubes } from "@fortawesome/free-solid-svg-icons";

import Pagination from "@/components/Pagination";
import { ClientSaleTableProps } from "@/types/client.types";
import { setClient } from "@/redux/features/sale-client.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";



export default function ClientTableToSale({ clients, count } : ClientSaleTableProps) {
  const clientSelected = useAppSelector(state => state.client_select_to_sale);
  const dispatch = useAppDispatch();

  if(!clientSelected.id) {
    return(
      <Card className="flex flex-col gap-4 w-full 2xl:max-w-md dark:bg-slate-900 rounded-md">
        <div>
          <Title>Clientes Registrados</Title>
          <p className='text-sm text-gray-600 dark:text-slate-400'>
            Selecciona el cliente que envía el paquete de la lista, o busca el cliente, puedes realizar la busqueda por nombre, numero telefónico o correo.
          </p>
        </div>
        <Table className="mt-8 w-full max-w-3xl m-auto">
          <TableHeader>
            <TableHead>Nombre</TableHead>
            <TableHead>Tipo</TableHead>
          </TableHeader>
          <TableBody>
            {
              clients.map( client => (
                <TableRow
                  key={client.id}
                  onClick={ () => dispatch( setClient( client ) ) }
                  className="cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-950"
                >
                  <TableCell className="capitalize">
                    {`${client.name} ${client.last_name}`}
                  </TableCell>
                  <TableCell className="capitalize">
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

                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        <div className="flex w-full">
          <Pagination count={count} />
        </div>
      </Card>
    )
  } else return null;

}
