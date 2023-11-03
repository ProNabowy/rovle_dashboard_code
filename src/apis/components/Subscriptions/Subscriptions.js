import { RequestManager, secondrayUrl, Swal } from "../../data";

class Subscriptions {

    fetchSubscriptions(state) {

        return RequestManager.get(`${secondrayUrl}plans/orders`, true)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    fetchSubscriptionsByPlanId(state, id) {
        return RequestManager.get(`${secondrayUrl}plans/${id}/subscriptions`, true)
        
        .then(response => {
                console.log(id , 'From Api' , response.data.data)

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

}

export {
    Subscriptions
}
