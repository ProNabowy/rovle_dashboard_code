import { useFormik } from 'formik';
import { useEffect } from 'react';

const useFormData = (initialValues, handelSubmit) => {

    const formik = useFormik({
        initialValues: {
            initialValues
        },
        onSubmit: values => {
            handelSubmit(values);
        },
    });

    useEffect(() => {

        formik.setValues(initialValues);

    }, [initialValues]);

    return { formik };

}
export default function Formik() {
    return { useFormData };
}
