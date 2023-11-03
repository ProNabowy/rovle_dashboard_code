import { useContext, useEffect, useState } from "react";
import { CoffeeShops } from "../../../apis/apis";
import { AppContext } from "../../../components/AppContext/AppContext";

const useDataGetter = _ => {

    const [data, setData] = useState([]);

    const coffeeUtailty = new CoffeeShops();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        coffeeUtailty.fetchCoffees(setData, true).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

        return () => { };

    }, []);

    return { data };

}

export {
    useDataGetter
}