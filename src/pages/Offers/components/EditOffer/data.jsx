import { useContext, useEffect } from "react";
import { Get, Update } from "../../../../apis/apis";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";
import { debounce } from "../../../../assets/utils/utils";

const useDataGetter = _ => {

    const getUtailty = new Get();

    const updateUtailty = new Update();

    const { setIsLoading } = useContext(AppContext);

    const location = useLocation().search;

    const offeerId = location.slice(4);

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
        }
    });

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getSingleOffeer(offeerId)
            .then(data => {

                formik.setValues({
                    name: data?.name,
                    provider_id: data?.provider_id,
                    description: data?.description,
                    level_id: data?.level_id,
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

    const handleSubmit = () => {

        setIsLoading(true);

        return updateUtailty.updateOffeer(offeerId, formik.values).finally(_ => setIsLoading(false));
    }

    const clickHandler = debounce(handleSubmit, 500);

    return { formik, clickHandler }

}


export {
    useDataGetter
}