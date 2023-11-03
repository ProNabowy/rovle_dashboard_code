import Formik from "../../../../hooks/Formik/Formik";

const { useState } = require("react");
const { useSelector } = require("react-redux");
const { Origins } = require("../../../../apis/apis");

const useDataGetter = () => {

    const roasters = useSelector(store => store.rosters);

    const OriginsUtailty = new Origins();

    const [initialValues, setInitialValues] = useState({ name: "", provider_id: "" });

    const { useFormData } = Formik();

    const handelSubmit = values => OriginsUtailty.addOrigin(values);

    const { formik } = useFormData(initialValues, handelSubmit);


    return { formik, roasters }

}

export {
    useDataGetter
}