import { configureStore } from "@reduxjs/toolkit";
import countries from "./reduces/countries";
import province from "./reduces/province";
import rosters from "./reduces/rosters";
import cities from "./reduces/cities";
import roles from "./reduces/roles";

export const store = configureStore({
    reducer: {

        countries: countries,
        province: province,
        rosters: rosters,
        cities: cities,
        roles: roles,
    }
});