import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
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

const data = [
  {
    name: "Viola Amherd",
    description: "Federal Councillor",
    type: "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
    cost: 123,
  },
  {
    name: "Simonetta Sommaruga",
    description: "Federal Councillor",
    type: "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
    cost: 123,
  },
  {
    name: "Alain Berset",
    description: "Federal Councillor",
    type: "The Federal Department of Home Affairs (FDHA)",
    cost: 123,
  },
  {
    name: "Ignazio Cassis",
    description: "Federal Councillor",
    type: "The Federal Department of Foreign Affairs (FDFA)",
    cost: 123,
  },
  {
    name: "Karin Keller-Sutter",
    description: "Federal Councillor",
    type: "The Federal Department of Finance (FDF)",
    cost: 123,
  },
  {
    name: "Guy Parmelin",
    description: "Federal Councillor",
    type: "The Federal Department of Economic Affairs, Education and Research (EAER)",
    cost: 123,
  },
  {
    name: "Elisabeth Baume-Schneider",
    description: "Federal Councillor",
    type: "The Federal Department of Justice and Police (FDJP)",
    cost: 123,
  },
  {
    name: "Elisabeth Baume-Schneider",
    description: "Federal Councillor",
    type: "The Federal Department of Justice and Police (FDJP)",
    cost: 123,
  },
];

export default function ProductsTable() {

  return(
    <Card>
      <Title>Productos Listados</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Descripcion</TableHeaderCell>
            <TableHeaderCell>Tipo</TableHeaderCell>
            <TableHeaderCell>Costo</TableHeaderCell>
            <TableHeaderCell>Registro</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name} className="hover:bg-slate-200">
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.description}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.type}</Text>
              </TableCell>
              <TableCell>
                $ {item.cost.toFixed(2)}
              </TableCell>
              <TableCell>
                02/12/2023
              </TableCell>
              <TableCell className="flex gap-4 items-center font-semibold">
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
          ))}
        </TableBody>
      </Table>
    </Card>
  )
};
