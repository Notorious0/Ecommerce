import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import authReducer from './authSlice';
import addressReducer from './addressSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    addresses: addressReducer
  },
});

export default store;
