import { useNavigate } from "react-router-dom";
import { debounce } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import Formik from "../../../../hooks/Formik/Formik";
const { useState, useContext } = require("react");
const { useSelector, useDispatch } = require("react-redux");
const { Origins } = require("../../../../apis/apis");

const useDataGetter = () => {

    const roasters = useSelector(store => store.rosters);

    const OriginsUtailty = new Origins();

    const origins = useSelector(store => store.origins);

    const dispatch = useDispatch();

    const [initialValues, setInitialValues] = useState({ name: "", provider_id: "" });

    const navigate = useNavigate();

    const { setIsLoading } = useContext(AppContext);

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return OriginsUtailty.addOrigin(formik.values, dispatch, origins, navigate).finally(_ => setIsLoading(false));

    }, 1000);

    return { formik, roasters, clickHandler }

}

export {
    useDataGetter
}