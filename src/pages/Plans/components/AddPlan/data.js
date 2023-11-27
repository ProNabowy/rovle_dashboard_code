import Formik from "../../../../hooks/Formik/Formik";
import { useContext, useState } from "react";
import { Plans } from "../../../../apis/apis";
import { debounce } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";

const useAddPlan = () => {

    const plansUtailty = new Plans();

    const plans = useSelector(store => store.plans);

    const dispatch = useDispatch();

    const [initialValues, setInitialValues] = useState({
        name: "",
        status: "",
        description: "",
        provider_id: "",
        sizes: [],
        coffee_shops: [],
        products: []
    });

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

    const { setIsLoading } = useContext(AppContext);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        const updatedData = { ...formik.values };

        // Convert Products To Ids
        updatedData.products = updatedData.products?.map(item => {
            const newProductArct = { id: item?.id || item };
            return newProductArct;
        });

        // Convert Coffee Shops To Ids
        updatedData.coffee_shops = updatedData.coffee_shops?.map(item => {
            return item?.id || item;
        });

        return plansUtailty.addPlans(updatedData, dispatch, plans).finally(_ => setIsLoading(false));

    }, 1000);

    return { formik, clickHandler };

}

export {
    useAddPlan
}