import { OrderProps } from "@/app/libs/definitions";
import { valueFormatter } from "@/lib/utils";
import { IconDefinition, faCoins, faCreditCard, faCube, faCubes, faEdit, faEye, faFileArchive, faMoneyBill1Wave, faMoneyBillTransfer, faPlaneDeparture, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { format } from "date-fns";
import Link from "next/link";


const iconPayment: { [key: string]: IconDefinition} = {
  cash: faCoins,
  card: faCreditCard,
  transfer: faMoneyBillTransfer,
  partial: faMoneyBill1Wave,
}

const paymentName : { [key: string]: string} = {
  cash: 'Efectivo',
  card: 'Tarjeta',
  transfer: 'Transferencia',
  partial: 'Parcial',
}

export default function ClientsHistory({ orders } : { orders: OrderProps[] }) {

  console.log(orders);
  return(
    <Card>
      <Title>Clientes Registrados</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Folio</TableHeaderCell>
            <TableHeaderCell>Destinatario</TableHeaderCell>
            <TableHeaderCell>Dirección</TableHeaderCell>
            <TableHeaderCell>Envió</TableHeaderCell>
            <TableHeaderCell>Método de pago</TableHeaderCell>
            <TableHeaderCell>Costo</TableHeaderCell>
            <TableHeaderCell>Remisión</TableHeaderCell>
            <TableHeaderCell>Fecha</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((item) => (
            <TableRow key={item.id} className="hover:bg-slate-200 dark:hover:bg-slate-800">
              <TableCell>{item.id.slice(0,13)}</TableCell>
              <TableCell>
                <Text>{item.addressed_name}</Text>
              </TableCell>
              <TableCell>
                <Text>{`${item.addressed_street}, #${item.addressed_number}, ${item.addressed_colony}, ${item.addressed_city}`}</Text>
              </TableCell>
              <TableCell>
                <Text className="font-semibold">
                  {
                    item.type === "air"
                    ? (
                      <span className="flex items-center gap-2 text-blue-500">
                        <FontAwesomeIcon icon={faPlaneDeparture} className="w-5 h-5"/>
                        Aéreo
                      </span>
                    )
                    : (
                      <span className="flex items-center gap-2 text-emerald-600">
                        <FontAwesomeIcon icon={faTruckFast} className="w-5 h-5"/>
                        Terrestre
                      </span>
                    )
                  }
                </Text>
              </TableCell>
              <TableCell>
                <Text>
                  <span className="flex items-center gap-2 capitalize font-semibold">
                    <FontAwesomeIcon icon={iconPayment[item.payment_type]} className="w-5 h-5"/>
                    {paymentName[item.payment_type]}
                  </span>
                </Text>
              </TableCell>
              <TableCell>
                <Text>{valueFormatter(item.total)} mxn</Text>
              </TableCell>
              <TableCell>
                  <Link href="" className="flex gap-2 items-center bg-slate-600 text-white w-fit py-1 px-3 rounded-md">
                    <FontAwesomeIcon icon={faFileArchive} className="w-4 h-4"/>
                    <span>Remisión</span>
                  </Link>
              </TableCell>
              <TableCell>
                  {format(item.registerAt, "dd/MM/yyyy hh:mm b")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
};
