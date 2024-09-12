import { Store, swal } from "../../../../../apis/apis";
import { useContext, useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { AppContext } from "../../../../../context/AppContext";

const useAddProduct = () => {

    const storeUtailty = new Store();

    const { setIsLoading } = useContext(AppContext);

    const navigate = useNavigate();

    const handelSubmit = values => {

        if (!values?.presentations?.length || !values?.provider_id || !values?.origins?.length) {

            if (!values?.provider_id) {

                return swal.warning('Advertencia', 'El campo del tostador es necesario, por favor complételo.');

            }

            if (!values?.origins?.length) {

                return swal.warning('Advertencia', 'Es necesario completar el campo de Origen, por favor.');

            }

            if (!values?.presentations?.length) {

                return swal.warning('Advertencia', 'Es necesario completar el campo de presentaciones, por favor.');

            }

        } else {

            const updatedData = { ...values };

            // Convert Objects To Arr Of Ids
            updatedData.origins = updatedData?.origins?.map(item => item?.id || item);
            updatedData.coffeeShops = updatedData?.coffeeShops?.map(item => item?.id || item);

            setIsLoading(true);

            return storeUtailty.addProduct(updatedData, navigate)
                .finally(_ => setIsLoading(false));

        }
    }

    const [initialValues, setInitialValues] = useState({
        commercial_name: "",
        code: "",
        trade_name: "",
        region: "",
        farm: "",
        sca_score: 80,
        altitude: 1000,
        process: "",
        grades: "",
        provider_id: '',
        stock: "",
        description: "",
        presentations: [],
        origins: [],
        coffeeShops: []
    })

    const formik = useFormik({
        initialValues: { ...initialValues },
        onSubmit: handelSubmit
    });

    useEffect(() => {

        formik.setValues(initialValues);

        return () => { };
    }, []);

    return { formik }
}

export {
    useAddProduct
}