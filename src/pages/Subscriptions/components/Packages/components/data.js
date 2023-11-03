import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { fireSwal } from "../../../../../assets/js/utils";

const useAddPackage = (formik) => {

    const [selectedProduct, setSelectedProduct] = useState({});

    const inputWeightRef = useRef();

    const roasters = useSelector(store => store?.rosters);

    const [id, setId] = useState(0);

    const [addNewPackage, setAddNewPackage] = useState({
        weight: "",
        prdouct_id: "",
        id: ""
    });


    const handelAddNewPackage = () => {

        if (!selectedProduct?.id || !inputWeightRef.current.value) {

            fireSwal('warning', 'Please Fill The Reqriure Inputs');

        } else {

            const isDuplicate = formik.values.presentations?.some(
                pkg => parseInt(pkg.weight) === parseInt(addNewPackage.weight) && parseInt(pkg.prdouct_id) === parseInt(addNewPackage.prdouct_id)
            );

            if (isDuplicate) {

                fireSwal('warning', `Please Don't Add Duplicate Package`);

            } else {

                // Change new Package Id
                addNewPackage.id = id;

                formik.values = [...formik.values.presentations, { ...addNewPackage, provider_id: formik?.values?.provider_id }];

                // Change The id Of The Next Package
                setId(prev => prev + 1);

                // Return The Value Of The Inputs as Empty Value
                inputWeightRef.current.value = '';
                setSelectedProduct({});

                fireSwal('success', `Package Add Successfully`);

            }
        }
    };


    const removePackage = id => formik.values.presentations?.filter(newPackage => +newPackage.id !== +id);

    return {
        setAddNewPackage,
        inputWeightRef,
        handelAddNewPackage,
        removePackage,
        selectedProduct,
        roasters
    };
}


export {
    useAddPackage
};