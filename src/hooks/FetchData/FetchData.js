import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCountries } from "../../store/reduces/countries";
import { Cities, Countries, Province, Roles, Rosters } from "../../apis/apis";
import { setProvince } from "../../store/reduces/province";
import { setRosters } from "../../store/reduces/rosters";
import { setCities } from "../../store/reduces/cities";
import { setRoles } from "../../store/reduces/roles";
import { isLoggedIn } from "../../assets/js/utils";
import { AppContext } from "../../components/AppContext/AppContext";

const useFetchGloableData = () => {

    const isLogin = isLoggedIn();

    const countriesUtility = new Countries();

    const provinceUtility = new Province();

    const rostersUtility = new Rosters();

    const citiesUtility = new Cities();

    const rolesUtility = new Roles();

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    // Use an effect to fetch the Countries from the API based on the user's login status
    useEffect(() => {
        // If the user is logged in, fetch the Countries from the API

        if (isLogin) {


            setIsLoading(true); // Show the loader before making the API request

            countriesUtility.fetchCountries(setCountries, dispatch);

            provinceUtility.fetchProvinces(setProvince, dispatch);

            rostersUtility.fetchRosters(setRosters, dispatch);

            citiesUtility.fetchCities(setCities, dispatch);

            rolesUtility.fetchRoles(setRoles, dispatch).finally(() => {

                setIsLoading(false); // Hide the loader when the API request is completed

            });

        }

    }, []);
}
export default function FetchData() {
    return { useFetchGloableData };
}
