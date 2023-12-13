'use client'

import { useState } from "react";
import { ClientProps, ProductProps } from "@/app/libs/definitions";
import ClientSaleTable from "../tables/ClientSaleTable";
import Pagination from "../../pagination/Pagination";
import SaleForm from "../form/SaleForm";

export default function ClientSalePoint({ clients, count, prices} : { clients: ClientProps[], count: number, prices: ProductProps[]} ) {
  const [clientSelected, setClientSelected] = useState<ClientProps>()


  return (
    <>
      {
        clientSelected ? null : (
          <div className="w-full xl:w-96">
            <ClientSaleTable  data={clients} selectClient={setClientSelected}/>
            <Pagination count={count} />
          </div>
        )
      }
      <div className="w-full">
        <SaleForm setClient={setClientSelected} client={clientSelected as ClientProps} prices={prices} />
      </div>
    </>
  )
}
