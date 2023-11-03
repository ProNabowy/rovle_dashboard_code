
import { useState } from "react";
import { Cities } from "../../../../apis/apis";
import { useSelector } from "react-redux";
import { Formik } from "../../../../hooks";

const useDataGetter = () => {

    const [selectedProvince, setselectedProvince] = useState(null);

    const [initialValues, setInitialValues] = useState({
        name: "",
        province_id: '',
    })

    const citiesUtility = new Cities();

    const province = useSelector(store => store.province);

    const handelSubmit = values => selectedProvince && citiesUtility.addCity(values);

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, handelSubmit);

    return { formik, selectedProvince, setselectedProvince, province };

}

export {
    useDataGetter
};