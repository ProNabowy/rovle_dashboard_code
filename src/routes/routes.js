
import { Route, Routes } from 'react-router-dom';
import {
    Login,
    ProvinceList,
    AddProvince,
    EditProvince,
    CountryList,
    AddCountry,
    EditCountry,
    CitiesList,
    AddCity,
    EditCity,
    PermissionList,
    AddPermission,
    EditPermissions,
    ProductsList,
    ChooseOwner,
    AddProduct,
    AddProductByOtherOwner,
    EditProduct,
    OriginsList,
    AddOrigin,
    PlansList,
    AddPlan,
    EditPlan,
    SubscriptionsList,
    Subscriptions,
    ManagePackage,
    SizeManagement,
    SizeList,
    AddSize,
    UsersList,
    AddUser,
    EditUser,
    Roasters,
    AddRoasters,
    EditRoaster,
    CoffeShopList,
    AddCoffee,
    EditCoffee,
    OffersList,
    AddOffer,
    EditOffer,
    Profile,
    Orders,
    OrdersDetails,
    NotFound,
} from './data';
import { Suspense } from 'react';
import { Spiners } from '../components';


export default function routes(isHasPermissions) {

    const isAdmin = JSON.parse(localStorage.getItem('user'))?.roles?.[0]?.name === 'admin';

    return (

        <Suspense fallback={<Spiners />}>

            <Routes>

                <Route path='' element={<p></p>} />

                <Route path='/login' element={<Login />} />

                <Route path="/settings/country/list" element={isHasPermissions('Countries', 'dashboard.countries.index') ? <CountryList /> : <NotFound />} />
                <Route path="/settings/country/list/add-country" element={isHasPermissions('Countries', 'dashboard.countries.store') ? <AddCountry /> : <NotFound />} />
                <Route path="/settings/country/list/edit-country" element={isHasPermissions('Countries', 'dashboard.countries.update') ? <EditCountry /> : <NotFound />} />


                <Route path="/settings/province/list" element={isHasPermissions('Provinces', 'dashboard.provinces.index') ? <ProvinceList /> : <NotFound />} />
                <Route path="/settings/province/list/add-province" element={isHasPermissions('Provinces', 'dashboard.provinces.store') ? <AddProvince /> : <NotFound />} />
                <Route path="/settings/province/list/edit-province" element={isHasPermissions('Provinces', 'dashboard.provinces.update') ? <EditProvince /> : <NotFound />} />


                <Route path="/settings/cities/list" element={isHasPermissions('Cities', 'dashboard.cities.index') ? <CitiesList /> : <NotFound />} />
                <Route path="/settings/cities/list/add-city" element={isHasPermissions('Cities', 'dashboard.cities.store') ? <AddCity /> : <NotFound />} />
                <Route path="/settings/cities/list/edit-city" element={isHasPermissions('Cities', 'dashboard.cities.update') ? <EditCity /> : <NotFound />} />

                <Route path="settings/permissions/list" element={isHasPermissions('Roles', 'dashboard.roles.index') ? <PermissionList /> : <NotFound />} />
                <Route path="/settings/permissions/list/add-permission" element={isHasPermissions('Roles', 'dashboard.roles.store') ? <AddPermission /> : <NotFound />} />
                <Route path="/settings/permissions/list/edit-permission" element={isHasPermissions('Roles', 'dashboard.roles.update') ? <EditPermissions /> : <NotFound />} />


                <Route path="/products/list" element={isHasPermissions('Products', 'dashboard.products.index') ? <ProductsList /> : <NotFound />} />
                <Route path="/products/list/add-product/choose-owner" element={isHasPermissions('Products', 'dashboard.products.store') ? <ChooseOwner /> : <NotFound />} />
                <Route path="/products/list/add-product" element={isHasPermissions('Products', 'dashboard.products.store') ? <AddProduct /> : <NotFound />} />
                <Route path="/products/list/add-product/another-owner" element={isHasPermissions('Products', 'dashboard.products.store') ? <AddProductByOtherOwner /> : <NotFound />} />
                <Route path="/products/list/edit-product" element={isHasPermissions('Products', 'dashboard.products.update') ? <EditProduct /> : <NotFound />} />

                <Route path="/origins/list" element={isHasPermissions('Origins', 'dashboard.origins.index') ? <OriginsList /> : <NotFound />} />
                <Route path="/origins/list/add-origin" element={isHasPermissions('Origins', 'dashboard.origins.store') ? <AddOrigin /> : <NotFound />} />


                <Route path="/products/plans/list" element={isHasPermissions('Plans', 'dashboard.plans.index') ? <PlansList /> : <NotFound />} />
                <Route path="/products/plans/add-plan" element={isHasPermissions('Plans', 'dashboard.plans.store') ? <AddPlan /> : <NotFound />} />
                <Route path="/products/plans/edit-plan" element={isHasPermissions('Plans', 'dashboard.plans.update') ? <EditPlan /> : <NotFound />} />


                <Route path="/products/plans/subscriptions" element={isHasPermissions('Subscription', 'dashboard.plans.subscriptions') ? <Subscriptions /> : <NotFound />} />
                <Route path="/products/plans/subscriptions/list" element={isHasPermissions('Subscription', 'dashboard.plans.subscriptions') ? <SubscriptionsList /> : <NotFound />} />
                <Route path="/products/plans/subscriptions/manage-package" element={isHasPermissions('Subscription', 'dashboard.plans.subscriptions') ? <ManagePackage /> : <NotFound />} />

                <Route path="/products/plans/size" element={isHasPermissions('Sizes', 'dashboard.sizes.index') ? <SizeManagement /> : <NotFound />} />
                <Route path="/products/plans/size/list" element={isHasPermissions('Sizes', 'dashboard.sizes.index') ? <SizeList /> : <NotFound />} />
                <Route path="/products/plans/size/list/add-size" element={isHasPermissions('Sizes', 'dashboard.sizes.store') ? <AddSize /> : <NotFound />} />


                <Route path="/groups/users" element={isHasPermissions('Users', 'dashboard.users.index') ? <UsersList /> : <NotFound />} />
                <Route path="/groups/users/add-user" element={isHasPermissions('Users', 'dashboard.users.store') ? <AddUser /> : <NotFound />} />
                <Route path="/groups/users/edit-user" element={isHasPermissions('Users', 'dashboard.users.update') ? <EditUser /> : <NotFound />} />


                <Route path="/groups/roasters" element={isHasPermissions('Providers', 'dashboard.providers.index') && isAdmin ? <Roasters /> : <NotFound />} />
                <Route path="/groups/roasters/add-roaster" element={isHasPermissions('Providers', 'dashboard.providers.store') && isAdmin ? <AddRoasters /> : <NotFound />} />
                <Route path="/groups/roasters/edit-roaster" element={isHasPermissions('Providers', 'dashboard.providers.update') && isAdmin ? <EditRoaster /> : <NotFound />} />

                <Route path="groups/orders" element={isHasPermissions('Orders', 'dashboard.orders.index') ? <Orders /> : <NotFound />} />
                <Route path="groups/orders/order-details" element={isHasPermissions('Orders', 'dashboard.orders.index') ? <OrdersDetails /> : <NotFound />} />

                <Route path="/setups/coffee-shop" element={isHasPermissions('Coffee Shops', 'dashboard.coffeeShops.index') ? <CoffeShopList /> : <NotFound />} />
                <Route path="/setups/coffee-shop/add-coffee" element={isHasPermissions('Coffee Shops', 'dashboard.coffeeShops.store') ? <AddCoffee /> : <NotFound />} />
                <Route path="/setups/coffee-shop/edit-coffee" element={isHasPermissions('Coffee Shops', 'dashboard.coffeeShops.update') ? <EditCoffee /> : <NotFound />} />


                <Route path="/setups/offers" element={isHasPermissions('Passports', 'dashboard.passports.index') ? <OffersList /> : <NotFound />} />
                <Route path="/setups/offers/add-offer" element={isHasPermissions('Passports', 'dashboard.passports.store') ? <AddOffer /> : <NotFound />} />
                <Route path="/setups/offers/edit-offer" element={isHasPermissions('Passports', 'dashboard.passports.update') ? <EditOffer /> : <NotFound />} />


                <Route path="/profile" element={isHasPermissions('Profile', 'dashboard.profile.index') ? <Profile /> : <NotFound />} />

                <Route path="*" element={<NotFound />} />

            </Routes>

        </Suspense>

    );
}
