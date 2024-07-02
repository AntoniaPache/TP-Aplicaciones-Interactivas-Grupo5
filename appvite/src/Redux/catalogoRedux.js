import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Acción asincrónica para obtener los productos desde la base de datos
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('http://localhost:4002/productos'); // Asegúrate de usar la URL correcta de tu API
  console.log("Se actualizo el catalogo");
  return response.data;
});

export const CatalogoRedux = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

