import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Size } from "../../../../apis/apis";
import { getSelectedOption } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import Formik from "../../../../hooks/Formik/Formik";

const useDataGetter = () => {

    const roasters = useSelector(store => store.rosters);

    const sizeUtility = new Size();

    const [initialValues, setInitialValues] = useState({
        name: "",
        weight: "",
        provider_id: '',
    });

    const { setIsLoading } = useContext(AppContext);

    const { useFormData } = Formik();

    const handelSubmit = values => {

        setIsLoading(true);


        return sizeUtility.addSize(values).finally(_ => setIsLoading(false));

    };

    const { formik } = useFormData(initialValues, handelSubmit);

    useEffect(() => {

        formik.values?.provider_id && sessionStorage.setItem('selected-roaster', JSON.stringify(getSelectedOption(roasters, 'id', formik.values?.provider_id)))

    }, [formik.values?.provider_id]);

    return { formik, roasters };

}

export {
    useDataGetter
};