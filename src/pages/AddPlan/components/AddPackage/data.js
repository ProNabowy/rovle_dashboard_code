import { useEffect, useRef, useState } from "react";

const useAddPackage = (setData) => {

    const toast = useRef(null);

    const inputPriceRef = useRef();

    const [packages, setPackage] = useState([]);

    const [id, setId] = useState(0);

    const [addNewPackage, setAddNewPackage] = useState({

        price: "",
        size: "",
        id: ""

    });

    useEffect(() => {

        setData(perv => ({ ...perv, presentations: packages, name: String(Math.random() * 123456789) }))

    }, [packages]);

    const showWarn = (message, summary) => {
        toast.current.show({ severity: summary, summary: summary, detail: message, life: 3000 });
    }

    const handelAddNewPackage = () => {

        const isDuplicate = packages.some(
            pkg => pkg.size === addNewPackage.size && pkg.price === addNewPackage.price
        );

        if (isDuplicate) {

            showWarn(`Please Don't Add Duplicate Package`, 'warn')

        } else {

            // Change new Package Id
            addNewPackage.id = id;

            setPackage(prev => [...prev, addNewPackage]);

            // Change The id Of The Next Package
            setId(prev => prev + 1);

            inputPriceRef.current.value = '';

            showWarn(`Package Add Successfully`, 'success');

        }

    };


    const removePackage = id => packages?.filter(newPackage => +newPackage.id !== +id);

    return {
        setAddNewPackage,
        inputPriceRef, handelAddNewPackage,
        packages, setPackage, toast, removePackage
    };
}

export {
    useAddPackage
};