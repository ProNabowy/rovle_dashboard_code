import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFormDataGetter = (formik, originsList, packagesList) => {

    const rosters = useSelector(store => store?.rosters);

    const [coffee, setCoffee] = useState([]);

    useEffect(() => {

        const getSelectedRoaster = rosters?.filter(item => item.id === formik.values?.provider_id);

        setCoffee(getSelectedRoaster[0]?.coffee_shops);

    }, [formik.values?.provider_id]);

    useEffect(() => {

        formik.setFieldValue('origins', originsList);

        // Clean up
        return () => { };

    }, [originsList]);

    useEffect(() => {

        formik.setFieldValue('presentations', packagesList);

        // Clean up
        return () => { };

    }, [packagesList]);

    useEffect(() => {

        formik.setFieldValue('coffeeShops', []);
        formik.setFieldValue('presentations', []);

        return () => { };

    }, [formik.values.provider_id]);

    const inputsData = [
        { names: ['Product Name', 'Code'], placeholders: ['Enter Name', 'Enter Code'], values: [formik?.values?.trade_name, formik.values?.code], nameAttr: ['trade_name', 'code'], onChange: formik.handleChange, key: ['trade_name', 'code'] },
        { names: ['Nombre Comercial', 'Region'], placeholders: ['Enter Nombre Comercial', 'Enter Region'], key: ['commercial_name', 'region'], values: [formik?.values?.commercial_name, formik.values?.region], nameAttr: ['commercial_name', 'region'], onChange: formik.handleChange, },
        { names: ['Finca', 'Puntunaction Sca s'], types: ['text', 'number'], placeholders: ['Enter Finca', 'Enter Puntunaction Sca s'], key: ['farm', 'sca_score'], values: [formik?.values?.farm, formik.values?.sca_score], nameAttr: ['farm', 'sca_score'], onChange: formik.handleChange, },
        { names: ['Altitude', 'Process'], placeholders: ['Enter Altitude', 'Enter Process'], key: ['altitude', 'process'], values: [formik?.values?.altitude, formik.values?.process], nameAttr: ['altitude', 'process'], onChange: formik.handleChange, },
    ]


    return {
        inputsData,
        rosters,
        coffee
    }

}

export {
    useFormDataGetter
}