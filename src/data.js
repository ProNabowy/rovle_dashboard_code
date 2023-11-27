
import { useContext, useEffect, useState } from "react";
import { AppContext } from './components/AppContext/AppContext';
import { useCustomEffect } from "./hooks";



const useDataAppGetter = () => {

    const [isExpanded, setIsExpanded] = useState(true);

    const { isLoading } = useContext(AppContext);

    const { useSetTitleIcon } = useCustomEffect();

    useSetTitleIcon();

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