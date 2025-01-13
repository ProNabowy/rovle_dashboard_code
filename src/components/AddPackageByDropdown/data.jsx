import { useEffect, useRef, useState } from "react";
import { Get, swal } from "../../apis/apis";


const useAddPackage = (formik, formikKey) => {

    const [selectedSize, setSelectedSize] = useState({});

    const [options, setOptions] = useState([]);

    const getUtailty = new Get();

    const inputPriceRef = useRef();

    const [addNewPackage, setAddNewPackage] = useState({
        size_id: "",
        price: "",
        id: ""
    });

    useEffect(() => {

        getUtailty.getSizes().then(response => setOptions(response));

        return () => { };
    }, []);

    const handelAddNewPackage = () => {

        if (!selectedSize?.name || !inputPriceRef.current.value) {

            swal.warning('warning', 'Por favor, completa los campos requeridos.');

        } else {

            const isDuplicate = formik.values?.[formikKey || 'sizes'].some(pkg => parseInt(pkg.size_id) === parseInt(addNewPackage.size_id));

            if (isDuplicate) {

                swal.warning('warning', `No añadas paquetes duplicados`);

            } else {

                formik.setFieldValue(formikKey || 'sizes', [...formik.values?.[formikKey || 'sizes'], { ...addNewPackage, id: addNewPackage?.size_id }]);

                // Return The Value Of The Inputs as Empty Value
                setSelectedSize({});
                inputPriceRef.current.value = '';

                swal.success('Bien', `Paquete añadido con éxito.`);

            }
        }
    };


    const removePackage = id => formik.values?.[formikKey || 'sizes']?.filter(newPackage => +newPackage.id !== +id);

    return {
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        removePackage,
        selectedSize,
        setSelectedSize,
        options
    };
}


export {
    useAddPackage
};