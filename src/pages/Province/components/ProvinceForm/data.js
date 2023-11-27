import { useSelector } from "react-redux";

const useDataGetter = _ => {

    const countries = useSelector(store => store.countries);

    return { countries }

}

export {
    useDataGetter
}