import { handleLogOut } from "../../../assets/js/utils";
import { setPlans } from "../../../store/reduces/plans";
import { RequestManager, secondrayUrl, Swal } from "../../data";

class Plans {

    fetchPlans(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}plans`, true)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    showPlan(state, id) {

        return RequestManager.get(`${secondrayUrl}plans/${id}`, true)

            .then(response => {

                state(response.data.data);

                return response.data.data;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }
    fetchPlansByProvider(state, id) {

        return RequestManager.get(`${secondrayUrl}plans?provider_id=${id}`, true)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    addPlans(data, dispatch, plans, navigate) {

        return RequestManager.post(`${secondrayUrl}plans`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Plan has been Added.`).then(_ => navigate('/products/plans/list'));

                return dispatch(setPlans([...plans, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }
    updatePlan(data, id, plans, dispatch) {

        return RequestManager.put(`${secondrayUrl}plans/${id}`, data, true)

            .then(response => {

                Swal.success('Updated!', `Your Plan has been Updated.`);

                const updatedPlans = plans.map(plan => plan?.id == id ? response.data.data : plan);

                return dispatch(setPlans(updatedPlans));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    deletePlan(id, dispatch, plans) {

        return RequestManager.delete(`${secondrayUrl}plans/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your Plan has been deleted.`);

                const updatedPlans = plans.filter(plan => plan?.id != id);

                return dispatch(setPlans(updatedPlans));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Plans
}