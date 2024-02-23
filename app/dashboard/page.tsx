
import Cards from "@/components/dashboard/cards/Cards";
import Rightbar from "@/components/dashboard/rigthbar/Rightbar";


export default async function DashboardPage() {



  return (
    <div className="grid grid-cols-4 w-full gap-5 mt-5">
      <div className="col-span-full xl:col-span-3 flex flex-col gap-5">
        <div className="flex flex-wrap w-full m-auto gap-6">
            <Cards title="Clientes totales" type="clients" counter={12} profit={12}/>
            <Cards title="Ventas del Dia" type="sales" counter={12000} profit={7}/>
            <Cards title="Ventas Mensuales" type="monthlySales" counter={303443} profit={15}/>
        </div>
          {/* <Transactions transactions={lastTransactions as TransactionProps[]} /> */}
          {/* <Chart data={clientsDataChart} /> */}
      </div>

      <div className="hidden xl:flex xl:col-span-1">
        <Rightbar />
      </div>
    </div>
  )
}
