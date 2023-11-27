import { useContext, useEffect, useState } from "react"
import { Profile } from "../../apis/apis";
import { Formik } from "../../hooks";
import { debounce } from "../../assets/js/utils";
import { AppContext } from "../../components/AppContext/AppContext";

const useDataGetter = () => {

    const [data, setData] = useState({});

    const profileUtaitly = new Profile();

    const { setIsLoading } = useContext(AppContext);

    const [initialValues, setInitialValues] = useState({

    });

    const { useFormData } = Formik();

    const { formik } = useFormData(initialValues, null);

    useEffect(() => {

        profileUtaitly.fetchProfile(setData).then(data => {

            setInitialValues({
                name: data?.name,
                email: data?.email,
                address: data?.address,
                phone: data?.phone,
                zip: data?.zip,
                card_id: data?.card_id,
                country_id: data?.country_id,
                province_id: data?.province_id,
                city_id: data?.city_id,
                roles: data?.roles
            });

        })

    }, []);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return profileUtaitly.editProfile(formik.values).finally(_ => setIsLoading(false));

    }, 1000);

    return { formik, clickHandler, data };

}


export {
    useDataGetter
}