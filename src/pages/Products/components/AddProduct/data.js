import { Products } from "../../../../apis/apis";
import { useContext, useState } from "react";
import Formik from "../../../../hooks/Formik/Formik";
import { debounce } from "../../../../assets/js/utils";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../../../components/AppContext/AppContext";

const useAddProduct = () => {

    const productUtailty = new Products();

    const products = useSelector(store => store.products);

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    const [initialValues, setInitialValues] = useState({
        commercial_name: "",
        code: "",
        trade_name: "",
        region: "",
        farm: "",
        sca_score: "",
        altitude: "",
        process: "",
        grades: "",
        provider_id: "",
        stock: "",
        description: "",
        presentations: [],
        origins: [],
        coffeeShops: []
    });

    const { useFormData } = Formik();

    const handelSubmit = values => {

        const updatedData = { ...values };

        // Convert Objects To Arr Of Ids
        updatedData.origins = updatedData?.origins.map(item => item?.id || item);
        updatedData.coffeeShops = updatedData?.coffeeShops.map(item => item?.id || item);

        setIsLoading(true);

        return productUtailty.addProduct(updatedData, dispatch, products).finally(_ => setIsLoading(false));

    }
    const { formik } = useFormData(initialValues, null);


    const clickHandler = debounce((_) => handelSubmit(formik.values), 1000);

    return { formik, clickHandler, }

}

export {
    useAddProduct
}