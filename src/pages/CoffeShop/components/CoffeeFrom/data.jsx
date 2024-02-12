import { useContext, useEffect, useState } from "react";
import { Get, Store, Update } from "../../../../apis/apis";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AppContext } from "../../../../context/AppContext";
import { debounce } from "../../../../assets/utils/utils";

const useDataGetter = (asEdit) => {

    const getUtailty = new Get();

    const storeUtailty = new Store();

    const updateUtailty = new Update();

    const formik = useFormik({
        initialValues: {
            name: "",
            post_code: "",
            address: "",
            latitude: "40.463725",
            longitude: "-3.7904194",
            provider_id: "",
            country_id: "",
            province_id: "",
            city_id: ""
        }
    });

    const { setIsLoading, user } = useContext(AppContext);

    const isProvider = user?.provider;

    const location = useLocation().search;

    const coffeeShopId = location.slice(4);

    const [countries, setCountries] = useState([]);

    const [roasters, setRoasters] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        getUtailty.getCountries().then(response => setCountries(response))
            .then(_ => {

                getUtailty.getRoasters().then(response => setRoasters(response))

            })
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    useEffect(() => {

        if (asEdit) {

            getUtailty.getSingleCoffee(coffeeShopId)
                .then(data => {

                    formik.setValues({
                        name: data?.name,
                        post_code: data?.post_code,
                        address: data?.address,
                        latitude: data?.latitude,
                        longitude: data?.longitude,
                        provider_id: data?.provider_id,
                        country_id: data?.country_id,
                        province_id: data?.province_id,
                        city_id: data?.city_id
                    })

                });

        } else {

            formik.setFieldValue('provider_id', isProvider?.id);

        }

        return () => { };
    }, []);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        if (asEdit) {

            return updateUtailty.updateCoffee(coffeeShopId, formik.values).finally(_ => setIsLoading(false));

        } else {

            return storeUtailty.addCoffee(formik.values, navigate).finally(_ => setIsLoading(false));

        }

    }, 1000);

    return {
        formik,
        clickHandler,
        isProvider,
        roasters,
        countries
    }

}

export {
    useDataGetter
}