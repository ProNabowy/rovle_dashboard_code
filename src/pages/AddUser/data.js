import { useEffect, useState } from "react";
import { handelChange } from "../../assets/js/utils";
import { Users } from "../../apis/apis";


const useHandleAddUserLogic = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);

    const [data, setData] = useState({
        user_name: "",
        user_card_id: "",
        user_password: "",
        user_password_confirmation: "",
        user_email: "",
        user_address: "",
        user_phone: "",
        user_zip: "",
        user_country_id: "",
        user_province_id: "",
        user_city_id: "",
    });

    const handelSubmit = e => {

        e.preventDefault();

        const userUtailty = new Users();

        userUtailty.addUser(data);

    }

    useEffect(() => {

        handelChange(setData, 'user_country_id', selectedCountry?.id);

    }, [selectedCountry]);

    useEffect(() => {

        handelChange(setData, 'user_province_id', selectedProvince?.id);

    }, [selectedProvince]);

    useEffect(() => {

        handelChange(setData, 'user_city_id', selectedCity?.id);

    }, [selectedCity]);

    return { data, setData, handelSubmit, selectedCountry, setSelectedCountry, selectedCity, setSelectedCity, selectedProvince, setSelectedProvince }
}

export {
    useHandleAddUserLogic
}