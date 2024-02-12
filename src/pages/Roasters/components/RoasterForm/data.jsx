import { useEffect, useState } from "react";
import { Get } from "../../../../apis/apis"

const useDataGetter = () => {

    const getUtailty = new Get();

    const [countries, setCounteris] = useState([]);

    useEffect(() => {

        getUtailty.getCountries().then(response => setCounteris(response));

        return () => { };
    }, []);

    return { countries }
}

export {
    useDataGetter
}