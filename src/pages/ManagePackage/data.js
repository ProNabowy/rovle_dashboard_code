import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { Subscriptions } from "../../apis/apis";
import SwalControlar, { debounce } from "../../assets/js/utils";
import { Formik } from "../../hooks";
import { AppContext } from "../../components/AppContext/AppContext";
import { Swal } from "../../apis/data";


const useDataGetter = (maxTotalSize) => {

    const location = useLocation().search;

    const PackageId = location.slice(4);

    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        presentations: []
    });

    const [subscriptionItem, setSubscription] = useState({});

    const { setIsLoading } = useContext(AppContext);

    const subscriptionsUtailty = new Subscriptions();

    useEffect(() => {

        setIsLoading(true);

        subscriptionsUtailty.getSingleSubscription(PackageId, setSubscription).finally(_ => setIsLoading(false));

    }, []);

    const handleSubmit = (values, totalWeightOfPersentations) => {

        if (parseInt(totalWeightOfPersentations) !== parseInt(subscriptionItem?.total)) {

            return Swal.warning('warning', 'the Packages Must be the same of the total subscription Packages');

        } else {

            setIsLoading(true);

            return subscriptionsUtailty.acceptSubscription(PackageId, values, navigate).finally(_ => setIsLoading(false));

        }

    }


    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

    const totalWeightOfPersentations = formik.values?.presentations?.map(item => item?.weight * item?.units)?.reduce((ele, curr) => ele + curr, 0);

    const clickHandler = debounce(() => handleSubmit(formik.values?.presentations, totalWeightOfPersentations), 1000);


    useEffect(() => {

        if (subscriptionItem) {

            formik.setFieldValue('presentations', subscriptionItem?.presentations);

        }

    }, [subscriptionItem]);

    return {
        formik,
        subscriptionItem,
        totalWeightOfPersentations,
        clickHandler,
    };
}

const useAddPackage = (formik, maxTotalSize, totalWeightOfPersentations) => {

    const [selectedProduct, setSelectProduct] = useState({});

    const [selectedWeight, setSelectWeight] = useState({});

    const inputWeightRef = useRef();

    const [id, setId] = useState(1);

    const Swal = new SwalControlar();

    const [addNewPackage, setAddNewPackage] = useState({
        weight: "",
        id: "",
        units: 0,
        commercial_name: ""
    });

    const getTotalWeights = formik.values.packages?.reduce((ele, current) => {

        return { weight: ele.weight + current.weight };

    }, { weight: 0 });


    const handelAddNewPackage = () => {

        if (!selectedProduct?.commercial_name || !inputWeightRef.current?.value || !addNewPackage.weight) {

            Swal.warning('warning', 'Please Fill The Reqriure Inputs');

        } else {

            const totalOfNewPackage = parseInt(addNewPackage.units) * parseInt(addNewPackage.weight);

            if ((totalOfNewPackage + totalWeightOfPersentations) <= maxTotalSize) {

                formik.setFieldValue('presentations', [...formik.values?.presentations, { ...addNewPackage, id: id }]);

                // Increes id 
                setId(perv => perv + 1);

                inputWeightRef.current.value = '';

                Swal.success('success', `Package Add Successfully`);

            } else {

                Swal.warning('warning', 'Packages more than the total size of the subscriptions');

            }


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
        getTotalWeights,
        selectedWeight,
        setSelectWeight
    };
}

export {
    useDataGetter,
    useAddPackage
}