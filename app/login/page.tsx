import Image from "next/image";
import { authenticate } from "../libs/actions";
import LoginForm from "@/components/login/loginForm/LoginForm";
import { redirect } from "next/navigation";

export default async function Login() {

  const handleLogin = async (data: Iterable<readonly [PropertyKey, any]>) => {
    'use server'
    await authenticate(data)
      .catch( (error) => console.log(error) )
  }



  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col max-w-md w-full h-min gap-4 shadow-xl bg-gray-200 rounded-lg p-6 relative">
        <div className="absolute bg-slate-50 rounded-full top-[-30%] left-1/3 w-36 h-36">
          <Image src='/assets/logo_start_blue.png' width={150} height={150} alt="Paqueteria 5 Estrellas"/>
        </div>
        <h1 className="text-xl text-center text-gray-700 mt-8">Iniciar Session</h1>
        <LoginForm handleLogin={handleLogin}/>
        <div className="border border-red-400 rounded-md p-2 bg-red-300">
          Errores
        </div>
      </div>
    </div>
  )
}
