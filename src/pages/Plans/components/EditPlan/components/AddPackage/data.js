import { useEffect, useRef, useState } from "react";
import { fireSwal } from "../../../../../../assets/js/utils";
import { Size } from "../../../../../../apis/apis";

const useAddPackage = (formik) => {

    const [selectedSize, setSelectedSize] = useState({});

    const inputPriceRef = useRef();

    const [sizes, setSizes] = useState([]);

    const sizeUtality = new Size();

    const [addNewPackage, setAddNewPackage] = useState({
        size_id: "",
        price: "",
        id: ""
    });

    useEffect(() => {

        sizeUtality.fetchSizes(setSizes);

    }, []);

    const handelAddNewPackage = () => {

        if (!selectedSize?.name || !inputPriceRef.current.value) {

            fireSwal('warning', 'Please Fill The Reqriure Inputs');

        } else {

            const isDuplicate = formik.values?.sizes.some(pkg => parseInt(pkg.size_id) === parseInt(addNewPackage.size_id));

            if (isDuplicate) {

                fireSwal('warning', `Please Don't Add Duplicate Package`);

            } else {

                formik.setFieldValue('sizes', [...formik.values.sizes, { ...addNewPackage, id: addNewPackage?.size_id }]);

                // Return The Value Of The Inputs as Empty Value
                setSelectedSize({});
                inputPriceRef.current.value = '';

                fireSwal('success', `Package Add Successfully`);

            }
        }
    };


    const removePackage = id => formik.values?.sizes?.filter(newPackage => +newPackage.id !== +id);

    return {
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        removePackage,
        selectedSize,
        setSelectedSize,
        sizes,
    };
}


export {
    useAddPackage
};