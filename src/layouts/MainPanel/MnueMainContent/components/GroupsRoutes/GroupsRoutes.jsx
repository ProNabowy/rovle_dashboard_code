import { GroupsRoutes, useDataGetter } from '../../data';
import { PanelMenu } from 'primereact/panelmenu';
import { NavLink } from 'react-router-dom';
import { Fragment, } from 'react';
import permission from '../../../images/permission.svg';
import users from '../../../images/users.svg';
import roasters from '../../../images/roasters.svg';

export default function SettingsRoutes({
    isExpanded,
    visible,
    setVisible,
}) {

    const { isRenderRouteCollactions, isHasPermissions, linkStyle } = useDataGetter(isExpanded);

    return (

        isRenderRouteCollactions[2]
            ?
            isExpanded
                ?
                <li className='mb-8'>

                    {isExpanded && <h3 className='text-[#7c7c7c] font-medium px-2'>Todos los tostadores</h3>}

                    <PanelMenu id='groups-routes' itemID='group' model={GroupsRoutes(isHasPermissions)} multiple={true} className="w-full" />

                    {
                        isHasPermissions('dashboard.providers.index') &&
                        <NavLink to={'groups/roasters'} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center ms-5`}>

                                <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                    <img src={users} alt="" className="w-[20px] h-[20px]" />

                                </div>

                                <span className='ms-3 font-medium'>Tostadores</span>
                            </div>

                        </NavLink>
                    }

                    {
                        isHasPermissions('dashboard.orders.index') &&
                        <NavLink to={'groups/orders'} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center ms-5`}>

                                <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                    <img src={roasters} alt="" className="w-[20px] h-[20px]" />

                                </div>

                                <span className='ms-3 font-medium'>Pedidos</span>
                            </div>

                        </NavLink>
                    }

                    {
                        isHasPermissions('dashboard.customers.list') &&
                        <NavLink to={'groups/clients'} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center ms-5`}>

                                <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                    <img src={roasters} alt="" className="w-[20px] h-[20px]" />

                                </div>

                                <span className='ms-3 font-medium'>Clientes</span>
                            </div>

                        </NavLink>
                    }

                </li>
                :
                <Fragment>

                    {
                        isHasPermissions('dashboard.users.index') || isHasPermissions('dashboard.roles.index')
                            ?
                            <li onClick={e => e.stopPropagation()} className={`${linkStyle} block px-2 cursor-pointer ${visible?.groups ? "active-mnue" : ""}`}>

                                <div className={`rounded-[6px] flex items-center ${isExpanded ? "ms-5" : ""}`}>

                                    <div onClick={_ => setVisible(perv => ({ groups: perv?.groups ? false : true }))} className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                        <img src={permission} alt="" className="w-[20px] h-[20px]" />

                                    </div>

                                </div>

                                <ul className={`absolute p-2 rounded-tr-[10px] rounded-br-[10px] shadow-lg transition bg-white -right-[146px] w-fit pe-16 ${visible?.groups ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"}`}>

                                    {
                                        isHasPermissions('dashboard.users.index') && <NavLink to={'groups/users'} className='block text-[black] p-2 !w-full'>

                                            <span>Equipo</span>

                                        </NavLink>
                                    }

                                    {
                                        isHasPermissions('dashboard.roles.index') && <NavLink to={'settings/permissions/list'} className='block text-[black] p-2 !w-full'>

                                            <span>Permisos</span>

                                        </NavLink>
                                    }

                                </ul>

                            </li>
                            :
                            null
                    }

                    {
                        isHasPermissions('dashboard.providers.index') &&
                        <NavLink to={'groups/roasters'} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center`}>

                                <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                    <img src={users} alt="" className="w-[20px] h-[20px]" />

                                </div>

                            </div>

                        </NavLink>
                    }

                    {
                        isHasPermissions('dashboard.orders.index') &&
                        <NavLink to={'groups/orders'} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center`}>

                                <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                    <img src={roasters} alt="" className="w-[20px] h-[20px]" />

                                </div>

                            </div>

                        </NavLink>
                    }

                    {
                        isHasPermissions('dashboard.customers.list') &&
                        <NavLink to={'groups/clients'} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center`}>

                                <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                    <img src={roasters} alt="" className="w-[20px] h-[20px]" />

                                </div>

                            </div>

                        </NavLink>
                    }

                </Fragment >
            :
            null
    )
}
