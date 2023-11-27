import { useContext, useEffect } from "react";
import { CoffeeShops } from "../../../apis/apis";
import { AppContext } from "../../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { setShops } from "../../../store/reduces/shops";

const useDataGetter = _ => {

    const dispatch = useDispatch();

    const coffeeUtailty = new CoffeeShops();

    const shops = useSelector(store => store.shops);

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        coffeeUtailty.fetchCoffees(setShops, dispatch).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

        return () => { };

    }, []);

    return { shops };

}

export {
    useDataGetter
}