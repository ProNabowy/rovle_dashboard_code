
import { useContext, useEffect, useState } from "react";
import FetchData from "./hooks/FetchData/FetchData";
import { AppContext } from './components/AppContext/AppContext';



const useDataAppGetter = () => {

    const [isExpanded, setIsExpanded] = useState(true);

    const { useFetchGloableData } = FetchData();

    const { isLoading } = useContext(AppContext);

    useFetchGloableData();

    useEffect(() => {

        const body = document.body;

        if (isLoading) {

            body.style.cssText += "max-height: 100vh; overflow:hidden";

        } else {

            body.style.cssText += "max-height: initial; overflow:initial";

        }

    }, [isLoading]);

    return { isLoading, isExpanded, setIsExpanded };
}

export {
    useDataAppGetter
}