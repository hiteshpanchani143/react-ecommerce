import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/ProuctSlice'
 
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
