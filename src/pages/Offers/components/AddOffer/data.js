import { useContext, useState } from "react";
import Formik from "../../../../hooks/Formik/Formik";
import { Offers } from "../../../../apis/apis";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { debounce } from "../../../../assets/js/utils";
import { useDispatch, useSelector } from "react-redux";

const useDataGetter = _ => {

    const offeerUtaitly = new Offers();

    const { setIsLoading } = useContext(AppContext);

    const dispatch = useDispatch();

    const offeers = useSelector(store => store.offeers);

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

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => offeerUtaitly.addOffer(formik.values, dispatch, offeers).finally(_ => setIsLoading(false)), 1000);

    return { formik, clickHandler }

}


export {
    useDataGetter,
}