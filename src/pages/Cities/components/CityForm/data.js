import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hasPermissions } from "../../../../assets/js/utils";
import { Province } from "../../../../apis/apis";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { setProvince } from "../../../../store/reduces/province";

const useDataGetter = () => {

    const ProvinceUtility = new Province();

    const province = useSelector(store => store.province);

    const permissions = useSelector(store => store.permissions);

    const user_access = useSelector(store => store?.userPeressmisons);

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        if (hasPermissions(permissions.Provinces, user_access, 'dashboard.provinces.index')) {

            setIsLoading(true);

            ProvinceUtility.fetchProvinces(setProvince, dispatch).finally(_ => setIsLoading(false));

        }

    }, []);

    return { province };

}

export {
    useDataGetter
};