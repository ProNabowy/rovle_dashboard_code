import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Province } from "../../../../apis/apis";
import { Formik } from "../../../../hooks";
import { useLocation } from "react-router-dom";
import { debounce, getSelectedOption } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";


const useDataGetter = () => {

    const province = useSelector(store => store.province);

    const dispatch = useDispatch();

    const provinceUtility = new Province();

    const location = useLocation().search;

    const provinceId = +location.slice(4);

    const { setIsLoading } = useContext(AppContext);

    const [initialValues, setInitialValues] = useState({
        name: "",
        country_id: ""
    });

    useEffect(() => {

        setInitialValues(getSelectedOption(province, 'id', provinceId));

    }, [province]);

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return provinceUtility.editProvinces(formik.values, provinceId, dispatch, province).finally(_ => setIsLoading(false));

    }, 1000);

    return { formik, clickHandler };

};

export {
    useDataGetter
}