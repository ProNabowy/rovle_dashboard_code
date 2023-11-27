import { useRef, useState } from "react";
import SwalControlar from "../../assets/js/utils";


const useAddPackage = (formik) => {

    const [selectedSize, setSelectedSize] = useState({});

    const inputPriceRef = useRef();

    const Swal = new SwalControlar();

    const [addNewPackage, setAddNewPackage] = useState({
        size_id: "",
        price: "",
        id: ""
    });


    const handelAddNewPackage = () => {

        if (!selectedSize?.name || !inputPriceRef.current.value) {

            Swal.warning('warning', 'Please Fill The Reqriure Inputs');

        } else {

            const isDuplicate = formik.values.sizes.some(pkg => parseInt(pkg.size_id) === parseInt(addNewPackage.size_id));

            if (isDuplicate) {

                Swal.warning('warning', `Please Don't Add Duplicate Package`);

            } else {

                formik.setFieldValue('sizes', [...formik.values.sizes, { ...addNewPackage, id: addNewPackage?.size_id }]);

                // Return The Value Of The Inputs as Empty Value
                setSelectedSize({});
                inputPriceRef.current.value = '';

                Swal.success('success', `Package Add Successfully`);

            }
        }
    };


    const removePackage = id => formik.values.sizes?.filter(newPackage => +newPackage.id !== +id);

    return {
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        removePackage,
        selectedSize,
        setSelectedSize,
    };
}


export {
    useAddPackage
};