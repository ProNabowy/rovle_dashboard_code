
import { useEffect, useState } from "react";
import { Cities } from "../../../../apis/apis";
import { useSelector } from "react-redux";
import { Formik } from "../../../../hooks";
import { useLocation } from "react-router-dom";
import { getSelectedOption } from "../../../../assets/js/utils";

const useDataGetter = () => {

    const [initialValues, setInitialValues] = useState({
        name: "",
        province_id: '',
    });

    const location = useLocation().search;

    const cityId = +location.slice(4);

    const citiesUtility = new Cities();

    const province = useSelector(store => store.province);

    const cities = useSelector(store => store.cities);

    const [selectedCity, setSelectedCity] = useState({});

    const handelSubmit = values => values?.province_id && citiesUtility.editCity(values, cityId);

    useEffect(() => {

        setSelectedCity(getSelectedOption(cities, 'id', cityId));

    }, [cities]);

    useEffect(() => {

        setInitialValues({
            name: selectedCity?.name,
            province_id: getSelectedOption(province, 'id', selectedCity?.province_id),
        })

    }, [selectedCity]);

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, handelSubmit);

    return { formik, province };

}

export {
    useDataGetter
};