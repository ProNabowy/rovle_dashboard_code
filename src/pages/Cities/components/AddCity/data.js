
import { useContext, useState } from "react";
import { Cities } from "../../../../apis/apis";
import { Formik } from "../../../../hooks";
import { debounce } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";

const useDataGetter = () => {

    const [initialValues, setInitialValues] = useState({
        name: "",
        province_id: '',
    });

    const cities = useSelector(store => store.cities);

    const { setIsLoading } = useContext(AppContext);

    const citiesUtility = new Cities();

    const dispatch = useDispatch();

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return citiesUtility.addCity(formik.values, dispatch, cities).finally(_ => setIsLoading(false));

    }, 1000);

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

    return { formik, clickHandler };

}

export {
    useDataGetter
};