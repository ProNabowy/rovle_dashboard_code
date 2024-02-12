import { useRef, useState } from "react";
import { swal } from "../../apis/apis";
import { getSelectedOption } from "../../assets/utils/utils";

const useAddPackage = (formik, roasters, provider_id) => {

    const inputWeightRef = useRef();

    const inputPriceRef = useRef();

    const inputQuntiyRef = useRef();

    const [id, setId] = useState(0);

    const currentProvider = getSelectedOption(roasters, 'id', provider_id);

    const [addNewPackage, setAddNewPackage] = useState({
        weight: "",
        price: "",
        id: "",
        provider_id: provider_id
    });

    const handelAddNewPackage = () => {

        if (!inputWeightRef.current.value || !inputPriceRef.current.value) {

            swal.warning('warning', 'Please Fill The Reqriure Inputs');

        } else {

            const isDuplicate = formik?.values?.presentations?.some(
                pkg => parseInt(pkg.weight) === parseInt(addNewPackage.weight) && parseInt(pkg.price) === parseInt(addNewPackage.price)
            );

            if (isDuplicate) {

                swal.warning('warning', `Please Don't Add Duplicate Package`);

            } else {

                if (currentProvider?.manage_stock && !inputQuntiyRef.current?.value) {

                    swal.warning('warning', `Please fill out Quantity Field`);

                } else {
                    // Change new Package Id
                    addNewPackage.id = id;

                    formik.setFieldValue('presentations', [...formik?.values?.presentations, { ...addNewPackage, provider_id: provider_id }]);

                    // Change The id Of The Next Package
                    setId(prev => prev + 1);

                    // Return The Value Of The Inputs as Empty Value
                    inputWeightRef.current.value = '';
                    inputPriceRef.current.value = '';
                    if (inputQuntiyRef.current?.value) {
                        inputQuntiyRef.current.value = '';
                    }

                    swal.success('success', `Package Add Successfully`);
                }
            }
        }
    };


    const removePackage = id => formik?.values?.presentations?.filter(newPackage => +newPackage.id !== +id);

    return {
        inputWeightRef,
        inputQuntiyRef,
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        removePackage,
        roasters
    };
}


export {
    useAddPackage
};