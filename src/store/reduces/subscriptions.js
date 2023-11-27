import { createSlice } from "@reduxjs/toolkit";

const subscriptions = createSlice({

    name: "permissions",

    initialState: [],

    reducers: {

        setSubscriptions: (state, action) => {

            return state = action.payload;

        }
    }
});

export default subscriptions.reducer;


export const { setSubscriptions } = subscriptions.actions;