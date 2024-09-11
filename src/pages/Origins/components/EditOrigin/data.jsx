import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useContext, useEffect, } from "react";
import { useFormik } from "formik";
import { debounce } from "../../../../assets/utils/utils";
import { Get, Update, } from '../../../../apis/apis'

const useDataGetter = () => {

    const updateUtialty = new Update();

    const getUtailty = new Get();

    const locaition = useLocation().search;

    const origin_id = locaition.slice(4);

    const navigate = useNavigate();

    const { setIsLoading, user } = useContext(AppContext);

    const formik = useFormik({
        initialValues: { name: "", provider_id: user?.provider?.id }
    });

    useEffect(() => {

        getUtailty.getSingleOrigin(origin_id)
        .then(response => formik.setValues(response));

        return _ => { };
    }, []);

    useEffect(() => {

        if (user?.provider?.id) formik.setFieldValue('provider_id', user?.provider?.id);

        return () => { };
    }, [user?.provider?.id]);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return updateUtialty.updateOrigin(origin_id, formik.values)
            .then(_ => navigate('/origins/list'))
            .finally(_ => setIsLoading(false));

    }, 1000);

    return {
        formik,
        clickHandler,
    }

}

export {
    useDataGetter
}