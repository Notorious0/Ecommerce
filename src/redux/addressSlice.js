import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'addresses',
  initialState: {
    addresses: [],
  },
  reducers: {
    setAddresses(state, action) {
      state.addresses = action.payload;
    },
    addAddress(state, action) {
      state.addresses.push(action.payload);
    },
  },
});

export const { setAddresses, addAddress } = addressSlice.actions;
export default addressSlice.reducer;
