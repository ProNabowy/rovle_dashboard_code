import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { Get, Store, swal } from "../../apis/apis";
import { debounce } from "../../assets/utils/utils";
import { AppContext } from "../../context/AppContext";
import { useFormik } from "formik";


const useDataGetter = () => {

    const location = useLocation().search;

    const PackageId = location.slice(4);

    const [products, setProducts] = useState([]);

    const getUtailty = new Get();

    const storeUtailty = new Store();

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { presentations: [] },
    })

    useEffect(() => {

        formik.setValues({ presentations: [] });
        
        return () => { }
    }, []);
    
    const [subscriptionItem, setSubscription] = useState({});

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getSingleSubscription(PackageId).then(response => setSubscription(response))
            .then(_ => getUtailty.getProducts().then(response => setProducts(response)))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);


    const handleSubmit = (values, totalWeightOfPersentations) => {

        if (parseInt(totalWeightOfPersentations) < parseInt(subscriptionItem?.total)) {

            return swal.warning('warning', 'the Packages Must be the same of the total or more than the total of  subscription Packages');

        } else {

            setIsLoading(true);

            return storeUtailty.acceptSubscription(PackageId, values, navigate)
                .finally(_ => setIsLoading(false));
        }

    }

    const totalWeightOfPersentations = formik.values?.presentations?.map(item => item?.weight * item?.units)?.reduce((ele, curr) => ele + curr, 0);

    const clickHandler = debounce(() => handleSubmit(formik.values?.presentations, totalWeightOfPersentations), 1000);


    useEffect(() => {

        if (subscriptionItem) {

            const updateSubsciption = subscriptionItem?.presentations?.map((item) => {
                return { ...item, units: parseInt(item?.quantity) }
            })

            formik.setFieldValue('presentations', updateSubsciption);

        }

        return () => { };
    }, [subscriptionItem]);

    return {
        formik,
        subscriptionItem,
        totalWeightOfPersentations,
        clickHandler,
        products
    };
}

const useAddPackage = (formik, maxTotalSize, totalWeightOfPersentations) => {

    const [selectedProduct, setSelectProduct] = useState({});

    const [selectedWeight, setSelectWeight] = useState({});

    const inputWeightRef = useRef();

    const [id, setId] = useState(1);

    const [addNewPackage, setAddNewPackage] = useState({
        weight: "",
        id: "",
        units: 0,
        commercial_name: ""
    });

    const handelAddNewPackage = () => {

        if (!selectedProduct?.commercial_name || !inputWeightRef.current?.value || !addNewPackage.weight) {

            swal.warning('warning', 'Please Fill The Reqriure Inputs');

        } else {

            formik.setFieldValue('presentations', [...formik.values?.presentations, { ...addNewPackage, id: id }]);

            // Increes id 
            setId(perv => perv + 1);

            inputWeightRef.current.value = '';

            swal.success('success', `Package Add Successfully`);

        }

    };

    const removePackage = id => formik.values?.presentations?.filter(newPackage => +newPackage.id !== +id);

    return {
        setAddNewPackage,
        inputWeightRef,
        handelAddNewPackage,
        removePackage,
        selectedProduct,
        setSelectProduct,
        selectedWeight,
        setSelectWeight
    };
}

export {
    useDataGetter,
    useAddPackage
}