import { useEffect, useState } from "react";
import { Get } from "../../../../apis/apis"

const useDataGetter = (formik) => {

    const getUtailty = new Get();

    const [countries, setCounteris] = useState([]);

    const handleBlur = (e) => {

        if (e?.target?.value?.length === 5) {

            return getUtailty.getCitiesByZipCode(e?.target?.value)
                .then(response => setCounteris(response))

        }
        return null;
    }

    useEffect(() => {

        getUtailty.getCountries().then(response => {

            setCounteris(response);

            formik.setFieldValue('provider_country_id', response?.[0]?.id);

        });

        return () => { };
    }, []);

    return { countries, handleBlur }
}

export {
    useDataGetter
}