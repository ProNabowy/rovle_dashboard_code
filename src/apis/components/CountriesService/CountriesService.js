import { RequestManager, secondrayUrl, Swal } from "../../data";
import { setCountries } from "../../../store/reduces/countries";
import { handleLogOut } from "../../../assets/js/utils";

class Countries {

    fetchCountries(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}countries`, true)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }
    getCountry(state, id) {

        return RequestManager.get(`${secondrayUrl}countries/${id}`)

            .then(response => {

                state(response.data.data)

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    addCountry(data, dispatch, countries) {

        return RequestManager.post(`${secondrayUrl}countries`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Country has been Added.`);

                return dispatch(setCountries([...countries, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })


    }
    editCountry(data, id, dispatch, countries) {

        return RequestManager.put(`${secondrayUrl}countries/${id}`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Country has been Updated.`);

                const updatedCountry = countries.map(Country => Country?.id == id ? response.data.data : Country);

                return dispatch(setCountries(updatedCountry));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })
    }

    deleteCountry(id, dispatch, countries) {

        return RequestManager.delete(`${secondrayUrl}countries/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your Country has been deleted.`);

                const updatedCountry = countries.filter(country => country?.id != id);

                return dispatch(setCountries(updatedCountry));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Countries
}