import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import { hasRoutePermissions } from "../../../../assets/utils/utils";
import { Get } from "../../../../apis/apis";


const useAddPlan = (formik) => {

    const [roasters, setRoasters] = useState([]);

    const getUtailty = new Get();

    const [addedShops, setAddedShops] = useState({});

    const [coffee, setCoffee] = useState([]);

    const { userPeressmisons, user, setIsLoading } = useContext(AppContext);

    const is_created_by_provider = user?.created_by_provider;

    const isHasPermissions = permissionKey => hasRoutePermissions(userPeressmisons, permissionKey);

    const provider = user?.provider;

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getRoasters().then(response => setRoasters(response))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    useEffect(() => {

        if (provider?.id) {

            const getSelectedRoaster = roasters?.filter(item => item.id === provider?.id);

            setCoffee(getSelectedRoaster[0]?.coffee_shops);

        } else if (is_created_by_provider) {

            setCoffee(roasters[0]?.coffee_shops);

            formik.setFieldValue('provider_id', roasters?.[0]?.id)

        } else {

            const getSelectedRoaster = roasters?.filter(item => item.id === formik.values?.provider_id);

            setCoffee(getSelectedRoaster[0]?.coffee_shops);

        }

    }, [formik.values?.provider_id, provider, roasters]);

    useEffect(() => {

        const shopProviderId = addedShops?.provider_id;

        if (shopProviderId) {

            getUtailty.getRoasters()
                .then(response => {

                    setRoasters(response);

                    if (provider) {

                        const newProviderData = response?.filter(roaster => roaster?.id === provider?.id)?.[0];

                        setCoffee(newProviderData?.coffee_shops);

                    }

                });

        }

        return () => { };
    }, [addedShops]);

    const handleChangeProvider = e => {

        formik.setFieldValue('provider_id', e.target.value?.id);
        formik.setFieldValue('coffee_shops', []);
        formik.setFieldValue('sizes', []);
        formik.setFieldValue('products', []);

    }

    return {
        roasters,
        coffee,
        provider,
        handleChangeProvider,
        isHasPermissions,
        setAddedShops,
        addedShops,
        is_created_by_provider
    };

}

export {
    useAddPlan
}