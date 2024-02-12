import { useContext } from "react";
import { Store } from "../../../../apis/apis";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";
import { debounce } from "../../../../assets/utils/utils";

const useDataGetter = _ => {

    const storeUtailty = new Store();

    const { setIsLoading } = useContext(AppContext);

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

    const navigate = useNavigate();

    const handleSubmit = () => {

        setIsLoading(true);

        return storeUtailty.addOffeer(formik.values, navigate).finally(_ => setIsLoading(false));
    }

    const clickHandler = debounce(handleSubmit, 1000);

    return { formik, clickHandler }

}


export {
    useDataGetter,
}