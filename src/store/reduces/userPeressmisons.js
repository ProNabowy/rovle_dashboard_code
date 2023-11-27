import { createSlice } from "@reduxjs/toolkit";

const userRoles = JSON.parse(localStorage.getItem('user'))?.roles && JSON.parse(localStorage.getItem('user'))?.roles[0]?.permissions?.map(item => item?.id);

const userPeressmisons = createSlice({

    name: "userPeressmisons",

    initialState: userRoles || [],

    reducers: {


    }

});

export default userPeressmisons.reducer;