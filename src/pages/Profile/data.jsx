import { useContext, useEffect, useState } from "react"
import { Get, Update } from "../../apis/apis";
import { debounce } from "../../assets/utils/utils";
import { useFormik } from "formik";
import { AppContext } from "../../context/AppContext";

const useDataGetter = () => {

    const [data, setData] = useState({});

    const getUtailty = new Get();

    const [counteris, setCountries] = useState([]);

    const updateUtailty = new Update();

    const { setIsLoading } = useContext(AppContext);

    const formik = useFormik({
        initialValues: {}
    });

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getProfile().then(data => {

            setData(data);

            formik.setValues({
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
            .then(_ => {

                return getUtailty.getCountries().then(response => setCountries(response));

            })
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    const clickHandler = debounce((_) => {

        setIsLoading(true);

        return updateUtailty.updateProfile(formik.values).finally(_ => setIsLoading(false));
    }, 1000);

    return {
        formik,
        clickHandler,
        data,
        counteris,
    };

}


export {
    useDataGetter
}