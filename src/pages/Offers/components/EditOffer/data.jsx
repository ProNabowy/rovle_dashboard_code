import { useContext, useEffect } from "react";
import { Get, Update, swal } from "../../../../apis/apis";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";

const useDataGetter = _ => {

    const getUtailty = new Get();

    const updateUtailty = new Update();

    const { setIsLoading, user } = useContext(AppContext);

    const location = useLocation().search;

    const offeerId = location.slice(4);

    const handleSubmit = (values) => {

        if (!values?.provider_id || !values?.level_id || !values?.activation_method || !values?.discount_type || !values?.offer_place) {

            if (!values?.provider_id) return swal.warning('Advertencia', 'El campo del Tostador es necesario, por favor complételo.');
            if (!values?.level_id) return swal.warning('Advertencia', 'El campo del Nivel es necesario, por favor complételo.');
            if (!values?.activation_method) return swal.warning('Advertencia', 'El campo del Activo es necesario, por favor complételo.');
            if (!values?.discount_type) return swal.warning('Advertencia', 'El campo del T.Promo es necesario, por favor complételo.');
            if (!values?.offer_place) return swal.warning('Advertencia', 'El campo del Recurrencia es necesario, por favor complételo.');


        } else {

            setIsLoading(true);

            return updateUtailty.updateOffeer(offeerId, values).finally(_ => setIsLoading(false));
        }
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            provider_id: "",
            description: "",
            level_id: "",
            activation_method: "",
            activation_amount: "",
            discount: "",
            duration: "",
            start_date: "",
            end_date: "",
            offer_place: "",
            discount_type: "",
        },
        onSubmit: handleSubmit
    });

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getSingleOffeer(offeerId)
            .then(data => {

                formik.setValues({
                    name: data?.name,
                    provider_id: data?.provider_id,
                    description: data?.description,
                    level_id: data?.level_id || 'auto',
                    activation_method: data?.activation_method,
                    activation_amount: data?.activation_amount,
                    discount: data?.discount,
                    duration: data?.duration,
                    start_date: data?.start_date,
                    end_date: data?.end_date,
                    offer_place: data?.offer_place,
                    discount_type: data?.discount_type,
                })

            }).finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    useEffect(() => {

        if (user?.provider?.id && !formik?.values?.provider_id) formik.setFieldValue('provider_id', user?.provider?.id);

        return () => { };
    }, [user]);

    return { formik }

}


export {
    useDataGetter
}