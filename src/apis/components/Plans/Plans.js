import { RequestManager, secondrayUrl, Swal } from "../../data";

class Plans {

    fetchPlans(state) {

        return RequestManager.get(`${secondrayUrl}plans`, true)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    fetchPlansByProvider(state, id) {

        return RequestManager.get(`${secondrayUrl}providers/${id}/plans`, true)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addPlans(data) {

        return RequestManager.post(`${secondrayUrl}plans`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Plan has been Added.`).then(res => window.location.href = "/products/plans/list");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }
    updatePlan(data, providerId) {

        return RequestManager.put(`${secondrayUrl}plans/${providerId}`, data, true)

            .then(response => {

                Swal.success('Updated!', `Your Plan has been Updated.`).then(res => window.location.href = "/products/plans/list");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deletePlan(id) {

        return RequestManager.delete(`${secondrayUrl}plans/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your Plan has been deleted.`).then(resp => window.location.reload());

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })


    }

}

export {
    Plans
}