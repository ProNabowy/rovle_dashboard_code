import { RequestManager, secondrayUrl, Swal } from "../../data";

class Plans {


    fetchPlans(state, id, hasAuth) {

        RequestManager.get(`${secondrayUrl}plans${id ? `/${id}` : ""}`, hasAuth)

            .then(response => {
                console.log(response);
                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addPlans(data) {

        RequestManager.post(`${secondrayUrl}plans`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Plan has been Added.`).then(res => window.location.href = "/products/plans/list");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deletePlan(id) {

        RequestManager.delete(`${secondrayUrl}plans/${id}`)

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