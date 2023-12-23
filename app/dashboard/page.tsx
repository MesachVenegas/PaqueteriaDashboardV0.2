import { Suspense } from "react";
import Cards from "@/components/dashboard/cards/Cards";
import Chart from "@/components/dashboard/chart/Chart";
import Rightbar from "@/components/dashboard/rigthbar/Rightbar";
import { getClients } from "../libs/data";
import { getDayliSales, getLastSales, getMonthlySales, getCustomersCountByMonth } from "../libs/boxcut/actions";
import Transactions from "@/components/dashboard/tables/Transactions";
import { TransactionProps } from "../libs/definitions";

export default async function DashboardPage() {
  const response = await getClients('', 1);
  const { count, clients } = Array.isArray(response) ? { count: 0, clients: [] } : response;
  const totalSales = await getDayliSales();
  const monthlySales = await getMonthlySales();
  const lastTransactions = await getLastSales();
  const clientsDataChart = await getCustomersCountByMonth();


  return (
    <div className="grid grid-cols-4 p-5 gap-5 mt-5">
      <div className="col-span-full xl:col-span-3 flex flex-col gap-5">
        <div className="flex w-full gap-5">
            <Cards title="Clientes totales" type="clients" counter={count} profit={12}/>
            <Cards title="Ventas del Dia" type="sales" counter={totalSales} profit={7}/>
            <Cards title="Ventas Mensuales" type="monthlySales" counter={monthlySales} profit={15}/>
        </div>
        <Suspense>
          <Transactions transactions={lastTransactions as TransactionProps[]} />
          <Chart data={clientsDataChart} />
        </Suspense>
      </div>

      <div className="hidden xl:flex xl:col-span-1">
        <Rightbar />
      </div>
    </div>
  )
}
