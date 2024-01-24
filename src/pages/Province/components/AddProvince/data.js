import { useContext, useState } from "react";
import { Province } from "../../../../apis/apis";
import { Formik } from "../../../../hooks";
import { debounce } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const useDataGetter = () => {
    const provinceUtility = new Province();

    const province = useSelector(store => store.province);

    const dispatch = useDispatch();

    const [initialValues, setInitialValues] = useState({
        name: "",
        country_id: ""
    });

    const navigate = useNavigate();

    const { setIsLoading } = useContext(AppContext);

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return provinceUtility.addProvinces(formik.values, dispatch, province , navigate).finally(_ => setIsLoading(false));

    }, 1000);

    return { formik, clickHandler };

};

export {
    useDataGetter
}