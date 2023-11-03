import { useSelector } from "react-redux";
import { Plans, Subscriptions } from "../../apis/apis";
import { useEffect, useState } from "react";
import useCustomEffect from "../../hooks/useCustomEffect/useCustomEffect";
import { useLocation } from "react-router-dom";

const useDataGetter = () => {

    const rosters = useSelector(store => store.rosters);

    const [selectedRosters, setselectedRosters] = useState(JSON.parse(sessionStorage.getItem('selected-roaster')));

    const [selectedPlan, setselectedPlan] = useState(JSON.parse(sessionStorage.getItem('selected-plan')));

    const [subscriptionsList, setSubscriptionsList] = useState([]);

    const location = useLocation().pathname;

    const [plans, setPlans] = useState([]);

    const plansUtailty = new Plans();

    const subscriptionsUtailty = new Subscriptions();

    const { useReplacePagnitToText, useTableEntries } = useCustomEffect();

    const { selectedEntries, setSelectedEntries, entries } = useTableEntries(subscriptionsList);

    useReplacePagnitToText();

    useEffect(() => {

        if (selectedRosters?.id) {

            plansUtailty.fetchPlansByProvider(setPlans, selectedRosters?.id, true);

            sessionStorage.setItem('selected-roaster', JSON.stringify(selectedRosters));

        }

    }, [selectedRosters]);

    useEffect(() => {

        selectedPlan?.id && sessionStorage.setItem('selected-plan', JSON.stringify(selectedPlan));

        selectedPlan?.id && location.includes('list') && subscriptionsUtailty.fetchSubscriptionsByPlanId(setSubscriptionsList, selectedPlan?.id);

    }, [selectedPlan]);

    return {
        selectedRosters,
        setselectedRosters,
        rosters,
        selectedPlan,
        setselectedPlan,
        subscriptionsList,
        plans,
        selectedEntries,
        setSelectedEntries,
        entries
    };

}

export {
    useDataGetter
}