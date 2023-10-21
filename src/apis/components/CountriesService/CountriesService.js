import { RequestManager, baseUrl, secondrayUrl, Swal } from "../../data";

class Countries {

    fetchCountries(state, dispatch) {

        RequestManager.get(`${baseUrl}countries`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addCountry(data) {

        RequestManager.post(`${secondrayUrl}countries`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Country has been Added.`).then(res => window.location.href = '/settings/country/list');

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteCountry(id) {


        RequestManager.delete(`${secondrayUrl}countries/${id}`)

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