import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && 
        item.color === action.payload.color && 
        item.size === action.payload.size
      );
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); 
      }
    },
    removeFromCart(state, action) {
      const { id, color, size } = action.payload; 
      state.items = state.items.filter(item => 
        item.id !== id || 
        item.color !== color || 
        item.size !== size
      ); 
    },     
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = []; // Sepeti temizle
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
