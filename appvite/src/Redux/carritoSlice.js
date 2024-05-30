import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    items: []
};

export const carritoSlice = createSlice({
    name: 'productos',
    initialState,
    reducers :{
        addProd: (state, action) => {
            const { item, price, quantity, size } = action.payload;
            const product = { item, price, quantity, size };
            state.items.push(product);
        },
        VaciarCarr: () => {
            state.items = [];
        }
    }
 });

export const {addProd, VaciarCarr} = carritoSlice.actions;
export default carritoSlice.reducer;