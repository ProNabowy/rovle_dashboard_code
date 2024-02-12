import { useDataGetter, renderCollaction, settings, setups } from './data';
import { GROUPSRoutes, SettingsRoutes } from './components';
import { useState } from 'react';

export default function MnueMainContent({ isExpanded }) {

    const { isRenderRouteCollactions, isHasPermissions, linkStyle } = useDataGetter(isExpanded);

    const [visibleProducts, setVisibleProducts] = useState(false);

    const [visiblePlans, setVisiblePlans] = useState(false);

    const [visibleRoasters, setVisibleRoasters] = useState(false);

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
                    setVisibleRoasters={setVisibleRoasters}
                />

                <GROUPSRoutes
                    isExpanded={isExpanded}
                    setVisiblePlans={setVisiblePlans}
                    setVisibleProducts={setVisibleProducts}
                    visibleRoasters={visibleRoasters}
                    setVisibleRoasters={setVisibleRoasters}
                />

                {isRenderRouteCollactions[3] && renderCollaction(isHasPermissions, isExpanded, setups, linkStyle)}

            </ul>

        </div >
    )
}
