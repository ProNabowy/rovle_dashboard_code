import { useEffect, useState } from "react";

const useGetShopData = (formik, dataKey, optionLabel) => {

    const [selectedShop, setSelectedShop] = useState(null);

    useEffect(() => {

        if (selectedShop) {

            if (!formik.values[dataKey]?.includes(selectedShop[optionLabel] || selectedShop.name)) {

                formik.setFieldValue(dataKey, [...formik.values[dataKey], { name: selectedShop[optionLabel] || selectedShop.name, id: selectedShop.id }])

            }

        }

    }, [selectedShop]);

    const handleDuplicatedValue = currentValue => {

        const filter = formik.values[dataKey]?.filter(item => item.id === currentValue.id);

        return filter.length ? null : setSelectedShop(currentValue);

    }

    const handleRemove = (removedValue) => {

        const newValue = formik.values[dataKey]?.filter((val) => val.id !== removedValue);

        formik.setFieldValue(dataKey, newValue);

    };

    const renderChipsItem = (item) => {
        return item.name || item[optionLabel];
    };


    return { selectedShop, handleDuplicatedValue, handleRemove, renderChipsItem }

}

export {
    useGetShopData
}