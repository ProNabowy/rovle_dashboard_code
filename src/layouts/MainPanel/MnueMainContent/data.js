import { useSelector } from "react-redux";
import { hasPermissions } from "../../../assets/js/utils";
import { NavLink } from "react-router-dom";
import country from '../images/country.svg';
import province from '../images/province.svg';
import city from '../images/city.svg';
import permission from '../images/permission.svg';
import shops from '../images/shops.svg';
import products from '../images/products.svg';
import plans from '../images/plans.svg';
import roasters from '../images/roasters.svg';


const useDataGetter = (isExpanded) => {

    const permissions = useSelector(store => store.permissions);
    const user_access = useSelector(store => store?.userPeressmisons);

    const isHasPermissions = (PagePermissions, permissionKey) => hasPermissions(permissions[PagePermissions], user_access, permissionKey);

    const linkStyle = `w-full rounded-[6px] text-[#b3b3b3] text-[15px] flex items-center ${isExpanded ? "justify-between" : "justify-center"} py-1`;

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
        isHasPermissions('Origins', 'dashboard.origins.index')
        ||
        isHasPermissions('Plans', 'dashboard.plans.index')
        ||
        isHasPermissions('Subscription', 'dashboard.plans.subscriptions')
        ||
        isHasPermissions('Sizes', 'dashboard.sizes.index')
        ||
        isHasPermissions('Passports', 'dashboard.passports.index');

    const GROUPS_FULL_ACCESS =
        isHasPermissions('Users', 'dashboard.users.index')
        ||
        isHasPermissions('Providers', 'dashboard.providers.index')
        ||
        isHasPermissions('Orders', 'dashboard.orders.index')

    const SETUPS_FULL_ACCESS =
        isHasPermissions('Coffee Shops', 'dashboard.coffeeShops.index')

    const isRenderRouteCollactions = [SETTINGS_FULL_ACCESS, PRODUCTS_FULL_ACCESS, GROUPS_FULL_ACCESS, SETUPS_FULL_ACCESS];

    return { isRenderRouteCollactions, isHasPermissions, linkStyle }

}

const settings = {
    name: "Configuración", children: [
        // { name: "País", PagePermissions: "Countries", PermissionKey: "dashboard.countries.index", icon: country, href: "settings/country/list" },
        // { name: "Provincia", PagePermissions: "Provinces", PermissionKey: "dashboard.provinces.index", icon: province, href: "settings/province/list" },
        // { name: "Ciudad", PagePermissions: "Cities", PermissionKey: "dashboard.cities.index", icon: city, href: "settings/cities/list", },
        { name: "Permisos", PagePermissions: "Roles", PermissionKey: "dashboard.roles.index", icon: permission, href: "settings/permissions/list", }
    ]
};

const setups = {
    name: "SETUPS", children: [
        { name: "Cafetería", PagePermissions: "Coffee Shops", PermissionKey: "dashboard.coffeeShops.index", icon: shops, href: "setups/coffee-shop" },
    ]
}

const renderCollaction = (isHasPermissions, isExpanded, item, linkStyle) => {

    return <li className='mb-5'>

        {isExpanded && <h3 className='text-[#7c7c7c] font-medium  px-2'>{item.name}</h3>}

        {item.children.map((child, i) => {
            return (
                isHasPermissions(child.PagePermissions, child.PermissionKey)
                    ?
                    <NavLink to={child.href} key={i} className={`${linkStyle} block px-2`}>

                        <div className={`rounded-[6px] flex items-center ${isExpanded ? "ms-5" : ""}`}>

                            <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                <img src={child.icon} alt="" className="w-[20px] h-[20px]" />

                            </div>

                            {isExpanded && <span className='ms-3 font-medium'>{child.name}</span>}
                        </div>

                    </NavLink>
                    :
                    null
            )
        })}
    </li>

}

