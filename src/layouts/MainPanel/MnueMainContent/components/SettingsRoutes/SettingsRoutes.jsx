import { ProductsRoutes, useDataGetter } from '../../data';
import { PanelMenu } from 'primereact/panelmenu';
import { NavLink } from 'react-router-dom';
import { Fragment, } from 'react';
import passport from '../../../images/passport.svg'
import products from '../../../images/products.svg'
import plans from '../../../images/plans.svg'

export default function SettingsRoutes({
    isExpanded,
    visible,
    setVisible,
}) {

    const { isRenderRouteCollactions, isHasPermissions, linkStyle } = useDataGetter(isExpanded);

    return (

        isRenderRouteCollactions[1]
            ?
            isExpanded
                ?
                <li className='mb-8'>

                    {isExpanded && <h3 className='text-[#7c7c7c] font-medium px-2'>PRODUCTOS</h3>}

                    <PanelMenu id='products-routes' itemID='products' model={ProductsRoutes(isHasPermissions)} multiple={true} className="w-full" />

                    {
                        isHasPermissions('dashboard.passports.index') &&
                        <NavLink to={'setups/offers'} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center ms-5`}>

                                <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                    <img src={passport} alt="" className="w-[20px] h-[20px]" />

                                </div>

                                <span className='ms-3 font-medium'>Pasaporte</span>
                            </div>

                        </NavLink>
                    }

                </li>
                :
                <Fragment>

                    {
                        isHasPermissions('dashboard.products.index') || isHasPermissions('dashboard.origins.index')
                            ?
                            <li onClick={e => e.stopPropagation()} className={`${linkStyle} block px-2 cursor-pointer ${visible?.products ? "active-mnue" : ""}`}>

                                <div className={`rounded-[6px] flex items-center ${isExpanded ? "ms-5" : ""}`}>

                                    <div onClick={_ => setVisible(perv => ({ products: perv?.products ? false : true }))} className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                        <img src={products} alt="" className="w-[20px] h-[20px]" />

                                    </div>

                                </div>

                                <ul className={`absolute p-2 rounded-tr-[10px] rounded-br-[10px] shadow-lg transition bg-white -right-[210px] w-fit pe-16 ${visible?.products ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"}`}>

                                    {
                                        isHasPermissions('dashboard.products.index') && <NavLink to={'products/list'} className='block text-[black] p-2 !w-full'>

                                            <span>Lista de productos</span>

                                        </NavLink>
                                    }

                                    {
                                        isHasPermissions('dashboard.origins.index') && <NavLink to={'origins/list'} className='block text-[black] p-2 !w-full'>

                                            <span>Lista de orígenes</span>

                                        </NavLink>
                                    }

                                </ul>

                            </li>
                            :
                            null
                    }

                    {
                        isHasPermissions('dashboard.plans.index')
                            ||
                            isHasPermissions('dashboard.plans.subscriptions')
                            ||
                            isHasPermissions('dashboard.sizes.index')
                            ?
                            <li className={`${linkStyle} block px-2 cursor-pointer ${visible?.plans ? "active-mnue" : ""}`}>

                                <div className={`rounded-[6px] flex items-center ${isExpanded ? "ms-5" : ""}`}>

                                    <div onClick={_ => setVisible(perv => ({ plans: perv?.plans ? false : true }))} className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                        <img src={plans} alt="" className="w-[20px] h-[20px]" />

                                    </div>

                                </div>

                                <ul className={`absolute p-2 rounded-tr-[10px] rounded-br-[10px] px-5 shadow-lg transition bg-white -right-[215px] w-fit ${visible?.plans ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"}`}>

                                    {
                                        isHasPermissions('dashboard.plans.index') && <NavLink to={'products/plans/list'} className='block text-[black] p-2 !w-full mnue-link'>

                                            <span>Lista</span>

                                        </NavLink>
                                    }

                                    {
                                        isHasPermissions('dashboard.plans.subscriptions') && <NavLink to={'products/plans/subscriptions'} className='block text-[black] p-2 !w-full mnue-link' >

                                            <span>Suscripciones</span>

                                        </NavLink >
                                    }

                                    {
                                        isHasPermissions('dashboard.sizes.index') && <NavLink to={'products/plans/size/list'} className='block text-[black] p-2 !w-full mnue-link'>

                                            <span>Administración de tallas</span>

                                        </NavLink>
                                    }

                                </ul>

                            </li>
                            :
                            null
                    }

                    {
                        isHasPermissions('dashboard.passports.index') &&
                        <NavLink to={'setups/offers'} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center`}>

                                <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                    <img src={passport} alt="" className="w-[20px] h-[20px]" />

                                </div>

                            </div>

                        </NavLink>
                    }

                </Fragment >
            :
            null
    )
}
