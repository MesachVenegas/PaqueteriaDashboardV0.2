import { Metadata } from "next";

import Footer from "@/components/dashboard/footer/Footer";
import Sidebar from "@/components/sidebar-menu";

export const metadata: Metadata = {
  title: 'Dashboard | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}

export default async function layout({ children } : { children: React.ReactNode }) {


  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen dark:bg-slate-800 dark:text-white">
      <aside className="flex">
        <Sidebar />
      </aside>
      <main className="flex-1 h-screen overflow-y-auto bg-slate-50 dark:bg-slate-800 dark:text-white p-5">
        {children}
        <Footer />
      </main>
    </div>
  )
}
