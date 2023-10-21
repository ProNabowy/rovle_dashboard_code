import { createSlice } from "@reduxjs/toolkit";

const province = createSlice({

    name: "province",

    initialState: [],

    reducers: {

        setProvince: (state, action) => {

            return state = action.payload;

        }
    }
});

export default province.reducer;


export const { setProvince } = province.actions;