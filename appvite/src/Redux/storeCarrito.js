import { configureStore } from '@reduxjs/toolkit';
import {carritoSlice } from './carritoSlice';
import {searchReducer} from './SearchBarRedux';

export const storeCarrito = configureStore({
  reducer: {
    productos: carritoSlice.reducer,
    busqueda: searchReducer
  }
});
