import { useSelector } from "react-redux";

const useDataGetter = () => {

    const province = useSelector(store => store.province);

    return { province };

}

export {
    useDataGetter
};