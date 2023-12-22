import { Suspense } from "react";
import Cards from "@/components/dashboard/cards/Cards";
import Chart from "@/components/dashboard/chart/Chart";
import Rightbar from "@/components/dashboard/rigthbar/Rightbar";
import Transactions from "@/components/dashboard/transactions/Transactions";
import { getClients } from "../libs/data";

export default async function DashboardPage() {
  const response = await getClients('', 1);
  const { count, clients } = Array.isArray(response) ? { count: 0, clients: [] } : response;

  return (
    <div className="grid grid-cols-4 p-5 gap-5 mt-5">
      <div className="col-span-full xl:col-span-3 flex flex-col gap-5">
        <div className="flex w-full gap-5">
            <Cards title="Clientes totales" type="clients" counter={count} profit={12}/>
            <Cards title="Ventas del Dia" type="sales" symbol="$" counter={12200.75} profit={7}/>
            <Cards title="Ventas Mensuales" type="monthlySales" symbol="$" counter={120000} profit={15}/>
        </div>
        <Suspense>
          <Transactions />
          <Chart />
        </Suspense>
      </div>

      <div className="hidden xl:flex xl:col-span-1">
        <Rightbar />
      </div>
    </div>
  )
}
