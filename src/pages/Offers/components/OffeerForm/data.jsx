import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import { hasRoutePermissions } from "../../../../assets/utils/utils";
import { Get } from "../../../../apis/apis";

const useDataGetter = formik => {

    const [roasters, setRoasters] = useState([]);

    const getUtailty = new Get();

    const [autoSelectStartData, setAutoSelectStartData] = useState(false);

    const { setIsLoading, userPeressmisons, user } = useContext(AppContext);

    const isHasPermissions = (permissionKey) => hasRoutePermissions(userPeressmisons, permissionKey);

    const [autoSelectEndData, setAutoSelectEndData] = useState(false);

    const isProvider = user?.provider;

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getRoasters().then(response => setRoasters(response)).finally(_ => setIsLoading(false));

        return () => { };
    }, []);


    const handleStartDate = e => {

        setAutoSelectStartData(e.checked);

        if (e.checked) {

            formik.setFieldValue('start_date', new Date());


        } else {

            formik.setFieldValue('start_date', null);

        }

    }
    const handleEndDate = e => {

        setAutoSelectEndData(e.checked);

        if (e.checked) {

            formik.setFieldValue('end_date', null);


        } else {

            formik.setFieldValue('end_date', null);

        }

    }

    return {
        handleStartDate,
        roasters,
        autoSelectStartData,
        setAutoSelectStartData,
        autoSelectEndData,
        handleEndDate,
        isProvider,
        isHasPermissions,
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
    { id: 0, name: "Diaria" },
    { id: 1, name: "Semanal" },
    { id: 2, name: "Mensual" },
    { id: 3, name: "Anual" },
    { id: 4, name: "Sólo una vez" },
]
const Fisico = [
    { id: 'coffeeShop', name: "FISICO" },
]
const AppFisico = [
    { id: 'auto', name: "FÍSICO Y ONLINE" },
    { id: 'coffeeShop', name: "FISICO" },
    { id: 'app', name: "SOLO APP" },
]




export {
    Usuario,
    Activa,
    Discount,
    Recurren,
    Fisico,
    AppFisico,
    useDataGetter,
}