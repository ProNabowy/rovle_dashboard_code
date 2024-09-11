import { NavLink } from "react-router-dom";
import permission from '../images/permission.svg';
import shops from '../images/shops.svg';
import products from '../images/products.svg';
import plans from '../images/plans.svg';
import roasters from '../images/roasters.svg';
import users from '../images/users.svg';
import { hasRoutePermissions } from "../../../assets/utils/utils";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const useDataGetter = (isExpanded) => {

    const { userPeressmisons } = useContext(AppContext);

    const isHasPermissions = (permissionKey) => hasRoutePermissions(userPeressmisons, permissionKey);

    const linkStyle = `w-full rounded-[6px] text-[#b3b3b3] text-[15px] flex items-center ${isExpanded ? "justify-between" : "justify-center"} py-1`;

    // Check If The User Has anyone of this pages permissions to render a mnue
    const SETTINGS_FULL_ACCESS =
        isHasPermissions('dashboard.countries.index')
        ||
        isHasPermissions('dashboard.provinces.index')
        ||
        isHasPermissions('dashboard.cities.index')
        ||
        isHasPermissions('dashboard.roles.index');

    const PRODUCTS_FULL_ACCESS =
        isHasPermissions('dashboard.products.index')
        ||
        isHasPermissions('dashboard.origins.index')
        ||
        isHasPermissions('dashboard.plans.index')
        ||
        isHasPermissions('dashboard.plans.subscriptions')
        ||
        isHasPermissions('dashboard.sizes.index')
        ||
        isHasPermissions('dashboard.passports.index');

    const GROUPS_FULL_ACCESS =
        isHasPermissions('dashboard.users.index')
        ||
        isHasPermissions('dashboard.providers.index')
        ||
        isHasPermissions('dashboard.orders.index')

    const SETUPS_FULL_ACCESS =
        isHasPermissions('dashboard.coffeeShops.index')

    const isRenderRouteCollactions = [SETTINGS_FULL_ACCESS, PRODUCTS_FULL_ACCESS, GROUPS_FULL_ACCESS, SETUPS_FULL_ACCESS];

    return { isRenderRouteCollactions, isHasPermissions, linkStyle }

}

const settings = {
    name: "Configuración", children: [
        {
            name: "Permisos",
            PagePermissions: "Roles",
            PermissionKey: "dashboard.roles.index",
            icon: permission,
            href: "settings/permissions/list",
        }
    ]
};

const setups = {
    name: "SETUPS", children: [
        {
            name: "Cafeterías",
            PagePermissions: "Coffee Shops",
            PermissionKey: "dashboard.coffeeShops.index",
            icon: shops,
            href: "setups/coffee-shop"
        },
    ]
}
const groups = {
    name: "GRUPOS", children: [
        {
            name: "Equipo",
            PermissionKey: "dashboard.users.index",
            icon: users,
            href: "groups/users"
        },
        {
            name: "Permisos",
            PagePermissions: "Roles",
            PermissionKey: "dashboard.roles.index",
            icon: permission,
            href: "settings/permissions/list",
        },
        {
            name: "Tostadores",
            PermissionKey: "dashboard.providers.index",
            icon: roasters,
            href: "groups/roasters"
        },
        {
            name: "Pedidos",
            PermissionKey: "dashboard.orders.index",
            icon: roasters,
            href: "groups/orders"
        },
    ]
}

const renderCollaction = (isHasPermissions, isExpanded, item, linkStyle, isAdmin) => {

    return <li className='mb-5'>

        {isExpanded && <h3 className='text-[#7c7c7c] font-medium  px-2'>{item.name}</h3>}

        {item.children.map((child, i) => {
            return (
                isHasPermissions(child.PermissionKey)
                    ?
                    child.name === 'Tostadores' && !isAdmin
                        ?
                        null
                        :
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

const GroupsRoutes = isHasPermissions => {

    const renderGroups =
        isHasPermissions('dashboard.users.index')
        ||
        isHasPermissions('dashboard.roles.index');


    return (
        [
            (renderGroups &&
            {
                expanded: false,
                label: <div className='flex items-center'>

                    <div className={`block px-2`}>

                        <div className={`rounded-[6px] flex items-center ms-[10px]`}>

                            <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                <img src={permission} alt="" className="w-[20px] h-[20px]" />

                            </div>

                            <span className='ms-3 font-medium'>Configuración</span>
                        </div>

                    </div>

                </div>,
                items: [
                    {
                        label: isHasPermissions('dashboard.users.index') && <NavLink to={'groups/users'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

                            <span className="ms-10">Equipo</span>

                        </NavLink >,

                    },
                    {
                        label: isHasPermissions('dashboard.roles.index') && <NavLink to={'settings/permissions/list'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

                            <span className='ms-10 !py-0'>Permisos</span>

                        </NavLink>,

                    }
                ]
            }
            )
        ]
    )
}

const ProductsRoutes = isHasPermissions => {

    const isProvider = JSON.parse(localStorage.getItem('user'))?.provider;

    const renderProduct =
        isHasPermissions('dashboard.products.index')
        ||
        isHasPermissions('dashboard.origins.index');

    const renderPlan =
        isHasPermissions('dashboard.plans.index')
        ||
        isHasPermissions('dashboard.plans.subscriptions')
        ||
        isHasPermissions('dashboard.sizes.index');

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
                        label: isHasPermissions('dashboard.products.index') && <NavLink to={'products/list'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

                            <span className='ms-10'>Lista de productos</span>

                        </NavLink>,

                    },
                    {
                        label: isHasPermissions('dashboard.origins.index') && <NavLink to={'origins/list'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

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

                            <span className='ms-3 font-medium'>Suscripciones</span>
                        </div>

                    </div>

                </div>,
                items: [
                    {
                        label: isHasPermissions('dashboard.plans.index') && <NavLink to={'products/plans/list'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

                            <span className='ms-10'>Planes de suscripción</span>

                        </NavLink>,

                    },
                    {
                        label: isHasPermissions('dashboard.plans.subscriptions') && <NavLink to={'products/plans/subscriptions'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link' >

                            <span className='ms-10 !py-0'>Suscriptores</span>

                        </NavLink >,

                    },
                    {
                        label: (isHasPermissions('dashboard.sizes.index') && !isProvider?.id) && <NavLink to={'products/plans/size/list'} className='flex items-center text-[#FFFFFFA6] p-2 !w-full mnue-link'>

                            <span className='ms-10 !py-0'>Administración de tallas</span>

                        </NavLink>,

                    },
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
    groups,
    ProductsRoutes,
    GroupsRoutes
}