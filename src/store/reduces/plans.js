import { createSlice } from "@reduxjs/toolkit";

const plans = createSlice({

    name: "countries",

    initialState: [],

    reducers: {

        setPlans: (state, action) => {

            return state = action.payload;

        }
    }
});

export default plans.reducer;


export const { setPlans } = plans.actions;