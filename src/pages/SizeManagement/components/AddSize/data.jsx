import { useContext } from "react";
import { Store } from "../../../../apis/apis";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useFormik } from "formik";
import { debounce } from "../../../../assets/utils/utils";

const useDataGetter = () => {

    const storeUtility = new Store();

    const navigate = useNavigate();

    const { setIsLoading } = useContext(AppContext);

    const formik = useFormik({
        initialValues: {
            name: "",
            weight: "",
        }
    });

    const handelSubmit = values => {

        setIsLoading(true);

        return storeUtility.addSize(values, navigate).finally(_ => setIsLoading(false));
    };

    const clickHandler = debounce((_) => handelSubmit(formik.values), 500);

    return {
        formik,
        clickHandler,
    };

}

export {
    useDataGetter
};