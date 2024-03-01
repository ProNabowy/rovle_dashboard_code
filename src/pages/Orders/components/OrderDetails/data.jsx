import { useContext } from "react";
import { Store } from "../../../../apis/apis"
import { AppContext } from "../../../../context/AppContext";

const useDataGetter = (row) => {

    const storeUtailty = new Store();

    const { setIsLoading } = useContext(AppContext);

    const handleCancelPlan = () => {

        setIsLoading(true);

        storeUtailty.cancelPlan(row?.id).finally(_ => setIsLoading(false));

    }

    const handleAcspetPlan = () => {

        setIsLoading(true);

        storeUtailty.acspetPlan(row?.id).finally(_ => setIsLoading(false));

    }

    return {
        handleCancelPlan,
        handleAcspetPlan
    }
}

export {
    useDataGetter
}