import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useFormDataGetter = (formik, originsList, packagesList) => {

    let allRoasters = useSelector(store => store?.rosters);

    const [rosters, setRosters] = useState([]);

    const [selectedProvider, setSelectedProvider] = useState({});

    const sizes = useSelector(store => store.sizes);

    const isProvider = JSON.parse(localStorage.getItem('user'))?.provider;

    const [coffee, setCoffee] = useState([]);

    useEffect(() => {

        if (isProvider) {

            const currentRoaster = allRoasters?.filter(item => item.id === isProvider?.id);

            setRosters(currentRoaster);

            setSelectedProvider(currentRoaster?.[0]);

            setCoffee(currentRoaster?.[0]?.coffee_shops);

            formik.setFieldValue('provider_id', currentRoaster?.id);

        } else {

            setRosters(allRoasters);

        }

    }, [allRoasters]);

    const locaition = useLocation().search;

    const isByNewOWner = locaition.slice(-4) === 'true';

    useEffect(() => {

        setCoffee(selectedProvider?.coffee_shops);

        formik.setFieldValue('provider_id', selectedProvider?.id);

    }, [selectedProvider]);

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

    const inputsData = [
        {
            names: ['Nombre del Producto', 'Código'],
            placeholders: ['Ingresar Nombre', 'Ingresar Código'],
            values: [formik?.values?.trade_name, formik.values?.code],
            nameAttr: ['trade_name', 'code'],
            onChange: formik.handleChange,
            required: [true, true],
            key: ['trade_name', 'code']
        },
        {
            names: ['Nombre Comercial', 'Region'],
            placeholders: ['Ingresar Nombre Comercial', 'Ingresar Region'],
            key: ['commercial_name', 'region'],
            required: [true, true],
            values: [formik?.values?.commercial_name, formik.values?.region],
            nameAttr: ['commercial_name', 'region'],
            onChange: formik.handleChange,
        },
        {
            names: ['Finca', 'Puntunaction Sca s'],
            types: ['text', 'number'],
            placeholders: ['Ingresar Finca', 'Ingresar Puntunaction Sca s'],
            key: ['farm', 'sca_score'],
            values: [formik?.values?.farm, formik.values?.sca_score],
            nameAttr: ['farm', 'sca_score'],
            required: [true, true],
            min: [null, 80],
            onChange: formik.handleChange,
        },
        {
            names: ['Altitud', 'Proceso'],
            types: ['number', 'text'],
            required: [true, true],
            placeholders: ['Ingresar Altitud', 'Ingresar Proceso'],
            key: ['altitude', 'process'],
            min: [1000, null],
            values: [formik?.values?.altitude, formik.values?.process],
            nameAttr: ['altitude', 'process'],
            onChange: formik.handleChange,
        },
    ]


    return {
        inputsData,
        isByNewOWner,
        coffee,
        selectedProvider,
        setSelectedProvider,
        sizes,
        rosters,
        isProvider
    }

}

export {
    useFormDataGetter
}