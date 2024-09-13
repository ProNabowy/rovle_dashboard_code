import { useContext, useEffect, useState } from "react"
import { Get, Update } from "../../apis/apis";
import { useFormik } from "formik";
import { AppContext } from "../../context/AppContext";

const useDataGetter = () => {

    const [data, setData] = useState({});

    const getUtailty = new Get();

    const [counteris, setCountries] = useState([]);

    const updateUtailty = new Update();

    const [classList, setClassList] = useState('');

    const { setIsLoading, user } = useContext(AppContext);

    const isProvider = user?.provider;

    const handleSubmit = values => {

        setIsLoading(true);

        if (isProvider) {

            return updateUtailty.updateRoaster(isProvider?.id ,values).finally(_ => setIsLoading(false));

        } else {

            return updateUtailty.updateProfile(values).finally(_ => setIsLoading(false));

        }
    }

    const formik = useFormik({
        initialValues: user,
        onSubmit: handleSubmit,
    });

    const locitionLogic = (response) => {
        setCountries(response);
        formik.setFieldValue('province_id', response?.[0]?.provinces?.[0]?.id);
        formik.setFieldValue('city_id', response?.[0]?.provinces?.[0]?.cities?.[0]?.id);
        return null;
    }

    useEffect(() => {

        setIsLoading(true);

        if (user?.zip) {

            getUtailty.getCitiesByZipCode(user?.zip)
                .then(response => locitionLogic(response))
                .finally(_ => setIsLoading(false));

        } else {

            getUtailty.getCountries()
                .then(response => {

                    setCountries(response)

                    formik.setFieldValue('country_id', response?.[0]?.id);
                })
                .finally(_ => setIsLoading(false));
        }

        if (isProvider) {

            formik.setValues({ ...user, provider_nif: isProvider?.nif, provider_commercial_name: isProvider?.commercial_name, provider_official_name: isProvider?.official_name });

        } else {

            formik.setValues(user);

        }

        return () => { };
    }, [user]);

    useEffect(() => {

        setData(user);
        if (user?.image) setClassList('');

        return () => { };
    }, [user]);

    const handleBlur = (e) => {

        if (e?.target?.value?.length === 5) {

            return getUtailty.getCitiesByZipCode(e?.target?.value)
                .then(response => locitionLogic(response));

        }
        return null;
    }

    return {
        formik,
        data,
        counteris,
        classList,
        setClassList,
        handleBlur,
        isProvider,
        user, 
    };

}


export {
    useDataGetter
}