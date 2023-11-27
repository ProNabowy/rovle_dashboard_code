import { useContext, useEffect, useState } from "react";
import Formik from "../../../../hooks/Formik/Formik";
import { Offers } from "../../../../apis/apis";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { useLocation } from "react-router-dom";
import { debounce } from "../../../../assets/js/utils";
import { useDispatch, useSelector } from "react-redux";

const useDataGetter = _ => {

    const offeerUtaitly = new Offers();

    const { setIsLoading } = useContext(AppContext);

    const location = useLocation().search;

    const offeerId = location.slice(4);

    const dispatch = useDispatch();

    const offeers = useSelector(store => store.offeers);

    const [offeer, setOffer] = useState({});

    const [initialValues, setInitialValues] = useState({
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
    });

    useEffect(() => {

        setIsLoading(true);

        offeerUtaitly.fetchSingleOffer(setOffer, offeerId).then(data => {

            setInitialValues({

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

    }, []);

    const { useFormData } = Formik();


    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => offeerUtaitly.updateOffer(formik.values, offeerId, dispatch, offeers).finally(_ => setIsLoading(false)), 1000);


    return { formik, clickHandler }

}


export {
    useDataGetter
}