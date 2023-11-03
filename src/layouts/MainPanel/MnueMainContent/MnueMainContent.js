import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { faFileLines, faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { faBaseball, faCompass, faGift, faHouseLaptop, faLockOpen, faUserGroup, faUserSecret, faUsers, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const listsData = [
    { name: "SETTINGS", children: [{ name: "Country", icon: faBaseball, href: "settings/country/list" }, { name: "Province", icon: faCompass, href: "settings/province/list" }, { name: "City", icon: faHouseLaptop, href: "settings/cities/list", }, { name: "Permissions", icon: faLockOpen, href: "settings/permissions/list", }] },
    { name: "PRODUCTS", children: [{ name: "Products", icon: faGift, href: "/products/list" }, { name: "Origins", icon: faVoicemail, href: "/origins/list" }, , { name: "Plans", icon: faFileLines, href: "/products/plans/list" }, { name: "Subscriptions", icon: faSnowflake, href: "/products/plans/subscriptions" }, { name: "Size", icon: faAccusoft, href: "/products/plans/size" }] },
    { name: "GROUPS", children: [{ name: "Users", icon: faUserGroup, href: "groups/users" }, { name: "Roasters", icon: faUsers, href: "groups/roasters" }] },
    { name: "SETUPS", children: [{ name: "Coffee Shop", icon: faUserSecret, href: "setups/coffee-shop" }] },
];

export default function MnueMainContent({ isExpanded }) {

    const linkStyle = `w-full rounded-[6px] text-[#b3b3b3] flex items-center ${isExpanded ? "justify-between" : "justify-center"} p-2 py-1`;

    const rendereLists = listsData.map((item, index) => {
        return (
            <li className='mb-5' key={index}>

                {isExpanded && <h3 className='text-[#7c7c7c] font-medium mb-2 px-2'>{item.name}</h3>}

                {item.children.map((child, i) => {
                    return (
                        <NavLink to={child.href} key={i} className={`${linkStyle} block px-2`}>

                            <div className={`rounded-[6px] flex items-center ${isExpanded ? "ms-5" : ""}`}>

                                <div className='nav-icon w-[40px] h-[40px] rounded-full flex items-center justify-center'>

                                    <FontAwesomeIcon icon={child.icon} className='text-[18px]' />

                                </div>

                                {isExpanded && <span className='ms-3 font-medium'>{child.name}</span>}
                            </div>

                        </NavLink>
                    )
                })}

            </li>
        )
    })

    return (

        <div className={`main-menu-content overflow-x-hidden relative overflow-y-auto ${isExpanded ? "" : "max-h-[100%] !h-[82%]"}`} style={{ height: 'calc(100vh - 105px)' }}>

            <ul>
                {rendereLists}
            </ul>

        </div >
    )
}
