import { useEffect, useRef, useState } from "react";
import { fireSwal } from "../../../../../../assets/js/utils";
import { Size } from "../../../../../../apis/apis";

const useAddPackage = (formik) => {

    const [selectedSize, setSelectedSize] = useState({});

    const inputPriceRef = useRef();

    const [packages, setPackage] = useState([]);

    const [sizes, setSizes] = useState([]);

    const sizeUtality = new Size();

    const [id, setId] = useState(0);

    const [addNewPackage, setAddNewPackage] = useState({
        size_id: "",
        price: "",
        id: ""
    });

    useEffect(() => {

        sizeUtality.fetchSizes(setSizes);

    }, []);

    useEffect(() => {

        formik.setFieldValue('sizes', packages);

    }, [packages]);

    const handelAddNewPackage = () => {

        if (!selectedSize?.name || !inputPriceRef.current.value) {

            fireSwal('warning', 'Please Fill The Reqriure Inputs');

        } else {

            const isDuplicate = packages.some(pkg => parseInt(pkg.size_id) === parseInt(addNewPackage.size_id));

            if (isDuplicate) {

                fireSwal('warning', `Please Don't Add Duplicate Package`);

            } else {

                // Change new Package Id
                addNewPackage.id = id;

                setPackage(prev => [...prev, { ...addNewPackage }]);

                // Change The id Of The Next Package
                setId(prev => prev + 1);

                // Return The Value Of The Inputs as Empty Value
                setSelectedSize({});
                inputPriceRef.current.value = '';

                fireSwal('success', `Package Add Successfully`);

            }
        }
    };


    const removePackage = id => packages?.filter(newPackage => +newPackage.id !== +id);

    return {
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        packages,
        setPackage,
        removePackage,
        selectedSize,
        setSelectedSize,
        sizes,
    };
}


export {
    useAddPackage
};