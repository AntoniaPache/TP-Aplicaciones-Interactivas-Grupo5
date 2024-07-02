import { configureStore } from '@reduxjs/toolkit';
import {carritoSlice } from './carritoSlice';
import {searchReducer} from './SearchBarRedux';
import { CatalogoRedux } from './catalogoRedux';

export const storeCarrito = configureStore({
  reducer: {
    productos: carritoSlice.reducer,
    busqueda: searchReducer,
    catalogo: CatalogoRedux.reducer
  }
});
