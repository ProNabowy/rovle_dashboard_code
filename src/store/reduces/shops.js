import { createSlice } from "@reduxjs/toolkit";

const shops = createSlice({

    name: "province",

    initialState: [],

    reducers: {

        setShops: (state, action) => {

            return state = action.payload;

        }
    }
});

export default shops.reducer;


export const { setShops } = shops.actions;