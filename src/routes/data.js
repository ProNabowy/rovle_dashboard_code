// importing require modules
import { lazy } from "react";

// Lazy Function To Load Page Lossaley
const Login = lazy(() => import('../pages/Login'));

const ProvinceList = lazy(() => import('../pages/Province'));
const AddProvince = lazy(() => import('../pages/Province/components/AddProvince'));
const EditProvince = lazy(() => import('../pages/Province/components/EditProvince'));

const CountryList = lazy(() => import('../pages/Countries'));
const AddCountry = lazy(() => import('../pages/Countries/components/AddCountry'));
const EditCountry = lazy(() => import('../pages/Countries/components/EditCountry'));

const CitiesList = lazy(() => import('../pages/Cities'));
const AddCity = lazy(() => import('../pages/Cities/components/AddCity'));
const EditCity = lazy(() => import('../pages/Cities/components/EditCity'));

const PermissionList = lazy(() => import('../pages/Permission'));
const AddPermission = lazy(() => import('../pages/Permission/components/AddPermissions'));
const EditPermissions = lazy(() => import('../pages/Permission/components/EditPermissions'));


const ProductsList = lazy(() => import('../pages/Products'));
const AddProduct = lazy(() => import('../pages/Products/components/AddProduct'));
const EditProduct = lazy(() => import('../pages/Products/components/EditProduct'));


const OriginsList = lazy(() => import('../pages/Origins'));
const AddOrigin = lazy(() => import('../pages/Origins/components/AddOrigin'));


const PlansList = lazy(() => import('../pages/Plans'));
const AddPlan = lazy(() => import('../pages/Plans/components/AddPlan'));
const EditPlan = lazy(() => import('../pages/Plans/components/EditPlan'));


const Subscriptions = lazy(() => import('../pages/Subscriptions'));
const SubscriptionsList = lazy(() => import('../pages/Subscriptions/components/SubscriptionsList'));


const SizeManagement = lazy(() => import('../pages/SizeManagement'));
const SizeList = lazy(() => import('../pages/SizeManagement/components/SizeList'));
const AddSize = lazy(() => import('../pages/SizeManagement/components/AddSize'));


const UsersList = lazy(() => import('../pages/Users'));
const AddUser = lazy(() => import('../pages/Users/components/AddUser'));
const EditUser = lazy(() => import('../pages/Users/components/EditUser'));

const Roasters = lazy(() => import('../pages/Roasters'));
const AddRoasters = lazy(() => import('../pages/Roasters/components/AddRoasters'));
const EditRoaster = lazy(() => import('../pages/Roasters/components/EditRoasters'));

const CoffeShopList = lazy(() => import('../pages/CoffeShop'));
const AddCoffee = lazy(() => import('../pages/CoffeShop/components/AddCoffee'));

const OffersList = lazy(() => import('../pages/Offers'));
const AddOffer = lazy(() => import('../pages/Offers/components/AddOffer'));

const Profile = lazy(() => import('../pages/Profile'));

const NotFound = lazy(() => import('../pages/NotFound'));


export {
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
    NotFound
}

