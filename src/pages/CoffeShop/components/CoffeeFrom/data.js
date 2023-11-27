import { useContext, useEffect, useState } from "react";
import { CoffeeShops } from "../../../../apis/apis";
import Formik from "../../../../hooks/Formik/Formik";
import { useLocation } from "react-router-dom";
import { debounce } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";

const useDataGetter = (asEdit) => {

    const { useFormData } = Formik();

    const coffeeUtailty = new CoffeeShops();

    const shops = useSelector(store => store.shops);

    const dispatch = useDispatch();

    const location = useLocation().search;

    const coffeeShopId = location.slice(4);

    const [_, setCoffee] = useState([]);

    const { setIsLoading } = useContext(AppContext);

    const [initialValues, setInitialValues] = useState({
        name: "",
        post_code: "",
        address: "",
        latitude: "40.463725",
        longitude: "-3.7904194",
        provider_id: "",
        country_id: "",
        province_id: "",
        city_id: ""
    });

    useEffect(() => {

        if (asEdit) {

            setIsLoading(true);

            coffeeUtailty.getSingleCoffee(setCoffee, coffeeShopId).then(data => {

                return setInitialValues({

                    name: data?.name,
                    post_code: data?.post_code,
                    address: data?.address,
                    latitude: data?.latitude,
                    longitude: data?.longitude,
                    provider_id: data?.provider_id,
                    country_id: data?.country_id,
                    province_id: data?.province_id,
                    city_id: data?.city_id

                });

            }).finally(_ => setIsLoading(false));

        }

    }, []);

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return asEdit ? coffeeUtailty.editCoffee(formik.values, coffeeShopId, dispatch, shops).finally(_ => setIsLoading(false)) : coffeeUtailty.addCoffee(formik.values, dispatch, shops).finally(_ => setIsLoading(false))

    }, 1000);

    return { formik, clickHandler }

}

export {
    useDataGetter
}