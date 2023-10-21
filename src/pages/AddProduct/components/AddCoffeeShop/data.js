import { useEffect, useState } from "react";
import { CoffeeShops, Products } from "../../../../apis/apis";

// Get Data From Store
const useDataGetter = (selectedRoster) => {

    const [data, setData] = useState({
        commercial_name: "",
        code: "",
        trade_name: "",
        region: "",
        farm: "",
        sca_score: "",
        altitude: "",
        process: "",
        grades: "",
        provider_id: "",
        description: "",
        presentations: []
    });

    useEffect(() => {

        setData(perv => ({ ...perv, provider_id: selectedRoster?.user?.id }))

    }, [selectedRoster]);

    return { data, setData };

}

// Submit Data To Server
const useSubmittedData = (data) => {

    const productUtailty = new Products();

    const handelSubmit = e => {

        e.preventDefault();

        productUtailty.addProduct(data);

    }

    return { handelSubmit }
}


const useGetShopData = () => {

    const [value, setValue] = useState([]);
    const [selectedShop, setSelectedShop] = useState(null);


    const coffeeUtailty = new CoffeeShops();

    const [coffee, setCoffee] = useState([]);

    useEffect(() => {

        coffeeUtailty.fetchCoffees(setCoffee, true);

    }, []);

    useEffect(() => {

        if (selectedShop) {

            if (!value.includes(selectedShop.name)) {

                setValue(perv => [...perv, { name: selectedShop.name, id: selectedShop.id }]);

            }

        }

    }, [selectedShop]);

    const handleDuplicatedValue = currentValue => {

        const filter = value.filter(item => item.id === currentValue.id);

        return filter.length ? null : setSelectedShop(currentValue);

    }


    return { value, setValue, selectedShop, setSelectedShop, coffee, handleDuplicatedValue }

}

export {
    useDataGetter,
    useSubmittedData,
    useGetShopData
}