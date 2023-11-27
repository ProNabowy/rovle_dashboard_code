import { createSlice } from "@reduxjs/toolkit";

const origins = createSlice({

    name: "province",

    initialState: [],

    reducers: {

        setOrigins: (state, action) => {

            return state = action.payload;

        }
    }
});

export default origins.reducer;


export const { setOrigins } = origins.actions;