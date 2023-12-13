import { ProductProps } from "@/app/libs/definitions";
import { valueFormatter } from "@/app/libs/utils";
import { faEdit, faPlaneDeparture, faTrash, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";
import { format } from "date-fns";

export default function ProductsTable({ products } : { products: ProductProps[]} ) {

  return(
    <Card>
      <Title>Productos Listados</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="dark:text-gray-300">Nombre</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Descripcion</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Tipo</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Costo</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Registro</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Actualizado</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow key={item.name} className="dark:text-gray-300 dark:hover:bg-slate-800 hover:bg-slate-200">
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                <div className="flex gap-2 font-bold">
                  {
                    item.delivery === 'land'
                    ? (
                      <>
                        <FontAwesomeIcon icon={faTruck} className="w-5 h-5 mr-2 " />
                        <span>Terrestre</span>
                      </>
                    )
                    : (
                      <>
                        <FontAwesomeIcon icon={faPlaneDeparture} className="w-5 h-5 mr-2" />
                        <span>Aéreo</span>
                      </>
                    )
                  }
                </div>
              </TableCell>
              <TableCell className="font-bold">
                {valueFormatter(item.price)}
              </TableCell>
              <TableCell>
                {format(item.registerAt, "dd/MM/yyyy hh:mm b")}
              </TableCell>
              <TableCell>
                {format(item.updateAt, "dd/MM/yyyy hh:mm b")}
              </TableCell>
              <TableCell className="flex gap-4 items-center font-semibold">
                <span className="flex items-center gap-2 text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-500 cursor-pointer">
                  <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
                  Editar
                </span>
                <span className="flex items-center gap-2 text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-500 cursor-pointer">
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
