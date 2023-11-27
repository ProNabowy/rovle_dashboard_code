import Formik from "../../../../hooks/Formik/Formik";
import { useContext, useEffect, useState } from "react";
import { Plans } from "../../../../apis/apis";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { debounce } from "../../../../assets/js/utils";
import { useDispatch, useSelector } from "react-redux";

const useEditPlan = () => {

    const [_, setSelectedPlan] = useState({});

    const plans = useSelector(store => store.plans);

    const dispatch = useDispatch();

    const location = useLocation().search;

    const providerId = location.slice(4);

    const plansUtailty = new Plans();

    const { setIsLoading } = useContext(AppContext);

    const [initialValues, setInitialValues] = useState({
        sizes: []
    });

    useEffect(() => {

        setIsLoading(true);

        plansUtailty.showPlan(setSelectedPlan, providerId).then(data => {

            setInitialValues({
                name: data?.name,
                status: data?.status,
                description: data?.description,
                provider_id: data?.provider_id,
                sizes: data?.sizes?.map((item) => {

                    const newItem = { size_id: item.size_id, price: item?.price, id: item?.size_id };

                    return newItem;

                }),
                products: data?.products,
                coffee_shops: data?.coffee_shops
            });

        }).finally(_ => setIsLoading(false));

    }, []);

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

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

        return plansUtailty.updatePlan(updatedData, providerId, plans, dispatch).finally(_ => setIsLoading(false));

    }, 1000)


    return {
        formik,
        clickHandler
    };

}

export {
    useEditPlan
}