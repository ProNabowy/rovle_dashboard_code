import { useEffect, useState } from "react";
import { Users } from "../../../../apis/apis";
import Formik from '../../../../hooks/Formik/Formik';
import { useLocation } from "react-router-dom";

const useHandleAddUserLogic = () => {

    const userUtailty = new Users();

    const location = useLocation().search;

    const userId = location.slice(4);

    const handelSubmit = values => userUtailty.editUser(values, userId);

    const [user, setUser] = useState({});

    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {

        userUtailty.fetchSingleUser(setUser, userId);

    }, []);

    useEffect(() => {

        setInitialValues({
            user_name: user?.name,
            user_card_id: user?.card_id,
            user_email: user?.email,
            user_address: user?.address,
            user_phone: user?.phone,
            user_zip: user?.zip,
            user_country_id: user?.country_id,
            user_province_id: user?.province_id,
            user_city_id: user?.city_id,
            role_id: user?.role_id,
        })

    }, [user]);

    const { useFormData } = Formik();


    const { formik } = useFormData(initialValues, handelSubmit);


    return { formik }
}

export {
    useHandleAddUserLogic
}