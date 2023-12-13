import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
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

const data = [
  {
    name: "Viola Amherd",
    Role: "Federal Councillor",
    departement: "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
    status: "active",
  },
  {
    name: "Simonetta Sommaruga",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
    status: "active",
  },
  {
    name: "Alain Berset",
    Role: "Federal Councillor",
    departement: "The Federal Department of Home Affairs (FDHA)",
    status: "active",
  },
  {
    name: "Ignazio Cassis",
    Role: "Federal Councillor",
    departement: "The Federal Department of Foreign Affairs (FDFA)",
    status: "active",
  },
  {
    name: "Karin Keller-Sutter",
    Role: "Federal Councillor",
    departement: "The Federal Department of Finance (FDF)",
    status: "active",
  },
  {
    name: "Guy Parmelin",
    Role: "Federal Councillor",
    departement: "The Federal Department of Economic Affairs, Education and Research (EAER)",
    status: "active",
  },
  {
    name: "Elisabeth Baume-Schneider",
    Role: "Federal Councillor",
    departement: "The Federal Department of Justice and Police (FDJP)",
    status: "active",
  },
  {
    name: "Elisabeth Baume-Schneider",
    Role: "Federal Councillor",
    departement: "The Federal Department of Justice and Police (FDJP)",
    status: "active",
  },
];

export default function ProvidersTable() {

  return(
    <Card>
      <Title>Proveedores Registrados</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="dark:text-gray-300">Nombre</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Teléfono</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Email</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Registro</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name} className="dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-800">
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.Role}
              </TableCell>
              <TableCell>
                example@example.com
              </TableCell>
              <TableCell>
                02/12/2023
              </TableCell>
              <TableCell className="flex gap-4 items-center font-semibold">
                <span className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
                  Ver
                </span>
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
