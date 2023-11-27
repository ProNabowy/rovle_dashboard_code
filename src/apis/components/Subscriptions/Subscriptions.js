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

}

export {
    Subscriptions
}
