import { useLocation } from "react-router-dom";
import { Products } from "../../../../apis/apis";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Formik from "../../../../hooks/Formik/Formik";

const useEditProduct = () => {

    const productUtailty = new Products();

    const rosters = useSelector(store => store?.rosters);

    const location = useLocation().search;

    const productId = location.slice(4);

    const [initialValues, setInitialValues] = useState({});

    const { useFormData } = Formik();

    const handelSubmit = values => {

        return productUtailty.editProducts(values, productId);

    }
    const { formik } = useFormData(initialValues, handelSubmit);

    const [product, setProduct] = useState();



    useEffect(() => {

        productUtailty.getSingleProducts(setProduct, productId).then(data => {

            setInitialValues({
                commercial_name: data?.commercial_name,
                code: data?.code,
                trade_name: data?.trade_name,
                region: data?.region,
                farm: data?.farm,
                sca_score: data?.sca_score,
                altitude: data?.altitude,
                process: data?.process,
                grades: data?.grades,
                provider_id: data?.provider_id,
                stock: data?.stock,
                description: data?.description,
                presentations: data?.presentations,
                origins: data?.origins,
                coffeeShops: data?.coffee_shops
            });

        })

    }, []);


    const inputsData = [
        { names: ['Product Name', 'Code'], placeholders: ['Enter Name', 'Enter Code'], values: [formik?.values?.trade_name, formik.values?.code], nameAttr: ['trade_name', 'code'], disableChange: formik.handleChange, key: ['trade_name', 'code'] },
        { names: ['Nombre Comercial', 'Region'], placeholders: ['Enter Nombre Comercial', 'Enter Region'], key: ['commercial_name', 'region'], values: [formik?.values?.commercial_name, formik.values?.region], nameAttr: ['commercial_name', 'region'], disableChange: formik.handleChange, },
        { names: ['Finca', 'Puntunaction Sca s'], placeholders: ['Enter Finca', 'Enter Puntunaction Sca s'], key: ['farm', 'sca_score'], values: [formik?.values?.farm, formik.values?.sca_score], nameAttr: ['farm', 'sca_score'], disableChange: formik.handleChange, },
        { names: ['Altitude', 'Process'], placeholders: ['Enter Altitude', 'Enter Process'], key: ['altitude', 'process'], values: [formik?.values?.altitude, formik.values?.process], nameAttr: ['altitude', 'process'], disableChange: formik.handleChange, },
    ]

    return { formik, rosters, product, inputsData }

}

export {
    useEditProduct
}