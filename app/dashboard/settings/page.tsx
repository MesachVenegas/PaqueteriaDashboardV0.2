import { Metadata } from "next";

import { UserProps } from "@/types/user";
import { getAllUsers } from "@/data/user";
import { Card } from "@/components/ui/card";
import UsersTable from "@/components/users-table";
import RegisterUser from "@/components/register-user";
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Ajustes',
  description: 'Dashboard App home page',
}


export default async function Settings() {
  const users = await getAllUsers() as UserProps[] ;


  return (
    <main className="flex flex-col gap-8 p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Ajustes</h1>
        <Tabs defaultValue="profile" className="flex flex-col gap-2">
          <TabsList className="flex justify-start bg-slate-200 dark:bg-slate-900 border-2">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="users">Usuarios</TabsTrigger>
            <TabsTrigger value="register">Registro</TabsTrigger>
          </TabsList>
          <Card className="min-h-[70vh] p-8">
            <UsersTable users={users} />
            <RegisterUser />
          </Card>
        </Tabs>
    </main>
  )
}
