import { useContext, useEffect, useState } from "react";
import { Get } from "../../../../apis/apis"
import { AppContext } from "../../../../context/AppContext";

const useDataGetter = () => {

    const getUtailty = new Get();

    const { setIsLoading, user } = useContext(AppContext);

    const [roles, setRoles] = useState([]);

    const [shops, setShops] = useState([]);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getRoles().then(response => {

            const removeProviderRole = response.filter(role => role.name !== 'Provider');

            setRoles(removeProviderRole);

            if (user?.roles?.[0]?.name === 'admin') {

                if (response) {
                    const removeWaiterRole = response.filter(role => role.name !== 'Waiter').filter(role => role.name !== 'Provider');
                    setRoles(removeWaiterRole);
                }
            }
        })
            .then(() => getUtailty.getCoffees().then(response => setShops(response)))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);


    return { roles, shops, user };
}

export {
    useDataGetter
}