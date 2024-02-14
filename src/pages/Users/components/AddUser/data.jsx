import { useContext } from "react";
import { Store, swal } from "../../../../apis/apis";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";

const useHandleAddUserLogic = () => {

    const storeUtailty = new Store();

    const { setIsLoading } = useContext(AppContext);

    const navigate = useNavigate();

    const handelSubmit = values => {

        if (values?.user_password !== values?.user_password_confirmation || !values.user_password) {

            return swal.warning('Advertencia', 'La contraseña y la confirmación de contraseña deben ser iguales.');

        } else {

            setIsLoading(true);

            return storeUtailty.addUser(values, navigate).finally(_ => setIsLoading(false));
        }

    }
    const formik = useFormik({
        initialValues: {
            user_name: "",
            user_password: "",
            user_password_confirmation: "",
            user_email: "",
            role_id: "",
        },
        onSubmit: handelSubmit
    })

    return { formik }
}

export {
    useHandleAddUserLogic
}