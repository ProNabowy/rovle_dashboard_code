import { Products } from "../../../../apis/apis";
import { useSelector } from "react-redux";
import { useState } from "react";
import Formik from "../../../../hooks/Formik/Formik";

const useAddProduct = () => {

    const productUtailty = new Products();

    const rosters = useSelector(store => store?.rosters);

    const [initialValues, setInitialValues] = useState({
        commercial_name: "",
        code: "",
        trade_name: "",
        region: "",
        farm: "",
        sca_score: "",
        altitude: "",
        process: "",
        grades: "",
        provider_id: "",
        stock: "",
        description: "",
        presentations: [],
        origins: [],
        coffeeShops: []
    });

    const { useFormData } = Formik();

    const handelSubmit = values => {

        return productUtailty.addProduct(values);

    }

    const { formik } = useFormData(initialValues, handelSubmit);

    const inputsData = [
        { names: ['Product Name', 'Code'], placeholders: ['Enter Name', 'Enter Code'], values: [formik?.values?.trade_name, formik.values?.code], nameAttr: ['trade_name', 'code'], disableChange: formik.handleChange, key: ['trade_name', 'code'] },
        { names: ['Nombre Comercial', 'Region'], placeholders: ['Enter Nombre Comercial', 'Enter Region'], key: ['commercial_name', 'region'], values: [formik?.values?.commercial_name, formik.values?.region], nameAttr: ['commercial_name', 'region'], disableChange: formik.handleChange, },
        { names: ['Finca', 'Puntunaction Sca s'], placeholders: ['Enter Finca', 'Enter Puntunaction Sca s'], key: ['farm', 'sca_score'], values: [formik?.values?.farm, formik.values?.sca_score], nameAttr: ['farm', 'sca_score'], disableChange: formik.handleChange, },
        { names: ['Altitude', 'Process'], placeholders: ['Enter Altitude', 'Enter Process'], key: ['altitude', 'process'], values: [formik?.values?.altitude, formik.values?.process], nameAttr: ['altitude', 'process'], disableChange: formik.handleChange, },
    ]

    return { formik, rosters, inputsData }

}

export {
    useAddProduct
}