import { useDispatch, useSelector } from "react-redux";
import { Plans, Subscriptions } from "../../apis/apis";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../components/AppContext/AppContext";
import { setSubscriptions } from "../../store/reduces/subscriptions";

const useDataGetter = () => {

    const rosters = useSelector(store => store.rosters);

    const [selectedRosters, setselectedRosters] = useState(JSON.parse(sessionStorage.getItem('selected-roaster')));

    const [selectedPlan, setselectedPlan] = useState(JSON.parse(sessionStorage.getItem('selected-plan')));

    const location = useLocation().pathname;

    const [plans, setPlans] = useState([]);

    const subscriptionsList = useSelector(store => store.subscriptions);

    const dispatch = useDispatch();

    const plansUtailty = new Plans();

    const subscriptionsUtailty = new Subscriptions();

    const { setIsLoading } = useContext(AppContext);


    useEffect(() => {

        if (selectedRosters?.id) {

            plansUtailty.fetchPlansByProvider(setPlans, selectedRosters?.id, true);

            sessionStorage.setItem('selected-roaster', JSON.stringify(selectedRosters));

        }

    }, [selectedRosters]);

    useEffect(() => {

        selectedPlan?.id && sessionStorage.setItem('selected-plan', JSON.stringify(selectedPlan));

        if (selectedPlan?.id && location.includes('list')) {

            setIsLoading(true);

            subscriptionsUtailty.fetchSubscriptionsByPlanId(setSubscriptions, selectedPlan?.id, dispatch).finally(_ => setIsLoading(false));

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
    };

}

export {
    useDataGetter
}