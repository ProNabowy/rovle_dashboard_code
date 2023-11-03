import { useEffect, useRef, useState } from "react";
import { fireSwal } from "../../../../../../assets/js/utils";
import { useSelector } from "react-redux";

const useAddPackage = (formik) => {

    const inputWeightRef = useRef();

    const inputPriceRef = useRef();

    const inputQuntiyRef = useRef();

    const roasters = useSelector(store => store?.rosters);

    const [id, setId] = useState(0);

    const [addNewPackage, setAddNewPackage] = useState({
        weight: "",
        price: "",
        id: "",
        provider_id: formik?.values?.provider_id
    });

    useEffect(() => {

        formik.setFieldValue('presentations', []);

    }, [formik?.values?.provider_id]);


    const handelAddNewPackage = () => {

        if (!inputWeightRef.current.value || !inputPriceRef.current.value) {

            fireSwal('warning', 'Please Fill The Reqriure Inputs');

        } else {

            const isDuplicate = formik.values.presentations?.some(
                pkg => parseInt(pkg.weight) === parseInt(addNewPackage.weight) && parseInt(pkg.price) === parseInt(addNewPackage.price)
            );

            if (isDuplicate) {

                fireSwal('warning', `Please Don't Add Duplicate Package`);

            } else {

                // Change new Package Id
                addNewPackage.id = id;

                formik.setFieldValue('presentations', [...formik.values.presentations, { ...addNewPackage, provider_id: formik?.values?.provider_id }]);

                // Change The id Of The Next Package
                setId(prev => prev + 1);

                // Return The Value Of The Inputs as Empty Value
                inputWeightRef.current.value = '';
                inputPriceRef.current.value = '';
                if (inputQuntiyRef.current?.value) {
                    inputQuntiyRef.current.value = '';
                }


                fireSwal('success', `Package Add Successfully`);

            }
        }
    };


    const removePackage = id => formik.values.presentations?.filter(newPackage => +newPackage.id !== +id);
    console.log(formik.values.presentations);
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