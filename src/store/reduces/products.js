import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({

    name: "products",

    initialState: [],

    reducers: {

        setProducts: (state, action) => {

            return state = action.payload;

        }
    }
});

export default products.reducer;


export const { setProducts } = products.actions;