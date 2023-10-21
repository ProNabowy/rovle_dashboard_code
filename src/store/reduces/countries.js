import { createSlice } from "@reduxjs/toolkit";

const countries = createSlice({

    name: "countries",

    initialState: [],

    reducers: {

        setCountries: (state, action) => {

            return state = action.payload;

        }
    }
});

export default countries.reducer;


export const { setCountries } = countries.actions;