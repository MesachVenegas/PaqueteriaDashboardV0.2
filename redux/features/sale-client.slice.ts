import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ClientProps } from "@/types/client.types";


const initialState: ClientProps = {
  id: '',
  avatar_url: '',
  name: '',
  last_name: '',
  email: '',
  phone: '',
  address: '',
  type: 'minors',
  registerAt: new Date(),
  updateAt: new Date()
};


export const clientSelectToSale = createSlice({
  name: 'client_selected',
  initialState,
  reducers: {
    setClient: (state, action: PayloadAction<ClientProps>) => {
      state.id = action.payload.id;
      state.avatar_url = action.payload.avatar_url;
      state.name = action.payload.name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.type = action.payload.type;
      state.registerAt = action.payload.registerAt;
      state.updateAt = action.payload.updateAt;
    }
  }
});


export const { setClient } = clientSelectToSale.actions;
export default clientSelectToSale.reducer;