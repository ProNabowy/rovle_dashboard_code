import { useContext, useEffect, useState } from "react";
import { Get, Store, Update, swal, } from "../../../../apis/apis";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AppContext } from "../../../../context/AppContext";
import { debounce, hasRoutePermissions } from "../../../../assets/utils/utils";

const useDataGetter = (asEdit, stateList) => {

    const getUtailty = new Get();

    const storeUtailty = new Store();

    const { setIsLoading, userPeressmisons, user, setUser } = useContext(AppContext);

    const updateUtailty = new Update();

    const [countries, setCountries] = useState([]);

    const clickHandler = debounce((_) => {

        if (!formik.values?.provider_id) {

            if (!formik?.values?.provider_id) return swal.warning('Advertencia', 'El campo del tostador es necesario, por favor complételo.');

        } else {

            setIsLoading(true);

            if (asEdit) return updateUtailty.updateCoffee(coffeeShopId, formik.values).then(_ => navigate('/setups/coffee-shop')).finally(_ => setIsLoading(false));

            else {
                return storeUtailty.addCoffee(formik.values, stateList ? null : navigate)
                    .then(response => {

                        if (stateList) stateList(response?.data);

                        if (user?.provider?.id) {

                            const coffee_shops = [...user?.provider?.coffee_shops, response.data];

                            const updatedUser = { ...user, provider: { ...user?.provider, coffee_shops } };

                            setUser(updatedUser);
                        }

                    })

                    .finally(_ => setIsLoading(false));

            }

        };

    }, 1000);

    const formik = useFormik({
        initialValues: {
            name: "",
            post_code: "",
            address: "",
            // latitude: "40.463725",
            // longitude: "-3.7904194",
            provider_id: "",
            country_id: "ES",
            province_id: "",
            city_id: "",
        },
        onSubmit: clickHandler
    });

    const isHasPermissions = (permissionKey) => hasRoutePermissions(userPeressmisons, permissionKey);

    const isProvider = user?.provider;

    const location = useLocation().search;

    const coffeeShopId = location.slice(4);

    const [roasters, setRoasters] = useState([]);

    const navigate = useNavigate();

    const handleBlur = (e) => {

        if (e?.target?.value?.length === 5) {

            return getUtailty.getCitiesByZipCode(e?.target?.value)
                .then(response => {
                    setCountries(response);
                    formik.setFieldValue('province_id', response?.[0]?.provinces?.[0]?.id);
                    formik.setFieldValue('city_id', response?.[0]?.provinces?.[0]?.cities?.[0]?.id);
                })

        }
        return null;
    }

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getCountries().then(response => {

            setCountries(response);

            formik.setFieldValue('country_id', response?.[0]?.id);

            return response;
        })
            .then(_ => {

                getUtailty.getRoasters().then(response => setRoasters(response))

            })
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    useEffect(() => {

        if (asEdit) getUtailty.getSingleCoffee(coffeeShopId)
            .then(data => formik.setValues(data));
        else formik.setFieldValue('provider_id', isProvider?.id);

        return () => { };
    }, []);

    return {
        formik,
        clickHandler,
        isProvider,
        roasters,
        countries,
        isHasPermissions,
        handleBlur
    }

}

export {
    useDataGetter
}