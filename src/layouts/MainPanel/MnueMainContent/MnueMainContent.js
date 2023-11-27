import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useDataGetter, routesData } from './data';


export default function MnueMainContent({ isExpanded }) {

    const { isRenderRouteCollactions, isHasPermissions, linkStyle } = useDataGetter(isExpanded);

    const rendereLists = routesData.map((item, index) => {
        return (
            isRenderRouteCollactions[index]
                ?
                <li className='mb-5' key={index}>

                    {isExpanded && <h3 className='text-[#7c7c7c] font-medium  px-2'>{item.name}</h3>}

                    {item.children.map((child, i) => {
                        return (
                            isHasPermissions(child.PagePermissions, child.PermissionKey)
                                ?
                                <NavLink to={child.href} key={i} className={`${linkStyle} block px-2`}>

                                    <div className={`rounded-[6px] flex items-center ${isExpanded ? "ms-5" : ""}`}>

                                        <div className='nav-icon w-[40px] h-[40px] rounded-full flex items-center justify-center'>

                                            <FontAwesomeIcon icon={child.icon} className='text-[18px]' />

                                        </div>

                                        {isExpanded && <span className='ms-3 font-medium'>{child.name}</span>}
                                    </div>

                                </NavLink>
                                :
                                null
                        )
                    })}
                </li>
                : null

        )
    })

    return (

        <div className={`main-menu-content overflow-x-hidden relative overflow-y-auto ${isExpanded ? "" : "max-h-[100%] !h-[82%]"}`} style={{ height: 'calc(100vh - 105px)' }}>

            <ul> {rendereLists} </ul>

        </div >
    )
}
