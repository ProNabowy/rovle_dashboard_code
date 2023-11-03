import { RequestManager, Swal, secondrayUrl } from "../../data";

class Province {

    fetchProvinces(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}provinces`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    getProvince(state, id) {

        return RequestManager.get(`${secondrayUrl}provinces/${id}`)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addProvinces(data) {

        return RequestManager.post(`${secondrayUrl}provinces`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Provinces has been Added.`).then(res => window.location.href = "/settings/province/list");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    editProvinces(data, id) {

        return RequestManager.put(`${secondrayUrl}provinces/${id}`, { name: data.name, country_id: data?.country_id }, true)

            .then(response => {

                Swal.success('Added!', `Your Provinces has been Updated.`).then(res => window.location.href = '/settings/province/list');

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })
    }

    deleteProvince(id) {

        return RequestManager.delete(`${secondrayUrl}provinces/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your Province has been deleted.`).then(resp => window.location.reload());

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })


    }

}

export {
    Province
}