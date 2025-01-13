import { useContext, useEffect, useState } from "react";
import { Get } from "../../../../apis/apis"
import { AppContext } from "../../../../context/AppContext";

const useDataGetter = (formik) => {

    const getUtailty = new Get();

    const { setIsLoading } = useContext(AppContext);

    const [countries, setCounteris] = useState([]);

    const locitionLogic = (response) => {
        setCounteris(response);
        formik.setFieldValue('provider_country_id', response?.[0]?.id);
        formik.setFieldValue('provider_province_id', response?.[0]?.provinces?.[0]?.id);
        formik.setFieldValue('provider_city_id', response?.[0]?.provinces?.[0]?.cities?.[0]?.id);
        return null;
    }

    const handleBlur = (e) => {

        if (e?.target?.value?.length === 5) {

            return getUtailty.getCitiesByZipCode(e?.target?.value)
                .then(response => {
                    setCounteris(response);
                    formik.setFieldValue('provider_province_id', response?.[0]?.provinces?.[0]?.id);
                    formik.setFieldValue('provider_city_id', response?.[0]?.provinces?.[0]?.cities?.[0]?.id);
                })

        }
        return null;
    }

    useEffect(() => {

        setIsLoading(true);

        if (formik.values?.provider_zip) {
            getUtailty.getCitiesByZipCode(formik.values?.provider_zip)
                .then(response => locitionLogic(response))
                .finally(_ => setIsLoading(false));
        } else {

            getUtailty.getCountries().then(response => {

                setCounteris(response);

                formik.setFieldValue('provider_country_id', response?.[0]?.id);

            }).finally(_ => setIsLoading(false));
        }

        return () => { };
    }, [formik.values.response_done]);

    return { countries, handleBlur }
}

export {
    useDataGetter
}