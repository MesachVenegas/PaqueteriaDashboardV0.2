import Link from "next/link";
import { ClientProps } from "@/app/libs/definitions";
import { faCube, faCubes, faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';


export default function ClientsTable({ data } : {data: ClientProps[]}) {

  return(
    <Card>
      <Title>Clientes Registrados</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Teléfono</TableHeaderCell>
            <TableHeaderCell>Correo Electrónico</TableHeaderCell>
            <TableHeaderCell>Tipo</TableHeaderCell>
            <TableHeaderCell>Registro</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((item : ClientProps ) => (
              <TableRow key={item.name} className="hover:bg-slate-200">
                <TableCell>{item.name} {item.last_name}</TableCell>
                <TableCell>
                  {item.phone}
                </TableCell>
                <TableCell>
                  <Text>{item.email}</Text>
                </TableCell>
                <TableCell>
                  <Text>
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
                  </Text>
                </TableCell>
                <TableCell>
                    <Text>{format(item.registerAt, "dd/MM/yyyy h:m b")}</Text>
                </TableCell>
                <TableCell className="flex gap-8 items-center font-semibold">
                  <Link href='/dashboard/clientes/view' className="flex items-center gap-2 text-blue-500 hover:text-blue-600 cursor-pointer">
                    <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
                    Ver
                  </Link>
                  <span className="flex items-center gap-2 text-green-500 hover:text-green-600 cursor-pointer">
                    <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
                    Editar
                  </span>
                  <span className="flex items-center gap-2 text-red-600 hover:text-red-500 cursor-pointer">
                    <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                    Eliminar
                  </span>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Card>
  )
};
