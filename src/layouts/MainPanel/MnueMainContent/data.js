import { useSelector } from "react-redux";
import { hasPermissions } from "../../../assets/js/utils";
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { faFileLines, faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { faBaseball, faCartShopping, faCompass, faGift, faHouseLaptop, faLockOpen, faTrowelBricks, faUserGroup, faUserSecret, faUsers, faVoicemail } from '@fortawesome/free-solid-svg-icons';


const useDataGetter = (isExpanded) => {

    const permissions = useSelector(store => store.permissions);
    const user_access = useSelector(store => store?.userPeressmisons);

    const isHasPermissions = (PagePermissions, permissionKey) => hasPermissions(permissions[PagePermissions], user_access, permissionKey);

    const linkStyle = `w-full rounded-[6px] text-[#b3b3b3] flex items-center ${isExpanded ? "justify-between" : "justify-center"} p-2 py-1`;

    // Check If The User Has anyone of this pages permissions to render a mnue
    const SETTINGS_FULL_ACCESS =
        isHasPermissions('Countries', 'dashboard.countries.index')
        ||
        isHasPermissions('Provinces', 'dashboard.provinces.index')
        ||
        isHasPermissions('Cities', 'dashboard.cities.index')
        ||
        isHasPermissions('Roles', 'dashboard.roles.index');

    const PRODUCTS_FULL_ACCESS =
        isHasPermissions('Products', 'dashboard.products.index')
        ||
        isHasPermissions('Origins', 'dashboard.origins.index"')
        ||
        isHasPermissions('Plans', 'dashboard.plans.index')
        ||
        isHasPermissions('Subscription', 'dashboard.plans.subscriptions')
        ||
        isHasPermissions('Sizes', 'dashboard.sizes.index');

    const GROUPS_FULL_ACCESS =
        isHasPermissions('Users', 'dashboard.users.index')
        ||
        isHasPermissions('Providers', 'dashboard.providers.index')
        ||
        isHasPermissions('Orders', 'dashboard.orders.index')

    const SETUPS_FULL_ACCESS =
        isHasPermissions('Coffee Shops', 'dashboard.coffeeShops.index')
        ||
        isHasPermissions('Passports', 'dashboard.passports.index');

    const isRenderRouteCollactions = [SETTINGS_FULL_ACCESS, PRODUCTS_FULL_ACCESS, GROUPS_FULL_ACCESS, SETUPS_FULL_ACCESS];

    return { isRenderRouteCollactions, isHasPermissions, linkStyle }

}

// Render Routes As Group Of Childrens 
const routesData = [
    {
        name: "SETTINGS", children: [
            { name: "Country", PagePermissions: "Countries", PermissionKey: "dashboard.countries.index", icon: faBaseball, href: "settings/country/list" },
            { name: "Province", PagePermissions: "Provinces", PermissionKey: "dashboard.provinces.index", icon: faCompass, href: "settings/province/list" },
            { name: "City", PagePermissions: "Cities", PermissionKey: "dashboard.cities.index", icon: faHouseLaptop, href: "settings/cities/list", },
            { name: "Permissions", PagePermissions: "Roles", PermissionKey: "dashboard.roles.index", icon: faLockOpen, href: "settings/permissions/list", }
        ]
    },
    {
        name: "PRODUCTS", children: [
            { name: "Products", PagePermissions: "Products", PermissionKey: "dashboard.products.index", icon: faGift, href: "/products/list" },
            { name: "Origins", PagePermissions: "Origins", PermissionKey: "dashboard.origins.index", icon: faVoicemail, href: "/origins/list" },
            { name: "Plans", PagePermissions: "Plans", PermissionKey: "dashboard.plans.index", icon: faFileLines, href: "/products/plans/list" },
            { name: "Subscriptions", PagePermissions: "Subscription", PermissionKey: "dashboard.plans.subscriptions", icon: faSnowflake, href: "/products/plans/subscriptions" },
            { name: "Size", PagePermissions: "Sizes", PermissionKey: "dashboard.sizes.index", icon: faAccusoft, href: "/products/plans/size" }
        ]
    },
    {
        name: "GROUPS", children: [
            { name: "Users", PagePermissions: "Users", PermissionKey: "dashboard.users.index", icon: faUserGroup, href: "groups/users" },
            { name: "Roasters", PagePermissions: "Providers", PermissionKey: "dashboard.providers.index", icon: faUsers, href: "groups/roasters" },
            { name: "Orders", PagePermissions: "Orders", PermissionKey: "dashboard.orders.index", icon: faCartShopping, href: "groups/orders" }
        ]
    },
    {
        name: "SETUPS", children: [
            { name: "Coffee Shop", PagePermissions: "Coffee Shops", PermissionKey: "dashboard.coffeeShops.index", icon: faUserSecret, href: "setups/coffee-shop" },
            { name: "Passport", PagePermissions: "Passports", PermissionKey: "dashboard.passports.index", icon: faTrowelBricks, href: "/setups/offers" }
        ]
    },
];

export {
    useDataGetter,
    routesData
}