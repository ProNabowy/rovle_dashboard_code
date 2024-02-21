import { useContext, useEffect, useState } from "react";
import { Get } from "../../../../apis/apis"
import { AppContext } from "../../../../context/AppContext";

const useDataGetter = () => {

    const getUtailty = new Get();

    const { setIsLoading, user } = useContext(AppContext);

    const [roles, setRoles] = useState([]);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getRoles().then(response => setRoles(response))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    return { roles, user };
}

export {
    useDataGetter
}