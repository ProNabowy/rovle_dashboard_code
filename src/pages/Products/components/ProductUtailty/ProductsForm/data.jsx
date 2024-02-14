import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Get } from "../../../../../apis/apis";
import { AppContext } from "../../../../../context/AppContext";

const useFormDataGetter = (formik, originsList, packagesList) => {

    const getUtailty = new Get();

    const [allRoasters, setAllRoasters] = useState([]);

    const [addedShops, setAddedShops] = useState({});

    const [rosters, setRosters] = useState([]);

    const [selectedProvider, setSelectedProvider] = useState({});

    const { setIsLoading, user } = useContext(AppContext);

    const isProvider = user?.provider;

    const [coffee, setCoffee] = useState([]);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getRoasters()
            .then(response => setAllRoasters(response))
            .finally(_ => setIsLoading(false));

    }, []);

    useEffect(() => {

        if (formik.values?.provider_id) {

            const currentRoaster = allRoasters?.filter(item => item.id == formik.values?.provider_id);

            setSelectedProvider(currentRoaster?.[0]);

        }

        if (isProvider && !addedShops?.provider_id) {

            setRosters(isProvider);

            setSelectedProvider(isProvider);

            setCoffee(isProvider?.coffee_shops);

            formik.setFieldValue('provider_id', isProvider?.id);

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
            placeholders: ['Este será el nombre que aparecerá en el listado en el shop.', 'Ingresar Código'],
            values: [formik?.values?.commercial_name, formik.values?.code],
            nameAttr: ['commercial_name', 'code'],
            onChange: formik.handleChange,
            required: [true, true],
            key: ['commercial_name', 'code']
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
            max: [null, 100],
            onChange: formik.handleChange,
        },
        {
            names: ['Altitud', 'Proceso'],
            types: ['number', 'text'],
            required: [true, true],
            placeholders: ['Ingresar Altitud', 'Ingresar Proceso'],
            key: ['altitude', 'process'],
            min: [0, null],
            max: [8000, null],
            values: [formik?.values?.altitude, formik.values?.process],
            nameAttr: ['altitude', 'process'],
            onChange: formik.handleChange,
        },
    ]

    useEffect(() => {

        const shopProviderId = addedShops?.provider_id;

        if (shopProviderId) {

            getUtailty.getRoasters()
                .then(response => {

                    setAllRoasters(response);

                    if (isProvider) {

                        const newProviderData = response?.filter(roaster => roaster?.id === isProvider?.id)?.[0];

                        setRosters(newProviderData);

                        setSelectedProvider(newProviderData);

                        setCoffee(newProviderData?.coffee_shops);

                    }

                });

        }

        return () => { };
    }, [addedShops]);


    return {
        inputsData,
        isByNewOWner,
        coffee,
        selectedProvider,
        setSelectedProvider,
        rosters,
        isProvider,
        setAddedShops,
        allRoasters,
        addedShops
    }

}

export {
    useFormDataGetter
}