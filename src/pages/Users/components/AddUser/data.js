import { useContext, useState } from "react";
import { Users } from "../../../../apis/apis";
import Formik from '../../../../hooks/Formik/Formik';
import { debounce } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";

const useHandleAddUserLogic = () => {

    const userUtailty = new Users();

    const { setIsLoading } = useContext(AppContext);

    const users = useSelector(store => store.users);

    const dispatch = useDispatch();

    const handelSubmit = values => {

        setIsLoading(true);

        return userUtailty.addUser(values, dispatch, users).finally(_ => setIsLoading(false));

    }

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

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => handelSubmit(formik.values), 1000);


    return { formik, clickHandler }
}

export {
    useHandleAddUserLogic
}