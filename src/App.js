import { MainPanel, MainContent } from './layouts'
import { Auth, Spiners } from "./components";
import { useDataAppGetter } from "./data";
import { useSelector } from 'react-redux';

export default function App() {

  const {
    isLoading,
    isExpanded,
    setIsExpanded
  } = useDataAppGetter();

  const store = useSelector(store => store);


  return (
    <div className="App">

      {isLoading ? <Spiners /> : null}

      <Auth />

      <MainPanel isExpanded={isExpanded} setIsExpanded={setIsExpanded}></MainPanel>

      <MainContent isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

    </div>
  );
}

