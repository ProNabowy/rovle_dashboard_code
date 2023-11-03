import { useState } from "react";
import { Rosters } from "../../../../apis/apis";
import Formik from "../../../../hooks/Formik/Formik";
import { useSelector } from "react-redux";


const useDataGetter = _ => {

    const roasterUtailty = new Rosters();

    const store = useSelector(store => store);

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

    const handelSubmit = values => roasterUtailty.addRoaster(values);

    const { formik } = useFormData(initialValues, handelSubmit);


    return { formik, store }

}
export {

    useDataGetter

}