import { IconDefinition, faCoins, faCreditCard, faCube, faCubes, faEdit, faEye, faFileArchive, faMoneyBill1Wave, faMoneyBillTransfer, faPlaneDeparture, faTrash, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
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
import Link from "next/link";

const data = [
  {
    name: "Viola Amherd",
    Role: "Federal Councillor",
    departement: "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
    type: "plane",
    payment: 'tarjeta'
  },
  {
    name: "Simonetta Sommaruga",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
    type: "land",
    payment: 'efectivo'
  },
  {
    name: "Alain Berset",
    Role: "Federal Councillor",
    departement: "The Federal Department of Home Affairs (FDHA)",
    type: "land",
    payment: 'tarjeta'
  },
  {
    name: "Ignazio Cassis",
    Role: "Federal Councillor",
    departement: "The Federal Department of Foreign Affairs (FDFA)",
    type: "plane",
    payment: 'efectivo'
  },
  {
    name: "Karin Keller-Sutter",
    Role: "Federal Councillor",
    departement: "The Federal Department of Finance (FDF)",
    type: "plane",
    payment: 'transferencia'
  },
  {
    name: "Guy Parmelin",
    Role: "Federal Councillor",
    departement: "The Federal Department of Economic Affairs, Education and Research (EAER)",
    type: "land",
    payment: 'parcial'
  },
  {
    name: "Elisabeth Baume-Schneider",
    Role: "Federal Councillor",
    departement: "The Federal Department of Justice and Police (FDJP)",
    type: "plane",
    payment: 'tarjeta'
  },
];

const iconPayment: { [key: string]: IconDefinition} = {
  efectivo: faCoins,
  tarjeta: faCreditCard,
  transferencia: faMoneyBillTransfer,
  parcial: faMoneyBill1Wave,
}

export default function ClientsHistory() {

  return(
    <Card>
      <Title>Clientes Registrados</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Folio</TableHeaderCell>
            <TableHeaderCell>Destinatario</TableHeaderCell>
            <TableHeaderCell>Dirección</TableHeaderCell>
            <TableHeaderCell>Costo</TableHeaderCell>
            <TableHeaderCell>Método de pago</TableHeaderCell>
            <TableHeaderCell>Tipo</TableHeaderCell>
            <TableHeaderCell>Remisión</TableHeaderCell>
            <TableHeaderCell>Fecha</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name} className="hover:bg-slate-200">
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.Role}</Text>
              </TableCell>
              <TableCell>
                <Text>{`example@example.com`}</Text>
              </TableCell>
              <TableCell>
                <Text>{`$ 1,345.00`}</Text>
              </TableCell>
              <TableCell>
                <Text>
                  <span className="flex items-center gap-2 capitalize font-semibold">
                    <FontAwesomeIcon icon={iconPayment[item.payment]} className="w-5 h-5"/>
                    {item.payment}
                  </span>
                </Text>
              </TableCell>
              <TableCell>
                <Text className="font-semibold">
                  {
                    item.type === "plane"
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
                  <Link href="" className="flex gap-2 items-center bg-slate-600 text-white w-fit py-1 px-3 rounded-md">
                    <FontAwesomeIcon icon={faFileArchive} className="w-4 h-4"/>
                    <span>Remisión</span>
                  </Link>
              </TableCell>
              <TableCell>
                  04/12/2023
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
};
