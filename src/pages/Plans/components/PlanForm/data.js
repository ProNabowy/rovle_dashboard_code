import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


const useAddPlan = (formik) => {

    const roaster = useSelector(store => store.rosters);

    const [coffee, setCoffee] = useState([]);

    const provider = JSON.parse(localStorage.getItem('user'))?.provider;

    useEffect(() => {

        if (provider?.id) {

            const getSelectedRoaster = roaster?.filter(item => item.id === provider?.id);

            setCoffee(getSelectedRoaster[0]?.coffee_shops);

        } else {

            const getSelectedRoaster = roaster?.filter(item => item.id === formik.values?.provider_id);

            setCoffee(getSelectedRoaster[0]?.coffee_shops);

        }

    }, [formik.values?.provider_id, provider]);

    const handleChangeProvider = e => {

        formik.setFieldValue('provider_id', e.target.value?.id);
        formik.setFieldValue('coffee_shops', []);
        formik.setFieldValue('sizes', []);
        formik.setFieldValue('products', []);

    }


    return {
        roaster,
        coffee,
        provider,
        handleChangeProvider
    };

}

export {
    useAddPlan
}