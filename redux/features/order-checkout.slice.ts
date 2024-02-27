import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { AddresserDataSchema } from "@/schema/order.schema";
import { OrderCheckOutProps } from "@/types/order.types";

const initialState: OrderCheckOutProps = {
  client: null,
  seller: null,
  addresser_name: '',
  street: '',
  number: '',
  colony: '',
  delegation: '',
  zip_code: '',
  state: '',
  references: '',
  pkg_length: '',
  pkg_height: '',
  pkg_width: '',
  pkg_weight: '',
  delivery_type: 'land',
  total: '',
  product_selected: null
}

export const orderCheckOutSlice = createSlice({
  name: 'order_check_out',
  initialState,
  reducers: {
    setOrderCheckOut: (state, action: PayloadAction<OrderCheckOutProps>) => {
      state.client = action.payload.client;
      state.seller = action.payload.seller;
      state.addresser_name = action.payload.addresser_name;
      state.street = action.payload.street;
      state.number = action.payload.number;
      state.colony = action.payload.colony;
      state.delegation = action.payload.delegation;
      state.zip_code = action.payload.zip_code;
      state.state = action.payload.state;
      state.references = action.payload.references;
      state.pkg_length = action.payload.pkg_length;
      state.pkg_height = action.payload.pkg_height;
      state.pkg_width = action.payload.pkg_width;
      state.pkg_weight = action.payload.pkg_weight;
      state.delivery_type = action.payload.delivery_type;
      state.total = action.payload.total;
      state.product_selected = action.payload.product_selected;
    }
  }
})

export const { setOrderCheckOut } = orderCheckOutSlice.actions;
export default orderCheckOutSlice.reducer