import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Province } from "../../../../apis/apis";
import { Formik } from "../../../../hooks";
import { useLocation } from "react-router-dom";
import { getSelectedOption } from "../../../../assets/js/utils";


const useDataGetter = () => {

    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = useSelector(store => store.countries);

    const provinceUtility = new Province();

    const location = useLocation().search;

    const provinceId = +location.slice(4);

    const [data, setData] = useState({});

    const [initialValues, setInitialValues] = useState({
        name: "",
        country_id: ""
    });

    useEffect(() => {

        provinceUtility.getProvince(setData, provinceId);

    }, []);

    useEffect(() => {

        setInitialValues(data);

        setSelectedCountry(getSelectedOption(countries, 'id', data?.country_id));

    }, [data]);

    const { useFormData } = Formik();

    const handelSubmit = values => provinceUtility.editProvinces(values, provinceId);

    const { formik } = useFormData(initialValues, handelSubmit);

    return { formik, selectedCountry, setSelectedCountry, countries };

};

export {
    useDataGetter
}