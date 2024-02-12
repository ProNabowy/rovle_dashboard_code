import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import { hasRoutePermissions } from "../../../../assets/utils/utils";
import { Get } from "../../../../apis/apis";


const useAddPlan = (formik) => {

    const [roasters, setRoasters] = useState([]);

    const getUtailty = new Get();

    const [coffee, setCoffee] = useState([]);

    const { userPeressmisons, user, setIsLoading } = useContext(AppContext);

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

        } else {

            const getSelectedRoaster = roasters?.filter(item => item.id === formik.values?.provider_id);

            setCoffee(getSelectedRoaster[0]?.coffee_shops);

        }

    }, [formik.values?.provider_id, provider, roasters]);

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
        isHasPermissions
    };

}

export {
    useAddPlan
}