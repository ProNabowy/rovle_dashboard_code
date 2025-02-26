import { useContext, useEffect } from "react";
import { Store, swal } from "../../../../apis/apis";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";

const useDataGetter = _ => {

    const storeUtailty = new Store();

    const { setIsLoading, user } = useContext(AppContext);

    const navigate = useNavigate();

    const handleSubmit = (values) => {

        if (!values?.provider_id || !values?.level_id || !values?.activation_method || !values?.discount_type || !values?.offer_place) {
            if (!values?.provider_id) return swal.warning('Advertencia', 'El campo del Tostador es necesario, por favor complételo.');
            if (!values?.level_id) return swal.warning('Advertencia', 'El campo del Nivel es necesario, por favor complételo.');
            if (!values?.activation_method) return swal.warning('Advertencia', 'El campo del Activo es necesario, por favor complételo.');
            if (!values?.discount_type) return swal.warning('Advertencia', 'El campo del T.Promo es necesario, por favor complételo.');
            if (!values?.offer_place) return swal.warning('Advertencia', 'El campo de "Dónde canjearlo" es necesario, por favor complételo.');


        } else {

            setIsLoading(true);

            return storeUtailty.addOffeer(values, navigate).finally(_ => setIsLoading(false));

        }


    }

    const formik = useFormik({
        initialValues: {
            name: "",
            provider_id: user?.provider?.id,
            description: "",
            level_id: "",
            activation_method: "",
            activation_amount: "",
            discount: "",
            duration: "",
            start_date: new Date(),
            end_date: null,
            offer_place: "",
            discount_type: "",
        },
        onSubmit: handleSubmit
    });


    useEffect(() => {

        if (user?.provider?.id) formik.setFieldValue('provider_id', user?.provider?.id);

        return () => { };
    }, [user]);

    return { formik }
}


export {
    useDataGetter,
}