
import { FormSaleProps, PreviewProps } from "@/app/libs/definitions";
import { PDFViewer } from "@react-pdf/renderer";
import BillTemplate from "../pdfGenerator/BillTemplate";
import { Suspense } from "react";
import { saveOrder } from "@/app/libs/actions";

export default function PreviewBill({ data, client, volumetric, folio, subtotal, confirm, cancel} : PreviewProps) {

  const registerOrder = async () => {
    const orderData = {
      addresses: data,
      client: client,
      volumetric: volumetric,
      subtotal: subtotal
    }
    console.log(data);
    try {
      await saveOrder(orderData);
      confirm(false);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-slate-200/20 dark:bg-slate-700/50 backdrop-blur-sm p-1">
      <div className="w-full max-w-4xl m-auto bg-slate-200 dark:bg-slate-900 p-4 rounded-md h-screen">
        <Suspense fallback={<span>Cargando ...</span>}>
          <PDFViewer className="flex w-full min-h-[90vh] py-4">
              <BillTemplate  data={data as FormSaleProps} folio={folio} client={client} volumetric={volumetric} subtotal={subtotal} />
          </PDFViewer>
        </Suspense>
        <div className="flex justify-around p-2 gap-2">
          <button className="w-full max-w-xs bg-red-400 hover:bg-red-500 py-2 px-4 rounded-md font-bold text-white" onClick={() => cancel(false)}>
            Cancelar
          </button>
          <button className="w-full max-w-xs bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-md font-bold text-white" onClick={registerOrder}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
