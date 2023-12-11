import { faBlackTie } from "@fortawesome/free-brands-svg-icons";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";

const data = [
  {
    username: "v.amhered",
    name: "Viola",
    last_name: "Amherd",
    description: "Federal Councillor",
    is_admin: true,
  },
  {
    username: "s.sommarugaa",
    name: "Simonetta",
    last_name: "Amherd",
    description: "Federal Councillor",
    is_admin: false
  },
  {
    username: "s.sommarugaa",
    name: "Simonetta",
    last_name: "Sommaruga",
    description: "Federal Councillor",
    is_admin: false
  },
];

export default function UsersTable() {

  return(
    <Card>
      <Title>Usuarios Registrados</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Usuario</TableHeaderCell>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Rol</TableHeaderCell>
            <TableHeaderCell>Registro</TableHeaderCell>
            <TableHeaderCell>Actualizado</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name} className="hover:bg-slate-200">
              <TableCell>
                <Text>
                  {item.username}
                </Text>
              </TableCell>
              <TableCell>
                <Text>{item.name} {item.last_name}</Text>
              </TableCell>
              <TableCell>
                  {
                    !item.is_admin
                    ? (
                      <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                        <span>User</span>
                      </div>
                    )
                    : (
                      <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faBlackTie} className="w-4 h-4" />
                        <span>Admin</span>
                      </div>
                    )
                  }
              </TableCell>
              <TableCell>
                02/12/2023
              </TableCell>
              <TableCell>
                12/12/2023
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
