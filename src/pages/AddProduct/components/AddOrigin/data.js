import { useEffect, useState } from "react";
import { Origins, Products } from "../../../../apis/apis";

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
        stock: "",
        description: "",
        presentations: [],
        origins: []
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


const useGetOriginData = () => {

    const [value, setValue] = useState([]);
    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [visible, setVisible] = useState(false);
    const [addOriginValue, setAddOriginValue] = useState(null);
    const OriginsUtailty = new Origins();
    const [origins, setOrigins] = useState([]);

    const handelSubmit = () => {


        setVisible(false);

        OriginsUtailty.addOrigin({ name: addOriginValue });

    }

    useEffect(() => {

        OriginsUtailty.fetchOrigins(setOrigins, true);

    }, []);


    useEffect(() => {

        if (selectedOrigin) {

            if (!Object.values(value).includes(selectedOrigin.name)) {

                setValue(perv => [...perv, selectedOrigin]);

            }

        }

    }, [selectedOrigin]);


    return {
        value, setValue, selectedOrigin,
        setSelectedOrigin, visible, setVisible,
        addOriginValue, setAddOriginValue,
        origins,
        handelSubmit
    }

}

const convertOriginToString = (origins, key) => {

    const names = origins.map(item => item[key]);

    return Array.from(new Set(names));
}


export {
    useDataGetter,
    useSubmittedData,
    useGetOriginData,
    convertOriginToString
}