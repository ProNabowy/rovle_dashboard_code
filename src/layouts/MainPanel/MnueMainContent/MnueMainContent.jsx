import { useDataGetter, renderCollaction, settings, setups, groups } from './data';
import { SettingsRoutes } from './components';
import { useContext, useState } from 'react';
import { AppContext } from '../../../context/AppContext';

export default function MnueMainContent({ isExpanded }) {

    const { user } = useContext(AppContext);

    const isAdmin = user?.roles?.[0]?.name === 'admin';

    const { isRenderRouteCollactions, isHasPermissions, linkStyle } = useDataGetter(isExpanded);

    const [visibleProducts, setVisibleProducts] = useState(false);

    const [visiblePlans, setVisiblePlans] = useState(false);

    return (

        <div className={`main-menu-content ${isExpanded ? "" : "max-h-[100%] !h-[82%]"}`} style={{ height: 'calc(100vh - 105px)', overflowY: 'auto' }}>

            <ul>

                {isRenderRouteCollactions[0] && renderCollaction(isHasPermissions, isExpanded, settings, linkStyle)}

                <SettingsRoutes
                    isExpanded={isExpanded}
                    setVisiblePlans={setVisiblePlans}
                    setVisibleProducts={setVisibleProducts}
                    visiblePlans={visiblePlans}
                    visibleProducts={visibleProducts}
                />

                {isRenderRouteCollactions[2] && renderCollaction(isHasPermissions, isExpanded, groups, linkStyle , isAdmin)}
                {isRenderRouteCollactions[3] && renderCollaction(isHasPermissions, isExpanded, setups, linkStyle)}

            </ul>

        </div >
    )
}