const ProductsRoutes = isHasPermissions => {

    const isProvider = JSON.parse(localStorage.getItem('user'))?.provider;

    const renderProduct =
        isHasPermissions('Products', 'dashboard.products.index')
        ||
        isHasPermissions('Origins', 'dashboard.origins.index');

    const renderPlan =
        isHasPermissions('Plans', 'dashboard.plans.index')
        ||
        isHasPermissions('Subscription', 'dashboard.plans.subscriptions')
        ||
        isHasPermissions('Sizes', 'dashboard.sizes.index');

    return (
        [
            (renderProduct &&
            {
                expanded: false,
                label: <div className='flex items-center'>

                    <div className={`block px-2`}>

                        <div className={`rounded-[6px] flex items-center ms-[10px]`}>

                            <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                <img src={products} alt="" className="w-[20px] h-[20px]" />

                            </div>

                            <span className='ms-3 font-medium'>Productos</span>
                        </div>

                    </div>

                </div>,
                items: [
                    {
                        label: isHasPermissions('Products', 'dashboard.products.index') && <NavLink to={'products/list'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

                            <span className='ms-10'>Lista de productos</span>

                        </NavLink>,

                    },
                    {
                        label: isHasPermissions('Origins', 'dashboard.origins.index') && <NavLink to={'origins/list'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

                            <span className='ms-10 !py-0'>Lista de origen</span>

                        </NavLink>,

                    }
                ]
            }
            ),
            (renderPlan &&
            {
                expanded: false,
                label: <div className='flex items-center'>

                    <div className={`block px-2`}>

                        <div className={`rounded-[6px] flex items-center ms-[10px]`}>

                            <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                <img src={plans} alt="" className="w-[20px] h-[20px]" />

                            </div>

                            <span className='ms-3 font-medium'>Planes</span>
                        </div>

                    </div>

                </div>,
                items: [
                    {
                        label: isHasPermissions('Plans', 'dashboard.plans.index') && <NavLink to={'products/plans/list'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

                            <span className='ms-10'>Lista</span>

                        </NavLink>,

                    },
                    {
                        label: isHasPermissions('Subscription', 'dashboard.plans.subscriptions') && <NavLink to={'products/plans/subscriptions'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link' >

                            <span className='ms-10 !py-0'>Subscripciones</span>

                        </NavLink >,

                    },
                    {
                        label: (isHasPermissions('Sizes', 'dashboard.sizes.index') && !isProvider?.id) && <NavLink to={'products/plans/size/list'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

                            <span className='ms-10 !py-0'>Administración de tallas</span>

                        </NavLink>,

                    },
                ]
            }
            )
        ]
    )
}

const GroupsRoutes = isHasPermissions => {

    const isAdmin = JSON.parse(localStorage.getItem('user'))?.roles?.[0]?.name === 'admin';

    const renderRoasters =
        isHasPermissions('Providers', 'dashboard.providers.index')
        ||
        isHasPermissions('Orders', 'dashboard.orders.index');


    return (
        [
            (renderRoasters
                &&
            {
                expanded: false,
                label: <div className='flex items-center'>

                    <div className={`block px-2`}>

                        <div className={`rounded-[6px] flex items-center ms-[10px]`}>

                            <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                <img src={roasters} alt="" className="w-[20px] h-[20px]" />

                            </div>

                            <span className='ms-3 font-medium'>Tostadores</span>
                        </div>

                    </div>

                </div>,
                items: [
                    {
                        label: isHasPermissions('Providers', 'dashboard.providers.index') && isAdmin && <NavLink to={'groups/roasters'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

                            <span className='ms-10'>Lista</span>

                        </NavLink>,

                    },
                    {
                        label: isHasPermissions('Orders', 'dashboard.orders.index') && <NavLink to={'groups/orders'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

                            <span className='ms-10 !py-0'>Pedidos</span>

                        </NavLink>,

                    }
                ]
            }
            )
        ]
    )

}


export {
    useDataGetter,
    renderCollaction,
    settings,
    setups,
    ProductsRoutes,
    GroupsRoutes
}