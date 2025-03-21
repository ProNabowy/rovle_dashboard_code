import { useDataGetter, renderCollaction, settings, setups, groups } from './data';
import { GroupsRoutes, SettingsRoutes } from './components';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import { useLocation } from 'react-router-dom';

export default function MnueMainContent({ isExpanded }) {

    const { user } = useContext(AppContext);

    const isAdmin = user?.roles?.[0]?.name === 'admin';

    const { pathname } = useLocation()

    const { isRenderRouteCollactions, isHasPermissions, linkStyle } = useDataGetter(isExpanded);

    const [visible, setVisible] = useState({
        plans: false,
        products: false,
        groups: false
    });

    useEffect(() => {
        setVisible({});

        return () => { };
    }, [pathname]);

    return (

        <div className={`main-menu-content ${isExpanded ? "" : "max-h-[100%] !h-[82%]"}`} style={{ height: 'calc(100vh - 105px)', overflowY: 'auto' }}>

            <ul>

                <SettingsRoutes
                    isExpanded={isExpanded}
                    visible={visible}
                    setVisible={setVisible}
                />

                <GroupsRoutes
                    isExpanded={isExpanded}
                    visible={visible}
                    setVisible={setVisible}
                />

                {isRenderRouteCollactions[3] && renderCollaction(isHasPermissions, isExpanded, setups, linkStyle)}

            </ul>

        </div >
    )
}
