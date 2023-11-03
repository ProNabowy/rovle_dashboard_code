import { RequestManager, secondrayUrl, Swal } from "../../data";

class Countries {

    fetchCountries(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}countries`, true)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }
    getCountry(state, id) {

        return RequestManager.get(`${secondrayUrl}countries/${id}`)

            .then(response => {

                state(response.data.data)

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addCountry(data) {

        return RequestManager.post(`${secondrayUrl}countries`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Country has been Added.`).then(res => window.location.href = '/settings/country/list');

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }
    editCountry(data, id) {

        return RequestManager.put(`${secondrayUrl}countries/${id}`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Country has been Updated.`).then(res => window.location.href = '/settings/country/list');

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })
    }

    deleteCountry(id) {


        return RequestManager.delete(`${secondrayUrl}countries/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your Country has been deleted.`).then(res => window.location.reload());

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })


    }

}

export {
    Countries
}