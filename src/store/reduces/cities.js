import { createSlice } from "@reduxjs/toolkit";

const cities = createSlice({

    name: "cities",

    initialState: [],

    reducers: {

        setCities: (state, action) => {

            return state = action.payload;

        }
    }
});

export default cities.reducer;


export const { setCities } = cities.actions;