
import { useContext, useEffect, useState } from "react";
import { Cities } from "../../../../apis/apis";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "../../../../hooks";
import { useLocation } from "react-router-dom";
import { debounce } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";

const useDataGetter = () => {

    const [initialValues, setInitialValues] = useState({
        name: "",
        province_id: '2',
    });

    const location = useLocation().search;

    const cityId = +location.slice(4);

    const citiesUtility = new Cities();

    const cities = useSelector(store => store.cities);

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return citiesUtility.editCity(formik.values, cityId, cities, dispatch).finally(_ => setIsLoading(false));

    }, 1000);

    useEffect(() => {

        const currentCity = cities?.filter(city => city?.id == cityId)[0];

        setInitialValues({

            name: currentCity?.name,
            province_id: currentCity?.province?.id,

        })

    }, [cities]);
    
    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);


    return { formik, clickHandler };

}

export {
    useDataGetter
};