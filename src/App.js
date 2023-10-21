import { Fragment, Suspense, useEffect, useState } from "react";
import { MainPanel, MainContent } from './layouts'
import useCustomEffect from "./hooks/useCustomEffect";
import { UnAuthenticatedRoutes } from "./routes/components";
import FetchData from "./hooks/FetchData/FetchData";

export default function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const isLoging = localStorage.getItem('token');
  const { useNavigateToLogin } = useCustomEffect();
  const { useFetchCountries } = FetchData();

  useNavigateToLogin(isLoging);

  useFetchCountries(isLoging);

  return (
    <div className="App">

      <Suspense>

        {

          isLoging
            ?

            <Fragment>

              <MainPanel isExpanded={isExpanded} setIsExpanded={setIsExpanded}></MainPanel>

              <MainContent isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

            </Fragment>
            :
            <UnAuthenticatedRoutes />

        }

      </Suspense>

    </div>
  );
}

