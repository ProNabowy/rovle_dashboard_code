import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Size } from "../../../../apis/apis";
import { debounce, getSelectedOption } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import Formik from "../../../../hooks/Formik/Formik";

const useDataGetter = () => {

    const roasters = useSelector(store => store.rosters);

    const sizeUtility = new Size();

    const dispatch = useDispatch();

    const sizes = useSelector(store => store.sizes);

    const [initialValues, setInitialValues] = useState({
        name: "",
        weight: "",
        provider_id: '',
    });

    const { setIsLoading } = useContext(AppContext);

    const { useFormData } = Formik();

    const handelSubmit = values => {

        setIsLoading(true);


        return sizeUtility.addSize(values, dispatch, sizes).finally(_ => {

            setIsLoading(false);

            sessionStorage.setItem('selected-roaster', JSON.stringify(getSelectedOption(roasters, 'id', values?.provider_id)));

        });

    };

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => handelSubmit(formik.values), 1000);

    useEffect(() => {

        formik.values?.provider_id && sessionStorage.setItem('selected-roaster', JSON.stringify(getSelectedOption(roasters, 'id', formik.values?.provider_id)))

    }, [formik.values?.provider_id]);

    return { formik, roasters, clickHandler };

}

export {
    useDataGetter
};