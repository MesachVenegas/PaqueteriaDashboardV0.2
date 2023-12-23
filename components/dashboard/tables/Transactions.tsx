import { TransactionProps } from '@/app/libs/definitions'
import { valueFormatter } from '@/app/libs/utils'
import { IconDefinition, faCoins, faCreditCard, faMoneyBill1Wave, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react'
import { format } from 'date-fns'
import Image from 'next/image'

export default function Transactions({ transactions }: { transactions: TransactionProps[]}) {

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

  return (
    <Card className='bg-slate-200 dark:bg-slate-950'>
      <Title>Ultimas ventas registradas</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="dark:text-gray-300">Cliente</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Método de Pago</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Total</TableHeaderCell>
            <TableHeaderCell className="dark:text-gray-300">Fecha</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className='font-bold'>
          {transactions.map((order) => (
            <TableRow key={order.id} className="dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-800">
              <TableCell className='flex items-center gap-2'>
                <span className='w-8 h-8 rounded-full overflow-hidden'>
                  <Image
                    src={order.client.avatar || ''}
                    width={50}
                    height={50}
                    alt='avatar_imag'
                  />
                </span>
                {order.client.name}
              </TableCell>
              <TableCell>
                <span className="flex items-center gap-2 capitalize font-semibold">
                  <FontAwesomeIcon icon={iconPayment[order.payment_type]} className="w-5 h-5"/>
                  {paymentName[order.payment_type]}
                </span>
              </TableCell>
              <TableCell>
                { valueFormatter(order.total)}
              </TableCell>
              <TableCell>
                {format(order.registerAt, "dd/MM/yyyy hh:mm b")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
