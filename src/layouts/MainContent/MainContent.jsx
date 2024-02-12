import React from 'react'
import Header from '../Header'
import BreadcrumbNav from '../BreadcrumbNav'
import { loggedIn } from '../../assets/utils/utils'

export default function MainContent({ isExpanded, setIsExpanded, children }) {

    const isLogin = loggedIn();

    return (
        isLogin
            ?
            <div className={`bg-[#ffffff] ${isExpanded ? "ms-[260px]" : "ms-[80px]"}`} style={{ transition: "0.5s" }}>

                <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

                <div className='container'>

                    <BreadcrumbNav />

                    {children}

                </div>

            </div>
            :
            children
    )
}
