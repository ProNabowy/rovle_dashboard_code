import { useContext } from "react";
import { Delete, Store } from "../../../../apis/apis"
import { AppContext } from "../../../../context/AppContext";

const useDataGetter = (row) => {

    const storeUtailty = new Store();

    const deleteUtailty = new Delete();

    const { setIsLoading } = useContext(AppContext);

    const handleCancelPlan = () => {

        setIsLoading(true);

        deleteUtailty.cancelPlan(row?.id).finally(_ => setIsLoading(false));

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