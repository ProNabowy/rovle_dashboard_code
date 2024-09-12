import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import { Get } from "../../../../apis/apis";

const useDataGetter = () => {

    const { setIsLoading, user } = useContext(AppContext);

    const [roasters, setRoasters] = useState([]);

    const getUtailty = new Get();

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getRoasters().then(response => setRoasters(response))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    return {
        user,
        roasters
    }
}

export {
    useDataGetter
}