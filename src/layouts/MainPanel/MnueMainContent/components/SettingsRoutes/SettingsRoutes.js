import { ProductsRoutes, useDataGetter } from '../../data';
import { PanelMenu } from 'primereact/panelmenu';
import { NavLink } from 'react-router-dom';
import { Fragment, } from 'react';
import passport from '../../../images/passport.svg'
import products from '../../../images/products.svg'
import plans from '../../../images/plans.svg'

export default function SettingsRoutes({
    isExpanded,
    setVisiblePlans,
    setVisibleProducts,
    visiblePlans,
    visibleProducts,
    setVisibleRoasters
}) {

    const { isRenderRouteCollactions, isHasPermissions, linkStyle } = useDataGetter(isExpanded);

    return (

        isRenderRouteCollactions[1]
            ?
            isExpanded
                ?
                <li className='mb-8'>

                    {isExpanded && <h3 className='text-[#7c7c7c] font-medium  px-2'>PRODUCTS</h3>}

                    <PanelMenu model={ProductsRoutes(isHasPermissions)} multiple={true} className="w-full" />

                    {
                        isHasPermissions('Passports', 'dashboard.passports.index') &&
                        <NavLink to={'setups/offers'} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center ms-5`}>

                                <div className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                    <img src={passport} alt="" className="w-[20px] h-[20px]" />

                                </div>

                                <span className='ms-3 font-medium'>Passport</span>
                            </div>

                        </NavLink>
                    }

                </li>
                :
                <Fragment>

                    {
                        isHasPermissions('Products', 'dashboard.products.index') || isHasPermissions('Origins', 'dashboard.origins.index')
                            ?
                            <li onClick={e => e.stopPropagation()} className={`${linkStyle} block px-2 cursor-pointer ${visibleProducts ? "active-mnue" : ""}`}>

                                <div className={`rounded-[6px] flex items-center ${isExpanded ? "ms-5" : ""}`}>

                                    <div onClick={_ => {
                                        setVisiblePlans(false);
                                        setVisibleProducts(perv => !perv);
                                        setVisibleRoasters(false);
                                    }} className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                        <img src={products} alt="" className="w-[20px] h-[20px]" />

                                    </div>

                                </div>

                                <ul className={`absolute p-2 rounded-tr-[10px] rounded-br-[10px] shadow-lg transition bg-white -right-[166px] w-fit pe-16 ${visibleProducts ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"}`}>

                                    {
                                        isHasPermissions('Products', 'dashboard.products.index') && <NavLink to={'products/list'} className='block text-[black] p-2 !w-full'>

                                            <span>Product List</span>

                                        </NavLink>
                                    }

                                    {
                                        isHasPermissions('Origins', 'dashboard.origins.index') && <NavLink to={'origins/list'} className='block text-[black] p-2 !w-full'>

                                            <span>Origin List</span>

                                        </NavLink>
                                    }

                                </ul>

                            </li>
                            :
                            null
                    }

                    {
                        isHasPermissions('Plans', 'dashboard.plans.index')
                            ||
                            isHasPermissions('Subscription', 'dashboard.plans.subscriptions')
                            ||
                            isHasPermissions('Sizes', 'dashboard.sizes.index')
                            ?
                            <li className={`${linkStyle} block px-2 cursor-pointer ${visiblePlans ? "active-mnue" : ""}`}>

                                <div className={`rounded-[6px] flex items-center ${isExpanded ? "ms-5" : ""}`}>

                                    <div onClick={_ => {
                                        setVisiblePlans(perv => !perv);
                                        setVisibleProducts(false);
                                        setVisibleRoasters(false);
                                    }} className='nav-icon w-[35px] h-[35px] rounded-full flex items-center justify-center'>

                                        <img src={plans} alt="" className="w-[20px] h-[20px]" />

                                    </div>

                                </div>

                                <ul className={`absolute p-2 rounded-tr-[10px] rounded-br-[10px] px-5 shadow-lg transition bg-white -right-[176px] w-fit ${visiblePlans ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"}`}>

                                    {
                                        isHasPermissions('Plans', 'dashboard.plans.index') && <NavLink to={'products/plans/list'} className='block text-[black] p-2 !w-full mnue-link'>

                                            <span>List</span>

                                        </NavLink>
                                    }

                                    {
                                        isHasPermissions('Subscription', 'dashboard.plans.subscriptions') && <NavLink to={'products/plans/subscriptions'} className='block text-[black] p-2 !w-full mnue-link' >

                                            <span>Subscriptions</span>

                                        </NavLink >
                                    }

                                    {
                                        isHasPermissions('Sizes', 'dashboard.sizes.index') && <NavLink to={'products/plans/size'} className='block text-[black] p-2 !w-full mnue-link'>

                                            <span>Size management</span>

                                        </NavLink>
                                    }

                                </ul>

                            </li>
                            :
                            null
                    }

                    {
                        isHasPermissions('Passports', 'dashboard.passports.index') &&
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
