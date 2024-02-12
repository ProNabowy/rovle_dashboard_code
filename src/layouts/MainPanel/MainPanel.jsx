import React, { useEffect } from 'react'
import "./index.css"
import MnueHeader from './MnueHeader/MnueHeader'
import MnueMainContent from './MnueMainContent/MnueMainContent';
import { loggedIn } from '../../assets/utils/utils';


export default function MainPanel({ isExpanded, setIsExpanded }) {

    const isLogin = loggedIn();

    // ** Function to handle window resize
    const hendlResize = () => {

        if (window.innerWidth <= 1024) {

            setIsExpanded(false);

        } else {

            setIsExpanded(true);

        }
    }


    useEffect(() => {

        window.addEventListener('resize', hendlResize);

        hendlResize();

        return () => window.removeEventListener('resize', hendlResize);

    }, []);

    return (
        isLogin ?
            <div className={`main-menu bg-[var(--secondray-color)] menu-fixed menu-accordion ${isExpanded ? "expanded" : ""}`} >

                <MnueHeader isExpanded={isExpanded} setIsExpanded={setIsExpanded}></MnueHeader>

                <MnueMainContent isExpanded={isExpanded}></MnueMainContent>

            </div>
            : null
    )
}
