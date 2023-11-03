import { useState } from "react";
import { useSelector } from "react-redux";
import { Province } from "../../../../apis/apis";
import { Formik } from "../../../../hooks";


const useDataGetter = () => {

    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = useSelector(store => store.countries);

    const provinceUtility = new Province();

    const [initialValues, setInitialValues] = useState({
        name: "",
        country_id: ""
    });

    const { useFormData } = Formik();

    const handelSubmit = values => provinceUtility.addProvinces(values);

    const { formik } = useFormData(initialValues, handelSubmit);

    return { formik, selectedCountry, setSelectedCountry, countries };

};

export {
    useDataGetter
}