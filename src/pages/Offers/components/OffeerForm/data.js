import { useState } from "react";
import { useSelector } from "react-redux";

const useDataGetter = formik => {

    const roasters = useSelector(store => store?.rosters);
    const [autoSelectStartData, setAutoSelectStartData] = useState(false);
    const [autoSelectEndData, setAutoSelectEndData] = useState(false);

    const handleStartDate = e => {

        setAutoSelectStartData(e.checked);
        if (e.checked) {

            formik.setFieldValue('start_date', new Date());


        } else {

            formik.setFieldValue('start_date', '');

        }

    }
    const handleEndDate = e => {

        setAutoSelectEndData(e.checked);

        if (e.checked) {

            formik.setFieldValue('end_date', 'auto');


        } else {

            formik.setFieldValue('end_date', '');

        }

    }

    return {
        handleStartDate,
        roasters,
        autoSelectStartData,
        setAutoSelectStartData,
        autoSelectEndData,
        handleEndDate,
        setAutoSelectEndData,
    }


}

const Usuario = [
    { id: 'auto', name: "TODOS" },
    { id: 1, name: "Nivel 1" },
    { id: 2, name: "Nivel 2" },
    { id: 3, name: "Nivel 3" },
]

const Activa = [
    { id: 'auto', name: "AUTO" },
    { id: 'visit', name: "VISITAS" },
    { id: 'points', name: "PUNTOS" },
]

const Discount = [
    { id: 'percentage', name: "% DESC" },
    { id: 'freeCoffee', name: "CAFÉ GRATIS" },
]
const Recurren = [
    { id: 0, name: "DIA" },
    { id: 1, name: "Week" },
    { id: 2, name: "MES" },
    { id: 3, name: "AÑO" },
    { id: 4, name: "UNA VEZ" },
]
const Fisico = [
    { id: 'auto', name: "OMNI" },
    { id: 'coffeeShop', name: "FISICO" },
    { id: 'app', name: "SOLO APP" },
]




export {
    Usuario,
    Activa,
    Discount,
    Recurren,
    Fisico,
    useDataGetter
}