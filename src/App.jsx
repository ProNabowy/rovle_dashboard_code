import { Fragment, Suspense, useContext, } from 'react';
import './assets/styles/App.css';
import { RouteGuard } from './components';
import { AppContext } from './context/AppContext';
import { MainPanel } from './layouts';
import { useAxiosConfig } from './assets/utils/useAxiosConfig';
import { useAppHooks } from './hooks/AppHooks';
import MainContent from './layouts/MainContent';
import useHandleRoutes from './routes/routes';

function App() {

  const { isLoading } = useContext(AppContext);

  const { useAppDefaults, useSetLogo, useGetProviderToken } = useAppHooks();

  const { routes } = useHandleRoutes();

  const { isExpanded, setIsExpanded } = useAppDefaults();

  useGetProviderToken();

  useSetLogo();

  useAxiosConfig();

  return (
    <Fragment>

      {/* <Loader isWindowLoad={isLoading} /> */}

      <Suspense >

        <RouteGuard />

        <MainPanel isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

        <MainContent isExpanded={isExpanded} setIsExpanded={setIsExpanded}>

          {routes}

        </MainContent>

      </Suspense>

    </Fragment>
  )
}

export default App
