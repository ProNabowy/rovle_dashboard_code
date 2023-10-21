import { RequestManager, baseUrl, secondrayUrl, Swal } from "../../data";

class Cities {

    fetchCities(state, dispatch) {

        RequestManager.get(`${baseUrl}cities`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {
                console.log(error);
                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addCity(data) {

        RequestManager.post(`${secondrayUrl}cities`, data, true)

            .then(response => {

                Swal.success('Added!', `Your City has been Added.`).then(res => window.location.href = "/settings/cities/list");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteCity(id) {

        RequestManager.delete(`${secondrayUrl}cities/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your City has been deleted.`).then(resp => window.location.reload());

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })


    }

}
const newCity = new Cities();

export {
    Cities
}