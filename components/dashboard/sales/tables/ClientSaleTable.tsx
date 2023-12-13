import { ClientProps } from "@/app/libs/definitions";
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react";
import { Dispatch, SetStateAction } from "react";

export default function ClientSaleTable({ data, selectClient }: { data: ClientProps[] , selectClient: Dispatch<SetStateAction<ClientProps | undefined>>}) {
  return(
    <Card className="h-[75vh]  dark:bg-slate-900">
      <Table className="mt-5 ">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="dark:text-gray-300 text-2xl">Clientes</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((item : ClientProps ) => (
              <TableRow key={item.name} className="hover:bg-slate-300 dark:hover:bg-slate-900 text-gray-700 dark:text-gray-100 cursor-pointer" onClick={() => selectClient(item)}>
                <TableCell>{item.name} {item.last_name}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Card>
  )
}
