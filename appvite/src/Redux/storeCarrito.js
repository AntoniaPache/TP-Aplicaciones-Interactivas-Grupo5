import { configureStore } from '@reduxjs/toolkit';
import {carritoSlice } from './carritoSlice';

export const storeCarrito = configureStore({
  reducer: {
    productos: carritoSlice.reducer
  }
});
