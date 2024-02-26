import { configureStore } from '@reduxjs/toolkit';

import clientSelectToSale from './features/sale-client.slice'

export const store = configureStore({
  reducer: {
    client_select_to_sale: clientSelectToSale
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch