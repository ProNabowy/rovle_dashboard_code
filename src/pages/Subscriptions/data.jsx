import { Get } from "../../apis/apis";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Table from "../../assets/utils/table";

const tableService = new Table();

const statusBodyTemplate = (rowData) => {
    return <p className={`mb-1 capitalize text-[13px] font-medium ${rowData.status == 'pending' ? "text-[#C9CC3A]" : rowData.status == 'processing' ? "text-[#7A3ACC]" : rowData?.status === 'active' ? "text-[#28C76F]" : "text-[#FF5C34]"}`}> {rowData?.status === 'pending' ? "Esperando pago" : rowData?.status} </p>
};

const usePackageBodyTemplate = (rowData) => {

    return <p className={`mb-1 capitalize text-[13px] font-medium text-[#58291E]`}>{rowData?.plan_size?.size?.weight}g = {rowData?.plan_size?.price} Euro</p>

};
const actionBodyTemplate = (rowData) => {

    return (
        <Link to={`/products/plans/subscriptions/manage-package?id=${rowData.id}`}>
            <FontAwesomeIcon icon={faGear} className="text-[#45B8EA]" />
        </Link>
    )

};

const columns = [
    { field: "name", header: "Nombre", tamplate: tableService.nameBodyTemplate },
    { field: "created_at", header: "Fecha de inicio", tamplate: tableService.startDateBodyTemplate },
    { field: "updated_at", header: "Fecha de finalización", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Estado", tamplate: statusBodyTemplate },
    { field: "name", header: "Paquete", tamplate: usePackageBodyTemplate },
    { field: "action", header: "Acción", tamplate: actionBodyTemplate },
];


const useDataGetter = () => {

    const [rosters, setRoasters] = useState([]);

    const { user, setIsLoading } = useContext(AppContext);

    const getUtailty = new Get();

    const [selectedRosters, setselectedRosters] = useState({});

    const [selectedPlan, setselectedPlan] = useState({});

    const provider = user?.provider;

    const [plans, setPlans] = useState([]);

    const [subscriptionsList, setSubscriptions] = useState([]);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getRoasters().then(response => setRoasters(response))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    useEffect(() => {

        if (provider?.id) {

            getUtailty.getPlansByProvider(provider?.id).then(response => setPlans([{ name: 'All', id: 'all' }, ...response]));

        } else {

            if (selectedRosters?.id) {

                getUtailty.getPlansByProvider(selectedRosters?.id).then(response => setPlans(response))

            }
        }

        return () => { };
    }, [selectedRosters]);

    useEffect(() => {

        setIsLoading(true);

        if (selectedPlan?.id) {

            if (selectedPlan?.id === 'all') {

                getUtailty.getSubscriptions()
                    .then(response => setSubscriptions(response))
                    .finally(_ => setIsLoading(false));

            } else {

                getUtailty.getSubscriptionsByPlanId(selectedPlan?.id).then(response => setSubscriptions(response))
                    .finally(_ => setIsLoading(false));

            }


        }

        return () => { };
    }, [selectedPlan]);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getSubscriptions()
            .then(response => setSubscriptions(response))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    return {
        selectedRosters,
        setselectedRosters,
        rosters,
        selectedPlan,
        setselectedPlan,
        subscriptionsList,
        plans,
        provider
    };

}

export {
    useDataGetter,
    columns
}