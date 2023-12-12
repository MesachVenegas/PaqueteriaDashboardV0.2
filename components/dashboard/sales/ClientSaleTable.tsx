import { ClientProps } from "@/app/libs/definitions";
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react";

export default function ClientSaleTable({ data }: { data: ClientProps[]}) {
  return(
    <Card className="h-[60vh]">
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Clientes</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((item : ClientProps ) => (
              <TableRow key={item.name} className="hover:bg-slate-200 text-gray-700">
                <TableCell>{item.name} {item.last_name}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Card>
  )
}
