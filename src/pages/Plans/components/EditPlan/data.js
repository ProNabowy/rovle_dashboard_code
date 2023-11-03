import { useSelector } from "react-redux";
import Formik from "../../../../hooks/Formik/Formik";
import { useContext, useEffect, useState } from "react";
import { Plans } from "../../../../apis/apis";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../../../components/AppContext/AppContext";

const useAddPlan = () => {

    const roaster = useSelector(store => store.rosters);

    const [selectedPlan, setSelectedPlan] = useState({});

    const location = useLocation().search;

    const providerId = location.slice(4);

    const plansUtailty = new Plans();

    const { setIsLoading } = useContext(AppContext);


    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {

        plansUtailty.fetchPlansByProvider(setSelectedPlan, providerId);

    }, []);

    useEffect(() => {

        setInitialValues({
            name: selectedPlan?.name,
            status: selectedPlan?.status,
            description: selectedPlan?.description,
            provider_id: selectedPlan?.provider_id,
            sizes: selectedPlan?.sizes?.map((item) => {

                const newItem = { size_id: item.size_id, price: item?.price, id: item?.size_id };

                return newItem;

            })
        })

    }, [selectedPlan]);

    const { useFormData } = Formik();

    const handelSubmit = values => {

        setIsLoading(true);

        plansUtailty.updatePlan(values, providerId).finally(_ => setIsLoading(false));

    };

    const { formik } = useFormData(initialValues, handelSubmit);


    return { roaster, formik };

}

export {
    useAddPlan
}