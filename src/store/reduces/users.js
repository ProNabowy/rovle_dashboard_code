import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({

    name: "province",

    initialState: [],

    reducers: {

        setUsers: (state, action) => {

            return state = action.payload;

        }
    }
});

export default users.reducer;


export const { setUsers } = users.actions;