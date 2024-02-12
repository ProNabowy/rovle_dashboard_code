import React, { useContext } from 'react'
import { useRoutes } from 'react-router-dom';
import * as data from './data';
import { hasRoutePermissions } from '../assets/utils/utils';
import { AppContext } from '../context/AppContext';

// Configuration for routes
const routeConfig = [
    //   Auth Routes
    { path: "login", component: data.Login, permissionCheck: true },
    { path: "reset-password", component: data.ForgetPassword, permissionCheck: true },
    //   Permissions Routes
    { path: "settings/permissions/list", component: data.PermissionList, permissionCheck: 'dashboard.roles.index' },
    { path: "/settings/permissions/list/add-permission", component: data.AddPermission, permissionCheck: 'dashboard.roles.store' },
    { path: "/settings/permissions/list/edit-permission", component: data.EditPermissions, permissionCheck: 'dashboard.roles.update' },
    //   Products Routes
    { path: "/products/list", component: data.ProductsList, permissionCheck: 'dashboard.products.index' },
    { path: "/products/list/add-product/choose-owner", component: data.ChooseOwner, permissionCheck: 'dashboard.products.store' },
    { path: "/products/list/add-product", component: data.AddProduct, permissionCheck: 'dashboard.products.store' },
    { path: "/products/list/add-product/another-owner", component: data.AddProductByOtherOwner, permissionCheck: 'dashboard.products.store' },
    { path: "/products/list/edit-product", component: data.EditProduct, permissionCheck: 'dashboard.products.update' },
    //   Origins Routes
    { path: "/origins/list", component: data.OriginsList, permissionCheck: 'dashboard.origins.index' },
    { path: "/origins/list/add-origin", component: data.AddOrigin, permissionCheck: 'dashboard.origins.store' },
    //   Plans Routes
    { path: "/products/plans/list", component: data.PlansList, permissionCheck: 'dashboard.plans.index' },
    { path: "/products/plans/add-plan", component: data.AddPlan, permissionCheck: 'dashboard.plans.store' },
    { path: "/products/plans/edit-plan", component: data.EditPlan, permissionCheck: 'dashboard.plans.update' },
    //   Subscriptions Routes
    { path: "/products/plans/subscriptions", component: data.Subscriptions, permissionCheck: 'dashboard.plans.subscriptions' },
    { path: "/products/plans/subscriptions/list", component: data.SubscriptionsList, permissionCheck: 'dashboard.plans.subscriptions' },
    { path: "/products/plans/subscriptions/manage-package", component: data.ManagePackage, permissionCheck: 'dashboard.plans.subscriptions' },
    //   Sizes Routes
    { path: "/products/plans/size/list", component: data.SizeList, permissionCheck: 'dashboard.sizes.index' },
    { path: "/products/plans/size/list/add-size", component: data.AddSize, permissionCheck: 'dashboard.sizes.store' },
    //   Users Routes
    { path: "/groups/users", component: data.UsersList, permissionCheck: 'dashboard.users.index' },
    { path: "/groups/users/add-user", component: data.AddUser, permissionCheck: 'dashboard.users.store' },
    { path: "/groups/users/edit-user", component: data.EditUser, permissionCheck: 'dashboard.users.update' },
    //   Roasters Routes
    { path: "/groups/roasters", component: data.Roasters, permissionCheck: 'dashboard.providers.index' },
    { path: "/groups/roasters/add-roaster", component: data.AddRoasters, permissionCheck: 'dashboard.providers.store' },
    { path: "/groups/roasters/edit-roaster", component: data.EditRoaster, permissionCheck: 'dashboard.providers.update' },
    //   Orders Routes
    { path: "groups/orders", component: data.Orders, permissionCheck: 'dashboard.orders.index' },
    //   Coffees Routes
    { path: "/setups/coffee-shop", component: data.CoffeShopList, permissionCheck: 'dashboard.coffeeShops.index' },
    { path: "/setups/coffee-shop/add-coffee", component: data.AddCoffee, permissionCheck: 'dashboard.coffeeShops.store' },
    { path: "/setups/coffee-shop/edit-coffee", component: data.EditCoffee, permissionCheck: 'dashboard.coffeeShops.update' },
    //   Offers Routes
    { path: "/setups/offers", component: data.OffersList, permissionCheck: 'dashboard.passports.index' },
    { path: "/setups/offers/add-offer", component: data.AddOffer, permissionCheck: 'dashboard.passports.store' },
    { path: "/setups/offers/edit-offer", component: data.EditOffer, permissionCheck: 'dashboard.passports.update' },
    //   Profile Routes
    { path: "profile", component: data.Profile, permissionCheck: 'dashboard.profile.index' },


    { path: "*", component: data.NotFound, permissionCheck: true },

];

export default function useHandleRoutes() {

    const { userPeressmisons } = useContext(AppContext);

    const routes = useRoutes(
        routeConfig.map(({ path, component, permissionCheck }) => ({
            path,
            element: hasRoutePermissions(userPeressmisons, permissionCheck) || permissionCheck === true ? React.createElement(component) : null,
        }))
    );

    return { routes };
}
