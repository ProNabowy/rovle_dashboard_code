import { useContext, useEffect, useState } from "react";
import { Users } from "../../../../apis/apis";
import { useLocation } from "react-router-dom";
import { debounce } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import Formik from '../../../../hooks/Formik/Formik';
import { Swal } from "../../../../apis/data";


const useHandleAddUserLogic = () => {

    const userUtailty = new Users();

    const location = useLocation().search;

    const userId = location.slice(4);

    const { setIsLoading } = useContext(AppContext);

    const users = useSelector(store => store.users);

    const dispatch = useDispatch();

    const handelSubmit = values => {

        if (values?.user_password !== values?.user_password_confirmation || !values.user_password) {

            return Swal.warning('Warning', 'Password And Confirem Password Must Be The Same');

        } else {

            setIsLoading(true);

            return userUtailty.editUser(values, userId, dispatch, users).finally(_ => setIsLoading(false));

        }

    }

    const [_, setUser] = useState({});

    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {

        userUtailty.fetchSingleUser(setUser, userId).then(data => {

            setInitialValues({
                user_name: data?.name,
                user_card_id: data?.card_id,
                user_email: data?.email,
                user_address: data?.address,
                user_phone: data?.phone,
                user_zip: data?.zip,
                user_country_id: data?.country_id,
                user_province_id: data?.province_id,
                user_city_id: data?.city_id,
                role_id: data?.role_id,
            })

        })

    }, []);

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => handelSubmit(formik.values), 1000);

    return { formik, clickHandler }
}

export {
    useHandleAddUserLogic
}