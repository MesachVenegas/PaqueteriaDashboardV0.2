import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface UserProps {
  id: string;
  avatar: string;
  username: string;
  last_name: string;
  password: string;
  is_admin: boolean;
}

export interface ClientProps {
  id: string;
  avatar?: string;
  name: string;
  last_name: string;
  email?: string;
  phone: string;
  address: string;
  type: 'minors' | 'wholesaler';
  registerAt: Date;
  updateAt: Date;
  orders?: OrderProps[];
}

export interface OrderProps {
  id: string;
  client_id: string;
  seller_id: string;
  addresses: string;
  bill_id: number;
  total: number;
  payment_type: 'cash' | 'card' | 'transfer' | 'partial';
  type: 'land' | 'air';
  is_complete: boolean;
  registerAt: Date;
  updateAt: Date;
}

export interface BillProps {
  id: string;
  url: string;
  registerAt: Date;
  updateAt: Date;
}

export interface OtherBillProps {
  id: string;
  name: string;
  description: string;
  provider_id: string;
  mount: number;
  registerAt: Date;
  updateAt: Date;
}

export type ButtonProps = {
  text: string;
  type: 'link' | 'button';
  source?: string;
  icon?: IconDefinition;
  color?: 'slate' | 'blue' | 'red' | 'green' | 'yellow' | 'gray' | 'white' | 'black' | 'transparent' | 'emerald';
  action?: () => void;
}