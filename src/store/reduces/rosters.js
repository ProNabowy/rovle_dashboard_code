import { createSlice } from "@reduxjs/toolkit";

const rosters = createSlice({

    name: "rosters",

    initialState: [],

    reducers: {

        setRosters: (state, action) => {

            return state = action.payload;

        }
    }
    
});

export default rosters.reducer;


export const { setRosters } = rosters.actions;