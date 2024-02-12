import { Get, swal } from "../../apis/apis";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const useDataGetter = () => {

    const [rosters, setRoasters] = useState([]);

    const { user, setIsLoading } = useContext(AppContext);

    const getUtailty = new Get();

    const [selectedRosters, setselectedRosters] = useState(JSON.parse(sessionStorage.getItem('selected-roaster')));

    const [selectedPlan, setselectedPlan] = useState(JSON.parse(sessionStorage.getItem('selected-plan')));

    const provider = user?.provider;

    const location = useLocation().pathname;

    const [plans, setPlans] = useState([]);

    const [subscriptionsList, setSubscriptions] = useState([]);

    const navigate = useNavigate();

    const handleShowButton = () => {

        return (!selectedPlan?.id) ? swal.warning('Warning', `Please Select Plan`) : navigate('/products/plans/subscriptions/list');

    }

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getRoasters().then(response => setRoasters(response))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    useEffect(() => {

        if (provider?.id) {

            getUtailty.getPlansByProvider(provider?.id).then(response => setPlans(response))

            sessionStorage.setItem('selected-roaster', JSON.stringify(selectedRosters));

        } else {

            if (selectedRosters?.id) {

                getUtailty.getPlansByProvider(selectedRosters?.id).then(response => setPlans(response))

                sessionStorage.setItem('selected-roaster', JSON.stringify(selectedRosters));

            }

        }

    }, [selectedRosters]);

    useEffect(() => {

        selectedPlan?.id && sessionStorage.setItem('selected-plan', JSON.stringify(selectedPlan));

        if (selectedPlan?.id && location.includes('list')) {

            setIsLoading(true);

            getUtailty.getSubscriptionsByPlanId(selectedPlan?.id).then(response => setSubscriptions(response))
                .finally(_ => setIsLoading(false));

        }

    }, [selectedPlan]);

    return {
        selectedRosters,
        setselectedRosters,
        rosters,
        selectedPlan,
        setselectedPlan,
        subscriptionsList,
        plans,
        provider,
        handleShowButton
    };

}

export {
    useDataGetter
}