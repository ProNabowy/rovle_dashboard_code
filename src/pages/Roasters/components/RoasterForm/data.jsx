import { useContext, useEffect, useState } from "react";
import { Get } from "../../../../apis/apis"
import { AppContext } from "../../../../context/AppContext";

const useDataGetter = (formik) => {

    const getUtailty = new Get();

    const { setIsLoading } = useContext(AppContext);

    const [countries, setCounteris] = useState([]);

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

        getUtailty.getCountries().then(response => {

            setCounteris(response);

            formik.setFieldValue('provider_country_id', response?.[0]?.id);

        }).finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    return { countries, handleBlur }
}

export {
    useDataGetter
}