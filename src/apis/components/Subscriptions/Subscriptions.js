import { handleLogOut } from "../../../assets/js/utils";
import { RequestManager, secondrayUrl, Swal } from "../../data";

class Subscriptions {

    fetchSubscriptionsByPlanId(state, id, dispatch) {
        return RequestManager.get(`${secondrayUrl}plans/${id}/subscriptions`, true)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })
    }
    getSingleSubscription(id, state) {

        return RequestManager.get(`${secondrayUrl}subscriptions/${id}`, true)


            .then(response => {

                const data = response.data.data;

                state(data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })
    }
    acceptSubscription(id, data, navigate) {

        const updateData = data.map(item => {
            return { id: item.presentationId, units: item.units };
        })

        return RequestManager.post(`${secondrayUrl}subscription/${id}/accept`, { presentations: updateData })

            .then(response => {

                Swal.success('Added!', `Your Subscription Pacakge has been Added.`).then(_ => navigate('/products/plans/subscriptions/list'));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })
    }

}

export {
    Subscriptions
}
