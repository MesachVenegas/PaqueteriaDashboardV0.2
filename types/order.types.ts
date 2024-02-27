import { ClientProps } from "./client.types";
import { ProductProps } from "./product.types";
import { UserProps } from "./user.types";

export interface SaleFormProps {
  products: ProductProps[]
}

export interface OrderCheckOutProps {
  client: ClientProps | null,
  seller: UserProps | null,
  addresser_name: string,
  street: string,
  number: string,
  colony: string,
  delegation: string,
  zip_code: string,
  state: string,
  references: string,
  pkg_length: string,
  pkg_height: string,
  pkg_width: string,
  pkg_weight: string,
  total: string,
  delivery_type: 'land' | 'air',
  payment_type: 'cash' | 'card' | 'transfer' | 'partial',
  product_selected: string
}