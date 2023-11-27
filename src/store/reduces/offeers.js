import { createSlice } from "@reduxjs/toolkit";

const offeers = createSlice({

    name: "offeers",

    initialState: [],

    reducers: {

        setOffeers: (state, action) => {

            return state = action.payload;

        }
    }
});

export default offeers.reducer;


export const { setOffeers } = offeers.actions;