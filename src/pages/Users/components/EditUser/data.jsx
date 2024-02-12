import { useContext, useEffect, } from "react";
import { Get, Update, swal } from "../../../../apis/apis";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";
import { debounce } from "../../../../assets/utils/utils";


const useHandleAddUserLogic = () => {

    const updateUtailty = new Update();

    const getUtailty = new Get();

    const location = useLocation().search;

    const userId = location.slice(4);

    const { setIsLoading } = useContext(AppContext);

    const handelSubmit = values => {

        if (values?.user_password !== values?.user_password_confirmation || !values.user_password) {

            return swal.warning('Warning', 'Password And Confirem Password Must Be The Same');

        } else {

            setIsLoading(true);

            return updateUtailty.updateUser(userId, values).finally(_ => setIsLoading(false));
        }

    }

    const formik = useFormik({
        initialValues: {},
    })

    useEffect(() => {

        getUtailty.getSingleUser(userId)
            .then(data => {
                formik.setValues({
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
            });

        return () => { };
    }, []);

    const clickHandler = debounce((_) => handelSubmit(formik.values), 1000);

    return { formik, clickHandler }
}

export {
    useHandleAddUserLogic
}