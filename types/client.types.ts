import { OrderProps } from "@/app/libs/definitions";

export interface ClientProps {
  id: string;
  avatar_url?: string | null;
  name: string;
  last_name: string;
  email?: string;
  phone: string;
  address: string;
  type: 'minors' | 'wholesaler';
  registerAt: Date;
  updateAt: Date;
}


export interface ClientSaleTableProps {
  clients: ClientProps[],
  count: number
}