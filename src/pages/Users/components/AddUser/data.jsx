import { useContext } from "react";
import { Store, swal } from "../../../../apis/apis";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { debounce } from "../../../../assets/utils/utils";
import { useFormik } from "formik";

const useHandleAddUserLogic = () => {

    const storeUtailty = new Store();

    const { setIsLoading } = useContext(AppContext);

    const navigate = useNavigate();

    const handelSubmit = values => {

        if (values?.user_password !== values?.user_password_confirmation || !values.user_password) {

            return swal.warning('Warning', 'Password And Confirem Password Must Be The Same');

        } else {

            setIsLoading(true);

            return storeUtailty.addUser(values, navigate).finally(_ => setIsLoading(false));
        }

    }
    const formik = useFormik({
        initialValues: {
            user_name: "",
            user_card_id: "",
            user_password: "",
            user_password_confirmation: "",
            user_email: "",
            user_address: "",
            user_phone: "",
            user_zip: "",
            user_country_id: "",
            user_province_id: "",
            user_city_id: "",
            role_id: "",
        }
    })

    const clickHandler = debounce((_) => handelSubmit(formik.values), 500);

    return { formik, clickHandler }
}

export {
    useHandleAddUserLogic
}