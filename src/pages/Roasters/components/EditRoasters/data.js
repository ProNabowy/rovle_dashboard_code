import { useContext, useEffect, useState } from "react";
import { debounce, getSelectedOption } from "../../../../assets/js/utils";
import { AppContext } from "../../../../components/AppContext/AppContext";
import Formik from "../../../../hooks/Formik/Formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Rosters } from "../../../../apis/apis";


const useDataGetter = _ => {

    const roasterUtailty = new Rosters();

    const store = useSelector(store => store);

    const location = useLocation().search;

    const dispatch = useDispatch();

    const roasterId = location.slice(4);

    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {

        const currentRoaster = getSelectedOption(store?.rosters, 'id', roasterId);

        setInitialValues({
            user_name: currentRoaster?.user?.name,
            user_email: currentRoaster?.user?.email,
            provider_nif: currentRoaster?.nif,
            provider_commercial_name: currentRoaster?.commercial_name,
            provider_official_name: currentRoaster?.official_name,
            provider_address: currentRoaster?.address,
            provider_zip: currentRoaster?.zip,
            provider_manage_stock: currentRoaster?.manage_stock,
            provider_phone: currentRoaster?.phone,
            provider_country_id: currentRoaster?.country?.id,
            provider_province_id: currentRoaster?.province?.id,
            provider_city_id: currentRoaster?.city?.id,
        })

    }, [store.rosters]);

    const { useFormData } = Formik();

    const { setIsLoading } = useContext(AppContext);

    const handelSubmit = values => {

        setIsLoading(true);

        roasterUtailty.updateRoaster(values, roasterId, dispatch, store.rosters).finally(_ => setIsLoading(false))

    };

    const { formik } = useFormData(initialValues, null);

    const clickHandler = debounce((_) => handelSubmit(formik.values), 1000);

    return { formik, clickHandler }

}
export {

    useDataGetter

}