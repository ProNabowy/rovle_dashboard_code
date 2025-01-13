import { useContext, useEffect, useState } from "react";
import { Get, Store } from "../../../../../apis/apis";
import { useNavigate } from "react-router-dom";
import { debounce } from "../../../../../assets/utils/utils";
import { AppContext } from "../../../../../context/AppContext";
import { useFormik } from "formik";

const useFormDataGetter = () => {

    let [rosters, setRoasters] = useState([]);

    const getUtailty = new Get();

    const [addedShops, setAddedShops] = useState({});

    const storeUtailty = new Store();

    const { setIsLoading, user } = useContext(AppContext);

    const [roasterFrom, setRoasterFrom] = useState([]);

    const [roasterTo, setRoasterTo] = useState([]);

    const navigate = useNavigate();

    const [selectedProvider, setSelectedProvider] = useState({});

    const [currentRoaster, setCurrentRoaster] = useState({});

    const [selectedProduct, setSelectedProduct] = useState({});

    const [initialValues, setInitialValues] = useState({});

    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {

        setIsLoading(true);

        if (user?.provider) {

            getUtailty.getAllRoasters()
                .then(response => setRoasters(response))
                .finally(_ => setIsLoading(false));

        } else {

            getUtailty.getRoasters()
                .then(response => setRoasters(response))
                .finally(_ => setIsLoading(false));

        }

        return () => { };
    }, []);

    useEffect(() => {

        if (user?.provider) {

            const roastersWithoutLoggedin = rosters?.filter(item => item?.id !== user?.provider?.id);

            const loggedInRoaster = rosters?.filter(item => item?.id === user?.provider?.id);

            setRoasterFrom(roastersWithoutLoggedin);

            setRoasterTo(loggedInRoaster);

            setCurrentRoaster(loggedInRoaster?.[0]);

        } else {

            setRoasterFrom(rosters);
            setRoasterTo(rosters);

        }

    }, [rosters]);

    useEffect(() => {

        if (selectedProduct?.id) {

            getUtailty.getSingleProduct(selectedProduct?.id)
                .then(response => setProductInfo(response));

        }

        return () => { };
    }, [selectedProduct]);

    useEffect(() => {

        setProductInfo({});

    }, [selectedProvider]);


    useEffect(() => {

        // Set Updated Value to Form
        formik.setValues({
            commercial_name: productInfo?.commercial_name,
            code: productInfo?.code,
            description: productInfo?.description,
            trade_name: productInfo?.trade_name,
            region: productInfo?.region,
            farm: productInfo?.farm,
            sca_score: productInfo?.sca_score,
            altitude: productInfo?.altitude,
            process: productInfo?.process,
            grades: productInfo?.grades,
            provider_id: currentRoaster?.id,
            presentations: productInfo?.presentations || [],
            origins: productInfo?.origins || [],
            coffeeShops: [],
            parent_id: selectedProvider?.id
        });

    }, [productInfo]);

    const handelSubmit = values => {

        const updatedData = { ...values, product_id: selectedProduct?.id || values?.product_id };

        // Convert Objects To Arr Of Ids
        updatedData.origins = updatedData?.origins.map(item => item?.id || item);
        updatedData.coffeeShops = updatedData?.coffeeShops.map(item => item?.id || item);

        setIsLoading(true);

        return storeUtailty.addProduct(updatedData, navigate)
            .finally(_ => setIsLoading(false))

    }

    const formik = useFormik({
        initialValues
    })

    const clickHandler = debounce((_) => handelSubmit(formik.values), 1000);

    useEffect(() => {

        currentRoaster && formik.setFieldValue('provider_id', currentRoaster?.id);

    }, [currentRoaster]);

    return {
        rosters,
        formik,
        clickHandler,
        selectedProduct,
        setSelectedProduct,
        productInfo,
        selectedProvider,
        currentRoaster,
        setCurrentRoaster,
        setSelectedProvider,
        user,
        roasterFrom,
        roasterTo,
        setAddedShops,
        addedShops
    }

}

export {
    useFormDataGetter
}