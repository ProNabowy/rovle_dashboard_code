import { useEffect, useRef, useState } from "react";
import { Size } from "../../apis/apis";
import { useSelector } from "react-redux";

const useAddPackage = (setData) => {
    const toast = useRef(null);

    const inputWeightRef = useRef();

    const inputPriceRef = useRef();

    const [packages, setPackage] = useState([]);

    const [visible, setVisible] = useState(false);

    const [id, setId] = useState(0);



    const [addNewPackage, setAddNewPackage] = useState({
        weight: "",
        price: "",
        id: ""
    });

    useEffect(() => {

        setData(perv => ({ ...perv, presentations: packages, name: String(Math.random() * 123456789) }))

    }, [packages]);

    const showWarn = (message, summary) => {
        toast.current.show({ severity: summary, summary: summary, detail: message, life: 3000 });
    }

    const handelAddNewPackage = () => {

        if (!inputWeightRef.current.value || !inputPriceRef.current.value) {

            showWarn('Please Fill The Reqriure Inputs', 'warn');

        } else {

            const isDuplicate = packages.some(
                pkg => pkg.weight === addNewPackage.weight && pkg.price === addNewPackage.price
            );

            if (isDuplicate) {

                showWarn(`Please Don't Add Duplicate Package`, 'warn')

            } else {

                // Change new Package Id
                addNewPackage.id = id;

                setPackage(prev => [...prev, addNewPackage]);

                // Change The id Of The Next Package
                setId(prev => prev + 1);

                // Return The Value Of The Inputs as Empty Value
                inputWeightRef.current.value = '';
                inputPriceRef.current.value = '';

                showWarn(`Package Add Successfully`, 'success');

            }
        }
    };

    return {
        packages, setVisible, visible, setAddNewPackage,
        inputPriceRef, handelAddNewPackage, setPackage, toast
    }
}

const useAddPlan = () => {

    const [selectedRoster, setSelectedRoster] = useState(null);

    const [selectedProducts, setSelectedProducts] = useState(null);

    const [selectedSize, setSelectedSize] = useState(null);

    const sizesUtailty = new Size();

    const [data, setData] = useState({
        name: "",
        periodicity: "",
        status: "",
        price: "",
        description: "",
        provider_id: "",
        presentations: []
    });

    const roaster = useSelector(store => store.rosters);

    const [ingredient, setIngredient] = useState('');

    useEffect(() => {

        selectedRoster?.id && sizesUtailty.fetchSizeByProvider(setSelectedProducts, selectedRoster?.id, true);

    }, [selectedRoster]);


    return {
        data, setData, setIngredient, ingredient,
        selectedRoster, setSelectedRoster, roaster,
        setSelectedSize, selectedSize, selectedProducts
    };
}

export {
    useAddPackage,
    useAddPlan
}