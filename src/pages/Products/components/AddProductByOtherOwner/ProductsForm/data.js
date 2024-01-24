import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../../../../../assets/js/utils";
import { AppContext } from "../../../../../components/AppContext/AppContext";
import Formik from "../../../../../hooks/Formik/Formik";
import { Products } from "../../../../../apis/apis";
import { useNavigate } from "react-router-dom";

const useFormDataGetter = () => {

    let rosters = useSelector(store => store.rosters);

    const user = JSON.parse(localStorage.getItem('user'));

    const [roasterFrom, setRoasterFrom] = useState([]);
    const [roasterTo, setRoasterTo] = useState([]);

    const productUtailty = new Products();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [selectedProvider, setSelectedProvider] = useState({});

    const [currentRoaster, setCurrentRoaster] = useState({});

    const { setIsLoading } = useContext(AppContext);

    const [selectedProduct, setSelectedProduct] = useState({});

    const [initialValues, setInitialValues] = useState({});

    const [productInfo, setProductInfo] = useState({});

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

        selectedProduct?.id && productUtailty.getSingleProducts(setProductInfo, selectedProduct?.id);

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

    const { useFormData } = Formik();

    const handelSubmit = values => {

        const updatedData = { ...values };

        // Convert Objects To Arr Of Ids
        updatedData.origins = updatedData?.origins.map(item => item?.id || item);
        updatedData.coffeeShops = updatedData?.coffeeShops.map(item => item?.id || item);

        setIsLoading(true);

        return productUtailty.addProduct(updatedData, dispatch, selectedProvider?.products, navigate).finally(_ => setIsLoading(false));

    }
    const { formik } = useFormData(initialValues, null);

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
        roasterTo
    }

}

export {
    useFormDataGetter
}