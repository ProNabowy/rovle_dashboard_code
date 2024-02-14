import { useContext, } from "react";
import { Store } from "../../../../apis/apis";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";

const useDataGetter = _ => {

    const storeUtailty = new Store();

    const { setIsLoading } = useContext(AppContext);

    const navigate = useNavigate();

    const handleSubmit = (values) => {

        setIsLoading(true);

        return storeUtailty.addRoaster(values, navigate).finally(_ => setIsLoading(false));
    }

    const formik = useFormik({
        initialValues: {
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
        },
        onSubmit: handleSubmit
    })



    return { formik }

}
export {

    useDataGetter

}