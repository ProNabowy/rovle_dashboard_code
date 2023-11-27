import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../../store/reduces/countries";
import { Cities, Countries, Permissions, Province, Roles, Rosters } from "../../apis/apis";
import { setProvince } from "../../store/reduces/province";
import { setRosters } from "../../store/reduces/rosters";
import { setCities } from "../../store/reduces/cities";
import { setRoles } from "../../store/reduces/roles";
import { hasPermissions, isLoggedIn } from "../../assets/js/utils";
import { setPermissions } from "../../store/reduces/permissions";


const useFetchGloableData = (setIsLoading) => {

    const isLogin = isLoggedIn();

    const permissions = useSelector(store => store.permissions);

    const user_access = useSelector(store => store?.userPeressmisons);

    const permissionsUtility = new Permissions();

    const countriesUtility = new Countries();

    const provinceUtility = new Province();

    const rostersUtility = new Rosters();

    const citiesUtility = new Cities();

    const rolesUtility = new Roles();

    const dispatch = useDispatch();

    useEffect(() => {

        if (isLogin) {

            setIsLoading(true);

            permissionsUtility.fetchPermissions(setPermissions, dispatch).finally(_ => setIsLoading(false));

        }

    }, []);

    // Use an effect to fetch the Countries from the API based on the user's login status
    useEffect(() => {
        // If the user is logged in, fetch the Countries from the API
        const fetchData = async () => {

            if (isLogin) {

                const userId = JSON.parse(localStorage.getItem('user'))?.id;

                setIsLoading(true); // Show the loader before making the API request

                if (hasPermissions(permissions.Countries, user_access, 'dashboard.countries.index')) {

                    const countries = await countriesUtility.fetchCountries(setCountries, dispatch);

                }

                if (hasPermissions(permissions.Provinces, user_access, 'dashboard.provinces.index')) {

                    const province = await provinceUtility.fetchProvinces(setProvince, dispatch);;

                }

                if (hasPermissions(permissions.Providers, user_access, 'dashboard.providers.index')) {

                    const providers = await rostersUtility.fetchRosters(setRosters, dispatch);

                } else {

                    //  Don't Forget To Handle Provider Login
                    const user = JSON.parse(localStorage.getItem('user'));

                    // IF The User Doesn't Have Permission To List Users i set the his info as a default user 
                    dispatch(setRosters([user]));

                }

                if (hasPermissions(permissions.Cities, user_access, 'dashboard.cities.index')) {

                    const cities = await citiesUtility.fetchCities(setCities, dispatch);;

                }

                if (hasPermissions(permissions.Roles, user_access, 'dashboard.roles.index')) {

                    const roles = await rolesUtility.fetchRoles(setRoles, dispatch);

                }

                setIsLoading(false);

            }
        }

        fetchData();
    }, [user_access, permissions]);

}
export default function FetchData() {
    return { useFetchGloableData };
}
