import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Rosters } from "../../apis/apis";

const useDataGetter = _ => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const store = useSelector(store => store);
    const [data, setData] = useState({
        user_name: "",
        user_email: "",
        user_password: "",
        user_password_confirmation: "",
        provider_nif: "",
        provider_commercial_name: "",
        provider_official_name: "",
        provider_address: "",
        provider_zip: "",
        provider_manage_stock: "",
        provider_phone: "",
        provider_country_id: "",
        provider_province_id: "",
        provider_city_id: ""
    });

    useEffect(() => {

        setData(perv => ({ ...perv, provider_country_id: selectedCountry?.id }));

    }, [selectedCountry]);

    useEffect(() => {

        setData(perv => ({ ...perv, provider_city_id: selectedCity?.id }));

    }, [selectedCity]);

    useEffect(() => {

        setData(perv => ({ ...perv, provider_province_id: selectedProvince?.id }));

    }, [selectedProvince]);

    return { selectedCountry, setSelectedCountry, selectedCity, setSelectedCity, selectedProvince, setSelectedProvince, store, data, setData }
}

const handelSubmit = data => {

    const roasterUtailty = new Rosters();

    return roasterUtailty.addRoaster(data);

}

export {

    useDataGetter,
    handelSubmit

}