import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useContext, useEffect, } from "react";
import { useFormik } from "formik";
import { debounce } from "../../../../assets/utils/utils";
import { Store, } from '../../../../apis/apis'

const useDataGetter = () => {

    const storeUtialty = new Store();

    const navigate = useNavigate();

    const { setIsLoading, user } = useContext(AppContext);

    const formik = useFormik({
        initialValues: { name: "", provider_id: user?.provider?.id }
    });

    useEffect(() => {

        if (user?.provider?.id) formik.setFieldValue('provider_id', user?.provider?.id);

        return () => { };
    }, [user?.provider?.id]);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return storeUtialty.addOrigin(formik.values, navigate).finally(_ => setIsLoading(false));

    }, 1000);

    return {
        formik,
        clickHandler,
    }

}

export {
    useDataGetter
}