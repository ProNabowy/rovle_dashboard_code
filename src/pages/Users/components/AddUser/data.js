import { useState } from "react";
import { Users } from "../../../../apis/apis";
import Formik from '../../../../hooks/Formik/Formik';

const useHandleAddUserLogic = () => {

    const userUtailty = new Users();

    const handelSubmit = values => userUtailty.addUser(values);

    const [initialValues, setInitialValues] = useState({
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
    });

    const { useFormData } = Formik();


    const { formik } = useFormData(initialValues, handelSubmit);


    return { formik }
}

export {
    useHandleAddUserLogic
}