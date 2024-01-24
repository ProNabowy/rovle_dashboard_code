import { useContext, useState } from "react";
import { Countries } from "../../../../apis/apis";
import { Formik } from "../../../../hooks";
import { debounce } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const useDataGetter = _ => {

    const [initialValues, setInitialValues] = useState({ name: "" });

    const countries = new Countries();

    const { setIsLoading } = useContext(AppContext);

    const countriesList = useSelector(store => store.countries);

    const dispatch = useDispatch();

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

    const navigate = useNavigate();

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return countries.addCountry(formik.values, dispatch, countriesList , navigate).finally(_ => setIsLoading(false));

    }, 1000);

    return { formik, clickHandler };

}

export {
    useDataGetter
}