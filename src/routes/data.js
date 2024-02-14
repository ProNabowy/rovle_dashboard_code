// importing require modules
import { lazy } from "react";

// Lazy Function To Load Page Lossaley
const Login = lazy(() => import('../pages/Login'));
const ForgetPassword = lazy(() => import('../pages/ForgetPassword'));
const PermissionList = lazy(() => import('../pages/Permission'));
const AddPermission = lazy(() => import('../pages/Permission/components/AddPermissions'));
const EditPermissions = lazy(() => import('../pages/Permission/components/EditPermissions'));
const ProductsList = lazy(() => import('../pages/Products'));
const ChooseOwner = lazy(() => import('../pages/Products/components/ChooseOwner'));
const AddProduct = lazy(() => import('../pages/Products/components/ProductUtailty/AddProduct'));
const AddProductByOtherOwner = lazy(() => import('../pages/Products/components/AddProductByOtherOwner'));
const EditProduct = lazy(() => import('../pages/Products/components/ProductUtailty/EditProduct'));
const OriginsList = lazy(() => import('../pages/Origins'));
const AddOrigin = lazy(() => import('../pages/Origins/components/AddOrigin'));
const PlansList = lazy(() => import('../pages/Plans'));
const AddPlan = lazy(() => import('../pages/Plans/components/AddPlan'));
const EditPlan = lazy(() => import('../pages/Plans/components/EditPlan'));
const Subscriptions = lazy(() => import('../pages/Subscriptions'));
const ManagePackage = lazy(() => import('../pages/ManagePackage'));
const SizeList = lazy(() => import('../pages/SizeManagement/components/SizeList'));
const AddSize = lazy(() => import('../pages/SizeManagement/components/AddSize'));
const UsersList = lazy(() => import('../pages/Users'));
const AddUser = lazy(() => import('../pages/Users/components/AddUser'));
const EditUser = lazy(() => import('../pages/Users/components/EditUser'));
const Roasters = lazy(() => import('../pages/Roasters'));
const AddRoasters = lazy(() => import('../pages/Roasters/components/AddRoasters'));
const EditRoaster = lazy(() => import('../pages/Roasters/components/EditRoasters'));
const Orders = lazy(() => import('../pages/Orders'));
const CoffeShopList = lazy(() => import('../pages/CoffeShop'));
const AddCoffee = lazy(() => import('../pages/CoffeShop/components/AddCoffee'));
const EditCoffee = lazy(() => import('../pages/CoffeShop/components/EditCoffee'));
const OffersList = lazy(() => import('../pages/Offers'));
const AddOffer = lazy(() => import('../pages/Offers/components/AddOffer'));
const EditOffer = lazy(() => import('../pages/Offers/components/EditOffer'));
const Profile = lazy(() => import('../pages/Profile'));
const NotFound = lazy(() => import('../pages/NotFound'));


export {
    Login,
    ForgetPassword,
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
    Subscriptions,
    ManagePackage,
    SizeList,
    AddSize,
    UsersList,
    AddUser,
    EditUser,
    Roasters,
    AddRoasters,
    EditRoaster,
    Orders,
    CoffeShopList,
    AddCoffee,
    EditCoffee,
    OffersList,
    AddOffer,
    EditOffer,
    Profile,
    NotFound
}