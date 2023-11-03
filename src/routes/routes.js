
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
    AddProduct,
    EditProduct,
    OriginsList,
    AddOrigin,
    PlansList,
    AddPlan,
    EditPlan,
    SubscriptionsList,
    Subscriptions,
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
    OffersList,
    AddOffer,
    Profile,
    NotFound,
} from './data';
import { Suspense } from 'react';
import { Spiners } from '../components';


export default function routes() {

    return (

        <Suspense fallback={<Spiners />}>

            <Routes>

                <Route path='/login' element={<Login />} />

                <Route path="/settings/country/list" element={<CountryList />} />
                <Route path="/settings/country/list/add-country" element={<AddCountry />} />
                <Route path="/settings/country/list/edit-country" element={<EditCountry />} />


                <Route path="/settings/province/list" element={<ProvinceList />} />
                <Route path="/settings/province/list/add-province" element={<AddProvince />} />
                <Route path="/settings/province/list/edit-province" element={<EditProvince />} />


                <Route path="/settings/cities/list" element={<CitiesList />} />
                <Route path="/settings/cities/list/add-city" element={<AddCity />} />
                <Route path="/settings/cities/list/edit-city" element={<EditCity />} />

                <Route path="settings/permissions/list" element={<PermissionList />} />
                <Route path="/settings/permissions/list/add-permission" element={<AddPermission />} />
                <Route path="/settings/permissions/list/edit-permission" element={<EditPermissions />} />


                <Route path="/products/list" element={<ProductsList />} />
                <Route path="/products/list/add-product" element={<AddProduct />} />
                <Route path="/products/list/edit-product" element={<EditProduct />} />

                <Route path="/origins/list" element={<OriginsList />} />
                <Route path="/origins/list/add-origin" element={<AddOrigin />} />


                <Route path="/products/plans/list" element={<PlansList />} />
                <Route path="/products/plans/add-plan" element={<AddPlan />} />
                <Route path="/products/plans/edit-plan" element={<EditPlan />} />


                <Route path="/products/plans/subscriptions" element={<Subscriptions />} />
                <Route path="/products/plans/subscriptions/list" element={<SubscriptionsList />} />

                <Route path="/products/plans/size" element={<SizeManagement />} />
                <Route path="/products/plans/size/list" element={<SizeList />} />
                <Route path="/products/plans/size/list/add-size" element={<AddSize />} />


                <Route path="/groups/users" element={<UsersList />} />
                <Route path="/groups/users/add-user" element={<AddUser />} />
                <Route path="/groups/users/edit-user" element={<EditUser />} />


                <Route path="/groups/roasters" element={<Roasters />} />
                <Route path="/groups/roasters/add-roaster" element={<AddRoasters />} />
                <Route path="/groups/roasters/edit-roaster" element={<EditRoaster />} />

                <Route path="/setups/coffee-shop" element={<CoffeShopList />} />
                <Route path="/setups/coffee-shop/add-coffee" element={<AddCoffee />} />


                <Route path="/products/list/offers" element={<OffersList />} />
                <Route path="/products/list/offers/add-offer" element={<AddOffer />} />


                <Route path="/profile" element={<Profile />} />

                <Route path="*" element={<NotFound />} />

            </Routes>

        </Suspense>

    );
}
