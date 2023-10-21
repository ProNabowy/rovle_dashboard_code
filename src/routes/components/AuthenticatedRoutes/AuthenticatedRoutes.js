// importing require modules
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";


// Lazy Function To Load Page Lossaley
const ProvinceList = lazy(() => import('../../../pages/ProvinceList'));
const AddProvince = lazy(() => import('../../../pages/AddProvince'));

const CountryList = lazy(() => import('../../../pages/CountryList'));
const AddCountry = lazy(() => import('../../../pages/AddCountry'));

const CitiesList = lazy(() => import('../../../pages/CitiesList'));
const AddCity = lazy(() => import('../../../pages/AddCity'));

const PermissionList = lazy(() => import('../../../pages/PermissionList'));
const AddPermission = lazy(() => import('../../../pages/AddPermissions'));


const ProductsList = lazy(() => import('../../../pages/ProductsList'));
const AddProduct = lazy(() => import('../../../pages/AddProduct'));


const OriginsList = lazy(() => import('../../../pages/OriginsList'));
const AddOrigin = lazy(() => import('../../../pages/AddOrigin'));


const PlansList = lazy(() => import('../../../pages/PlansList'));
const AddPlan = lazy(() => import('../../../pages/AddPlan'));


const Subscriptions = lazy(() => import('../../../pages/Subscriptions'));
const SubscriptionsList = lazy(() => import('../../../pages/SubscriptionsList'));


const SizeManagement = lazy(() => import('../../../pages/SizeManagement'));
const SizeList = lazy(() => import('../../../pages/SizeList'));
const AddSize = lazy(() => import('../../../pages/AddSize'));


const UsersList = lazy(() => import('../../../pages/UsersList'));
const AddUser = lazy(() => import('../../../pages/AddUser'));

const Roasters = lazy(() => import('../../../pages/RoastersList'));
const AddRoasters = lazy(() => import('../../../pages/AddRoasters'));

const CoffeShopList = lazy(() => import('../../../pages/CoffeShopList'));
const AddCoffee = lazy(() => import('../../../pages/AddCoffee'));

const OffersList = lazy(() => import('../../../pages/OffersList'));
const AddOffer = lazy(() => import('../../../pages/AddOffer'));

export default function AuthenticatedRoutes() {
    return (
        <Routes>

            <Route path="/settings/country/list" element={<CountryList />} />
            <Route path="/settings/country/list/add-country" element={<AddCountry />} />


            <Route path="/settings/province/list" element={<ProvinceList />} />
            <Route path="/settings/province/list/add-province" element={<AddProvince />} />


            <Route path="/settings/cities/list" element={<CitiesList />} />
            <Route path="/settings/cities/list/add-city" element={<AddCity />} />

            <Route path="settings/permissions/list" element={<PermissionList />} />
            <Route path="/settings/permissions/list/add-permission" element={<AddPermission />} />


            <Route path="/products/list" element={<ProductsList />} />
            <Route path="/products/list/add-product" element={<AddProduct />} />

            <Route path="/origins/list" element={<OriginsList />} />
            <Route path="/origins/list/add-origin" element={<AddOrigin />} />


            <Route path="/products/plans/list" element={<PlansList />} />
            <Route path="/products/plans/add-plan" element={<AddPlan />} />


            <Route path="/products/plans/subscriptions" element={<Subscriptions />} />
            <Route path="/products/plans/subscriptions/list" element={<SubscriptionsList />} />

            <Route path="/products/plans/size" element={<SizeManagement />} />
            <Route path="/products/plans/size/list" element={<SizeList />} />
            <Route path="/products/plans/size/list/add-size" element={<AddSize />} />


            <Route path="/groups/users" element={<UsersList />} />
            <Route path="/groups/users/add-user" element={<AddUser />} />


            <Route path="/groups/roasters" element={<Roasters />} />
            <Route path="/groups/roasters/add-roaster" element={<AddRoasters />} />

            <Route path="/setups/coffee-shop" element={<CoffeShopList />} />
            <Route path="/setups/coffee-shop/add-coffee" element={<AddCoffee />} />


            <Route path="/products/list/offers" element={<OffersList />} />
            <Route path="/products/list/offers/add-offer" element={<AddOffer />} />




        </Routes>
    )
}
