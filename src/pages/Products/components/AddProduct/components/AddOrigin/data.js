import { useEffect, useState } from "react";
import { Origins } from "../../../../../../apis/apis";



const useGetOriginData = (formik) => {

    const [selectedOrigin, setSelectedOrigin] = useState(null);

    const [value, setValue] = useState([]);

    const [visible, setVisible] = useState(false);

    const [addOriginValue, setAddOriginValue] = useState(null);

    const OriginsUtailty = new Origins();

    const [origins, setOrigins] = useState([]);

    const handelSubmit = () => {


        setVisible(false);

        OriginsUtailty.addOrigin({ name: addOriginValue, provider_id: formik?.values?.provider_id });

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


export {
    useGetOriginData
}