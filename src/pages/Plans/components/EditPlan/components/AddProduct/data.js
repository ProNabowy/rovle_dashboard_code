import { useEffect, useState } from "react";



const useGetOriginData = (formik) => {

    const [selectedOrigin, setSelectedOrigin] = useState(null);

    const [value, setValue] = useState([]);

    useEffect(() => {

        if (selectedOrigin) {

            if (!Object.values(value).includes(selectedOrigin.name)) {

                setValue(perv => [...perv, selectedOrigin]);

            }

        }

    }, [selectedOrigin]);

    useEffect(() => {

        setValue([]);

    }, [formik.values?.provider_id]);


    useEffect(() => {

        const arrOfProductsId = value.map(item => {

            const newItem = { id: item?.id };

            return newItem;

        });

        formik.setFieldValue('products', arrOfProductsId);

    }, [value]);

    return {
        value,
        setValue,
        selectedOrigin,
        setSelectedOrigin,
    }

}


export {
    useGetOriginData
}