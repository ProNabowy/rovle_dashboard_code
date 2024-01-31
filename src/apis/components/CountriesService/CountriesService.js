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

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }
    getCountry(state, id) {

        return RequestManager.get(`${secondrayUrl}countries/${id}`)

            .then(response => {

                state(response.data.data)

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    addCountry(data, dispatch, countries, navigate) {

        return RequestManager.post(`${secondrayUrl}countries`, data, true)

            .then(response => {

                Swal.success('Añadido!', `Tu país ha sido añadido.`).then(_ => navigate('/settings/country/list'));

                return dispatch(setCountries([...countries, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })


    }
    editCountry(data, id, dispatch, countries) {

        return RequestManager.put(`${secondrayUrl}countries/${id}`, data, true)

            .then(response => {

                Swal.success('Actualizado!', `Tu país ha sido actualizado.`);

                const updatedCountry = countries.map(Country => Country?.id == id ? response.data.data : Country);

                return dispatch(setCountries(updatedCountry));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })
    }

    deleteCountry(id, dispatch, countries) {

        return RequestManager.delete(`${secondrayUrl}countries/${id}`)

            .then(response => {

                Swal.success('Borrado!', `Tu país ha sido eliminado`);

                const updatedCountry = countries.filter(country => country?.id != id);

                return dispatch(setCountries(updatedCountry));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Countries
}