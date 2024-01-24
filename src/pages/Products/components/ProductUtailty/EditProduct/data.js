import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Products } from "../../../../../apis/apis";
import { debounce } from "../../../../../assets/js/utils";
import { AppContext } from "../../../../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import Formik from "../../../../../hooks/Formik/Formik";


const useEditProduct = () => {

    const location = useLocation().search;

    const [product, setProduct] = useState();

    const products = useSelector(store => store.products);

    const productUtailty = new Products();

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    const productId = location.slice(4);

    const [initialValues, setInitialValues] = useState({});

    const { useFormData } = Formik();

    const handelSubmit = values => {

        const updatedData = { ...values };

        // Convert Objects To Arr Of Ids
        updatedData.origins = updatedData?.origins.map(item => item?.id || item);
        updatedData.coffeeShops = updatedData?.coffeeShops.map(item => item?.id || item);

        setIsLoading(true);

        return productUtailty.editProducts(updatedData, productId, products, dispatch).finally(_ => setIsLoading(false));

    }
    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => handelSubmit(formik.values), 1000);

    useEffect(() => {

        productUtailty.getSingleProducts(setProduct, productId).then(data => {

            setInitialValues({
                commercial_name: data?.commercial_name,
                code: data?.code,
                trade_name: data?.trade_name,
                region: data?.region,
                farm: data?.farm,
                sca_score: data?.sca_score,
                altitude: data?.altitude,
                process: data?.process,
                grades: data?.grades,
                provider_id: data?.provider_id,
                stock: data?.stock,
                description: data?.description,
                presentations: data?.presentations,
                origins: data?.origins,
                coffeeShops: data?.coffee_shops,
                owner_name: data?.owner_name
            });
        });

        // Clean up
        return () => { };

    }, []);

    useEffect(() => {

        setInitialValues(perv => ({ ...perv, presentations: product?.presentations }))

    }, [product]);


    return { formik, clickHandler, }

}

export {
    useEditProduct
}