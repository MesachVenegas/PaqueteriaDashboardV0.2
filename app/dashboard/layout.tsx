import { Metadata } from "next";
import Footer from "@/components/dashboard/footer/Footer";
import Navbar from "@/components/dashboard/navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import { auth, signOut } from "../auth";
import { SessionProps } from "../libs/definitions";

export const metadata: Metadata = {
  title: 'Dashboard | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}

export default async function layout({ children } : {children: React.ReactNode}) {

    const session = await auth()
    const { user } = session || {};

  const closeSession = async () => {
    'use server'
    await signOut()
  }

  return (
    <div className="flex w-full min-h-screen dark:bg-slate-800 dark:text-white">
      <aside className="flex">
        <Sidebar closeSession={closeSession} userSignIn={ user as SessionProps } />
      </aside>
      <main className="flex-1 h-screen overflow-y-auto bg-slate-50 dark:bg-slate-800 dark:text-white p-5">
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  )
}
