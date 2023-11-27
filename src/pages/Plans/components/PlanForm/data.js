import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Size } from "../../../../apis/apis";
import { setSizes } from "../../../../store/reduces/sizes";


const useAddPlan = (formik) => {

    const roaster = useSelector(store => store.rosters);

    const [coffee, setCoffee] = useState([]);

    const sizes = useSelector(store => store.sizes);

    const sizeUtality = new Size();

    const dispatch = useDispatch();

    useEffect(() => {

        formik.values?.provider_id && sizeUtality.fetchSizeByProvider(setSizes, formik.values?.provider_id, dispatch);

    }, [formik.values?.provider_id]);


    useEffect(() => {

        const getSelectedRoaster = roaster?.filter(item => item.id === formik.values?.provider_id);

        setCoffee(getSelectedRoaster[0]?.coffee_shops);

    }, [formik.values?.provider_id]);

    const handleChangeProvider = e => {

        formik.setFieldValue('provider_id', e.target.value?.id);
        formik.setFieldValue('coffee_shops', []);
        formik.setFieldValue('sizes', []);
        formik.setFieldValue('products', []);

    }


    return {
        roaster,
        coffee,
        sizes,
        handleChangeProvider
    };

}

export {
    useAddPlan
}