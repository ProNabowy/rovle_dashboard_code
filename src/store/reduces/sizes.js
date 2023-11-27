import { createSlice } from "@reduxjs/toolkit";

const sizes = createSlice({

    name: "countries",

    initialState: [],

    reducers: {

        setSizes: (state, action) => {

            return state = action.payload;

        }
    }
});

export default sizes.reducer;


export const { setSizes } = sizes.actions;