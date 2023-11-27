import { createSlice } from "@reduxjs/toolkit";

const permissions = createSlice({

    name: "permissions",

    initialState: [],

    reducers: {

        setPermissions: (state, action) => {

            return state = action.payload;

        }
    }
});

export default permissions.reducer;


export const { setPermissions } = permissions.actions;