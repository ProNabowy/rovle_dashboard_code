import { useContext, useState } from "react";
import { Rosters } from "../../../../apis/apis";
import Formik from "../../../../hooks/Formik/Formik";
import { debounce } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useDataGetter = _ => {

    const roasterUtailty = new Rosters();

    const { setIsLoading } = useContext(AppContext);

    const roasters = useSelector(store => store.rosters);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        user_name: "",
        user_email: "",
        user_password: "",
        user_password_confirmation: "",
        provider_nif: "",
        provider_commercial_name: "",
        provider_official_name: "",
        provider_address: "",
        provider_zip: "",
        provider_manage_stock: 0,
        provider_phone: "",
        provider_country_id: "",
        provider_province_id: "",
        provider_city_id: ""
    });

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return roasterUtailty.addRoaster(formik.values, dispatch, roasters, navigate).finally(_ => setIsLoading(false));

    }, 1000);

    return { formik, clickHandler }

}
export {

    useDataGetter

}