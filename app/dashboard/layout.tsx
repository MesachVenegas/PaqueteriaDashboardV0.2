import Footer from "@/components/dashboard/footer/Footer";
import Navbar from "@/components/dashboard/navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";

export default function layout({ children } : {children: React.ReactNode}) {
  return (
    <div className="flex w-full min-h-screen dark:bg-slate-900 dark:text-white">
      <aside className="flex">
        <Sidebar />
      </aside>
      <main className="flex-1 h-screen overflow-y-auto bg-slate-50 dark:bg-slate-900 dark:text-white p-5">
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  )
}
