import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface UserProps {
  id: string;
  avatar: string;
  name: string;
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
  addressed_name: string;
  addressed_phone: string;
  addressed_street: string;
  addressed_number: string;
  addressed_colony: string;
  addressed_city: string;
  addressed_zip: string;
  addressed_state: string;
  addressed_reference: string;
  package_length: number;
  package_width: number;
  package_height: number;
  package_weight: number;
  bill_id: number;
  total: number;
  payment_type: 'cash' | 'card' | 'transfer' | 'partial';
  type: 'land' | 'air';
  is_complete: boolean;
  registerAt: Date;
  updateAt: Date;
}


export interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  delivery: 'land' | 'air';
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

export interface SessionProps {
  name: string;
  image: string;
  is_admin?: boolean;
}

export interface FormSaleProps {
  name: string;
  phone: string;
  street: string;
  number: string;
  colony: string;
  delegation: string;
  zip_code: string;
  state: string;
  references: string;
  length: string;
  height: string;
  width: string;
  weight: string;
  send: "land" | "air";
  payment: "cash" | "card" | "transfer" | "partial";
  money500: number;
  money200: number;
  money100: number;
  money50: number;
  money20: number;
  coin20: number;
  coin10: number;
  coin5: number;
  coin2: number;
  coin1: number;
  coin50: number;
}

export type BoxCutProps = {
  money500: number;
  money200: number;
  money100: number;
  money50: number;
  money20: number;
  coin20: number;
  coin10: number;
  coin5: number;
  coin2: number;
  coin1: number;
  coin50: number;
}

export type FormProduct = {
  name: string;
  description: string;
  price: number;
  delivery: 'land' | 'air';
}

export interface PDFData {
  data: FormSaleProps;
  folio: string;
  client: ClientProps;
  volumetric: number;
  subtotal: number;
}

export interface PreviewProps extends PDFData {
  confirm: (value: boolean) => void;
  cancel: (value: boolean) => void;
}


export type OrderSaveProps = {
  addresses: FormSaleProps;
  client: ClientProps;
  volumetric: number;
  subtotal: number;
}


export type ChartProps = {
  month: string;
  year: number;
  clientes: number;
  }

export type TransactionProps = {
  id: string;
  client_id: string,
  addressed_name: string,
  addressed_phone: string,
  addressed_street: string,
  addressed_number: string,
  addressed_colony: string,
  addressed_city: string,
  addressed_zip: string,
  addressed_state: string,
  addressed_reference: string,
  package_length: number,
  package_width: number,
  package_height: number,
  package_weight: number,
  total: number,
  type: string,
  payment_type: string,
  registerAt: Date,
  updateAt: Date,
  client: {
    id: string;
    avatar: string;
    name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    type: 'minors' | 'wholesaler';
    registerAt: Date;
    updateAt: Date;
  },
}