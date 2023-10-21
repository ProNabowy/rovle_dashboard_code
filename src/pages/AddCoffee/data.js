import { useEffect, useState } from "react";
import { CoffeeShops } from "../../apis/apis";

const useDataGetter = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedRoaster, setSelectedRoaster] = useState(null);

    const [data, setData] = useState({
        name: "",
        post_code: "",
        address: "",
        latitude: "",
        longitude: "",
        provider_id: "",
        country_id: "",
        province_id: "",
        city_id: ""
    });

    useEffect(() => {

        setData(perv => ({ ...perv, country_id: selectedCountry?.id }));

    }, [selectedCountry]);

    useEffect(() => {

        setData(perv => ({ ...perv, city_id: selectedCity?.id }));

    }, [selectedCity]);

    useEffect(() => {

        setData(perv => ({ ...perv, province_id: selectedProvince?.id }));

    }, [selectedProvince]);

    useEffect(() => {

        setData(perv => ({ ...perv, provider_id: selectedRoaster?.id }));

    }, [selectedRoaster]);


    return { selectedCountry, setSelectedCountry, selectedCity, setSelectedCity, selectedProvince, setSelectedProvince, selectedRoaster, setSelectedRoaster, data, setData }

}

const handelSubmit = data => {

    const coffeeUtailty = new CoffeeShops();

    return coffeeUtailty.addCoffee(data);

}

export {
    useDataGetter,
    handelSubmit
}