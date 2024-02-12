import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Get, Update } from "../../../../apis/apis";
import { useFormik } from "formik";
import { AppContext } from "../../../../context/AppContext";
import { debounce } from "../../../../assets/utils/utils";


const useDataGetter = _ => {

    const getUtailty = new Get();

    const updateUtailty = new Update();

    const { setIsLoading } = useContext(AppContext);

    const location = useLocation().search;

    const roasterId = location.slice(4);

    const formik = useFormik({
        initialValues: {}
    })

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getSingleRoaster(roasterId)
            .then(currentRoaster => {

                formik.setValues({
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

            }).finally(_ => setIsLoading(false));

        return () => { };
    }, []);


    const handelSubmit = values => {

        setIsLoading(true);

        return updateUtailty.updateRoaster(roasterId, values).finally(_ => setIsLoading(false))
    };

    const clickHandler = debounce((_) => handelSubmit(formik.values), 1000);

    return { formik, clickHandler }

}
export {

    useDataGetter

}