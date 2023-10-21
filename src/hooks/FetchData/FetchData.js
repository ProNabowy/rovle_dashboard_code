import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCountries } from "../../store/reduces/countries";
import { Cities, Countries, Province, Roles, Rosters } from "../../apis/apis";
import { setProvince } from "../../store/reduces/province";
import { setRosters } from "../../store/reduces/rosters";
import { setCities } from "../../store/reduces/cities";
import { setRoles } from "../../store/reduces/roles";

const useFetchCountries = (isLoging) => {

    const countriesUtility = new Countries();

    const provinceUtility = new Province();

    const rostersUtility = new Rosters();

    const citiesUtility = new Cities();

    const rolesUtility = new Roles();

    const dispatch = useDispatch();

    // Use an effect to fetch the Countries from the API based on the user's login status
    useEffect(() => {
        // If the user is logged in, fetch the Countries from the API

        if (isLoging) {

            countriesUtility.fetchCountries(setCountries, dispatch);

            provinceUtility.fetchProvinces(setProvince, dispatch);

            rostersUtility.fetchRosters(setRosters, dispatch);

            citiesUtility.fetchCities(setCities, dispatch);

            rolesUtility.fetchRoles(setRoles, dispatch);

        }


    }, []);
}
export default function FetchData() {
    return { useFetchCountries };
}
