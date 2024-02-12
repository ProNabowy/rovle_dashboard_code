import { useContext, useEffect, useState } from "react";
import { Store } from "../../../../apis/apis";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";
import { debounce } from "../../../../assets/utils/utils";

const useAddPlan = () => {

    const { user, setIsLoading } = useContext(AppContext);

    const storeUtailty = new Store();

    const provider = user?.provider;

    const [initialValues, setInitialValues] = useState({
        name: "",
        status: "",
        description: "",
        provider_id: provider?.id,
        sizes: [],
        coffee_shops: [],
        products: []
    });

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {}
    });

    useEffect(() => {

        formik.setValues(initialValues);

        return () => { };
    }, []);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        const updatedData = { ...formik.values };

        // Convert Products To Ids
        updatedData.products = updatedData.products?.map(item => {
            const newProductArct = { id: item?.id || item };
            return newProductArct;
        });

        // Convert Coffee Shops To Ids
        updatedData.coffee_shops = updatedData.coffee_shops?.map(item => {
            return item?.id || item;
        });

        return storeUtailty.addPlan(updatedData, navigate).finally(_ => setIsLoading(false));

    }, 1000);

    return { formik, clickHandler };

}

export {
    useAddPlan
}