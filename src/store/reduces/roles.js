import { createSlice } from "@reduxjs/toolkit";

const roles = createSlice({

    name: "roles",

    initialState: [],

    reducers: {

        setRoles: (state, action) => {

            return state = action.payload;

        }
    }
});

export default roles.reducer;


export const { setRoles } = roles.actions;