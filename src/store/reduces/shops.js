import { createSlice } from "@reduxjs/toolkit";

const shops = createSlice({

    name: "shops",

    initialState: [],

    reducers: {

        setShops: (state, action) => {

            return state = action.payload;

        }
    }
});

export default shops.reducer;


export const { setShops } = shops.actions;