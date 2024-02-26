'use client'

import { toast } from "react-toastify";
import { Card, Title } from "@tremor/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture, faTrash, faTruck } from "@fortawesome/free-solid-svg-icons";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from '@/components/ui/table';
import { Button } from "@/components/ui/button";
import { valueFormatter } from "@/lib/utils";
import { deleteProduct } from "@/actions/products";
import { ProductProps } from "@/types/product.types";
import ToastNotification from "@/components/toast-notification";
import EditProductBtn from "@/components/edit-product-form";

interface ProductsTableProps {
  products: ProductProps[] | null,
  count: number
}

export default function ProductsTable({ products, count } : ProductsTableProps) {

  const handleDelete = (id: string) => {
    deleteProduct(id)
      .then( (res) => {
        if(res.code === 'success') {
          toast.success(res.message)
        } else {
          toast.error(res.message)
        }
      }).catch( error => toast.error(error.message))
  }

  return(
    <Card className="bg-slate-200 dark:bg-slate-900 rounded-md p-12">
      <ToastNotification />
      <Title>Productos Registrados</Title>
      <Table className="mt-5 w-full max-w-7xl mx-auto">
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead className="hidden md:table-cell">Descripcion</TableHead>
            <TableHead>Tipo de Envió</TableHead>
            <TableHead>Costo</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            products?.map( product => (
              <TableRow key={product.id}>
                <TableCell className="capitalize">{product.name}</TableCell>
                <TableCell className="hidden md:table-cell">{product.description}</TableCell>
                <TableCell className="flex gap-1 items-center">
                  <FontAwesomeIcon
                    icon={product.delivery_type === 'land' ? faTruck : faPlaneDeparture } className="w-5 h-5"/>
                  {product.delivery_type === 'land' ? 'Terrestre' : 'Aéreo'}
                </TableCell>
                <TableCell>{valueFormatter(product.cost)}</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex gap-2 justify-end items-center px-3">
                    <EditProductBtn product={product} />
                    <Button
                      variant="ghost"
                      className="flex gap-1 items-center p-0 hover:text-red-400"
                      onClick={ () => handleDelete(product.id)}
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
        <TableFooter className="bg-slate-200 dark:bg-slate-950">
          <TableRow>
            <TableCell colSpan={4}>Productos registrados</TableCell>
            <TableCell className="text-right">{count}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  )
};
