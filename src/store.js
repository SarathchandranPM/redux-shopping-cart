import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

// cart represents the name of our slice, cartSlice and cartReducer the reducer function we exported from cartSlice

// We can set up more pairs like this.
