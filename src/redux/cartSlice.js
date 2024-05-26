import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartData: [],
  userInfo: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // find method return the element which passes a particular test
      const item = state.cartData.find(
        (item) => item._id === action.payload._id
      );
      if (item) item.quantity += action.payload.quantity;
      else state.cartData.push(action.payload);
      //   pushes the curernt data to pre existing cart data
    },
    deleteFromCart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item._id !== action.payload._id
      );
    },
    resetCart: (state) => {
      state.cartData = [];
    },
    incrementQty: (state, action) => {
      const item = state.cartData.find(
        (item) => item._id === action.payload._id
      );
      if (item) item.quantity++;
    },
    decrementQty: (state, action) => {
      const item = state.cartData.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity > 1) item.quantity--;
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});
export const {
  addToCart,
  deleteFromCart,
  resetCart,
  incrementQty,
  decrementQty,
  addUser,
  removeUser,
} = cartSlice.actions;
export default cartSlice.reducer;
