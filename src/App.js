import { Suspense } from "react";
import { MainPanel, MainContent } from './layouts'
import { Auth, Spiners } from "./components";
import { useDataAppGetter } from "./data";

export default function App() {

  const {
    isLoading,
    isExpanded,
    setIsExpanded
  } = useDataAppGetter();

  return (
    <div className="App">

      {isLoading ? <Spiners /> : null}

      <Auth />


      <MainPanel isExpanded={isExpanded} setIsExpanded={setIsExpanded}></MainPanel>

      <MainContent isExpanded={isExpanded} setIsExpanded={setIsExpanded} />


    </div>
  );
}

