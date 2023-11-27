import { configureStore } from "@reduxjs/toolkit";
import userPeressmisons from "./reduces/userPeressmisons";
import permissions from "./reduces/permissions";
import countries from "./reduces/countries";
import province from "./reduces/province";
import rosters from "./reduces/rosters";
import cities from "./reduces/cities";
import roles from "./reduces/roles";
import products from "./reduces/products";
import origins from "./reduces/origins";
import plans from "./reduces/plans";
import subscriptions from "./reduces/subscriptions";
import sizes from "./reduces/sizes";
import users from "./reduces/users";
import shops from "./reduces/shops";
import offeers from "./reduces/offeers";

export const store = configureStore({
    reducer: {
        countries: countries,
        province: province,
        rosters: rosters,
        cities: cities,
        roles: roles,
        permissions: permissions,
        userPeressmisons: userPeressmisons,
        products: products,
        origins: origins,
        plans: plans,
        subscriptions: subscriptions,
        sizes: sizes,
        users: users,
        shops: shops,
        offeers: offeers,
    }
});