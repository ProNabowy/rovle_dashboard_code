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