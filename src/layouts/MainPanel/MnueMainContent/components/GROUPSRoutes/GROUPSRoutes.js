import { GroupsRoutes, useDataGetter } from '../../data';
import { NavLink } from 'react-router-dom';
import { PanelMenu } from 'primereact/panelmenu';
import { Fragment } from 'react';
import users from '../../../images/users.svg'
import roasters from '../../../images/roasters.svg'

export default function GROUPSRoutes({
    isExpanded,
    setVisiblePlans,
    setVisibleProducts,
    visibleRoasters,
    setVisibleRoasters
}) {

    const { isRenderRouteCollactions, isHasPermissions, linkStyle } = useDataGetter(isExpanded);

    const isAdmin = JSON.parse(localStorage.getItem('user'))?.roles?.[0]?.name === 'admin';

    return (
        isRenderRouteCollactions[2]
            ?
            isExpanded
                ?
                <li className='mb-8'>

                    {isExpanded && <h3 className='text-[#7c7c7c] font-medium  px-2'>GRUPOS</h3>}

                    {
                        isHasPermissions('Users', 'dashboard.users.index') &&
                        <NavLink to={'groups/users'} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center ms-5`}>

                                <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                    <img src={users} alt="" className="w-[20px] h-[20px]" />

                                </div>

                                <span className='ms-3 font-medium'>Usuarios</span>

                            </div>

                        </NavLink>
                    }

                    <PanelMenu model={GroupsRoutes(isHasPermissions)} multiple={true} className="w-full" />

                </li>
                :

                <Fragment>

                    {
                        isHasPermissions('Users', 'dashboard.users.index') &&
                        <NavLink to={'groups/users'} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center`}>

                                <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                    <img src={users} alt="" className="w-[20px] h-[20px]" />

                                </div>

                            </div>

                        </NavLink>
                    }

                    {
                        isHasPermissions('Providers', 'dashboard.providers.index') || isHasPermissions('Orders', 'dashboard.orders.index')
                            ?
                            <li onClick={e => e.stopPropagation()} className={`${linkStyle} block px-2 cursor-pointer ${visibleRoasters ? "active-mnue" : ""}`}>

                                <div className={`rounded-[6px] flex items-center ${isExpanded ? "ms-5" : ""}`}>

                                    <div onClick={_ => {
                                        setVisibleRoasters(perv => !perv);
                                        setVisiblePlans(false);
                                        setVisibleProducts(false);

                                    }} className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                        <img src={roasters} alt="" className="w-[20px] h-[20px]" />

                                    </div>

                                </div>

                                <ul className={`absolute p-2 rounded-tr-[10px] rounded-br-[10px] shadow-lg transition bg-white -right-[133px] w-fit pe-16 ${visibleRoasters ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"}`}>

                                    {
                                        isHasPermissions('Providers', 'dashboard.providers.index') && isAdmin && <NavLink to={'groups/roasters'} className='flex items-center text-[black] p-2 !w-full mnue-link'>

                                            <span>Lista</span>

                                        </NavLink>
                                    }

                                    {
                                        isHasPermissions('Orders', 'dashboard.orders.index') && <NavLink to={'groups/orders'} className='flex items-center text-[black] p-2 !w-full mnue-link'>

                                            <span>Pedidos</span>

                                        </NavLink>
                                    }

                                </ul>

                            </li>
                            :
                            null
                    }

                </Fragment>


            :
            null
    )
}
