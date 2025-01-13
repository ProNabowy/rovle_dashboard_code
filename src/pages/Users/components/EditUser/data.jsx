import { useContext, useEffect, } from "react";
import { Get, Update, swal } from "../../../../apis/apis";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";


const useHandleAddUserLogic = () => {

    const updateUtailty = new Update();

    const getUtailty = new Get();

    const location = useLocation().search;

    const userId = location.slice(4);

    const { setIsLoading } = useContext(AppContext);

    const handelSubmit = values => {

        setIsLoading(true);

        return updateUtailty.updateUser(userId, values).finally(_ => setIsLoading(false));
    }

    const formik = useFormik({
        initialValues: {},
        onSubmit: handelSubmit
    })

    useEffect(() => {

        getUtailty.getSingleUser(userId)
            .then(data => {
                formik.setValues({
                    user_name: data?.name,
                    user_email: data?.email,
                    role_id: data?.role_id,
                    coffee_shop_id: data?.stuff?.coffee_shop_id,
                })
            });

        return () => { };
    }, []);

    return { formik }
}

export {
    useHandleAddUserLogic
}