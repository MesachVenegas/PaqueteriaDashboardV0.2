import { faCube, faCubes, faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
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
    Role: "Federal Councillor",
    departement: "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
    type: "minors",
  },
  {
    name: "Simonetta Sommaruga",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
    type: "wholesaler",
  },
  {
    name: "Alain Berset",
    Role: "Federal Councillor",
    departement: "The Federal Department of Home Affairs (FDHA)",
    type: "wholesaler",
  },
  {
    name: "Ignazio Cassis",
    Role: "Federal Councillor",
    departement: "The Federal Department of Foreign Affairs (FDFA)",
    type: "minors",
  },
  {
    name: "Karin Keller-Sutter",
    Role: "Federal Councillor",
    departement: "The Federal Department of Finance (FDF)",
    type: "minors",
  },
  {
    name: "Guy Parmelin",
    Role: "Federal Councillor",
    departement: "The Federal Department of Economic Affairs, Education and Research (EAER)",
    type: "wholesaler",
  },
  {
    name: "Elisabeth Baume-Schneider",
    Role: "Federal Councillor",
    departement: "The Federal Department of Justice and Police (FDJP)",
    type: "minors",
  },
  {
    name: "Elisabeth Baume-Schneider",
    Role: "Federal Councillor",
    departement: "The Federal Department of Justice and Police (FDJP)",
    type: "minors",
  },
];

export default function ClientsTable() {

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
                  04/12/2023
              </TableCell>
              <TableCell className="flex gap-8 items-center font-semibold">
                <span className="flex items-center gap-2 text-blue-500 hover:text-blue-600 cursor-pointer">
                  <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
                  Ver
                </span>
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
