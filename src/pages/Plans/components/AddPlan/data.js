import { useSelector } from "react-redux";
import Formik from "../../../../hooks/Formik/Formik";
import { useState } from "react";
import { Plans } from "../../../../apis/apis";

const useAddPlan = () => {

    const roaster = useSelector(store => store.rosters);

    const plansUtailty = new Plans();

    const [initialValues, setInitialValues] = useState({
        name: "",
        status: "",
        description: "",
        provider_id: "",
        sizes: []
    });

    const { useFormData } = Formik();

    const handelSubmit = values => plansUtailty.addPlans(values);

    const { formik } = useFormData(initialValues, handelSubmit);

    return { roaster, formik };

}

export {
    useAddPlan
}