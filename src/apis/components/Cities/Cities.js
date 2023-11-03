import { RequestManager, secondrayUrl, Swal } from "../../data";

class Cities {

    fetchCities(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}cities`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {
                console.log(error);
                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addCity(data) {

        return RequestManager.post(`${secondrayUrl}cities`, data, true)

            .then(response => {

                Swal.success('Added!', `Your City has been Added.`).then(res => window.location.href = "/settings/cities/list");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    editCity(data, id) {

        const sendedData = { name: data?.name, province_id: data?.province_id?.id }

        return RequestManager.put(`${secondrayUrl}cities/${id}`, sendedData, true)

            .then(response => {

                Swal.success('Added!', `Your City has been Updated.`).then(res => window.location.href = '/settings/cities/list');

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })
    }

    deleteCity(id) {

        return RequestManager.delete(`${secondrayUrl}cities/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your City has been deleted.`).then(resp => window.location.reload());

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })


    }

}

export {
    Cities
}