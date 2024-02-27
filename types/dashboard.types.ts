
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