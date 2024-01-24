import { handleLogOut } from "../../../assets/js/utils";
import { setCities } from "../../../store/reduces/cities";
import { RequestManager, secondrayUrl, Swal } from "../../data";

class Cities {

    fetchCities(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}cities`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    addCity(data, dispatch, cities, navigate) {

        return RequestManager.post(`${secondrayUrl}cities`, data, true)

            .then(response => {

                Swal.success('Added!', `Your City has been Added.`).then(_ => navigate('/settings/cities/list'));

                return dispatch(setCities([...cities, response.data.data]));


            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    editCity(data, id, cities, dispatch) {

        const sendedData = { name: data?.name, province_id: data?.province_id?.id }

        return RequestManager.put(`${secondrayUrl}cities/${id}`, sendedData, true)

            .then(response => {

                Swal.success('Updated!', `Your City has been Updated.`);

                const updatedCities = cities.map(city => city?.id == id ? response.data.data : city);

                return dispatch(setCities(updatedCities));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })
    }

    deleteCity(id, dispatch, cities) {

        return RequestManager.delete(`${secondrayUrl}cities/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your City has been deleted.`);

                const updatedCities = cities.filter(city => city?.id != id);

                return dispatch(setCities(updatedCities));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Cities
}