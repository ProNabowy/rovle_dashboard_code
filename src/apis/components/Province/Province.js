import { handleLogOut } from "../../../assets/js/utils";
import { setProvince } from "../../../store/reduces/province";
import { RequestManager, Swal, secondrayUrl } from "../../data";

class Province {

    fetchProvinces(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}provinces`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    getProvince(state, id) {

        return RequestManager.get(`${secondrayUrl}provinces/${id}`)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    addProvinces(data, dispatch, province, navigate) {

        return RequestManager.post(`${secondrayUrl}provinces`, data, true)

            .then(response => {

                Swal.success('Añadido!', `Tus provincias han sido añadidas.`).then(_ => navigate('/settings/province/list'));

                return dispatch(setProvince([...province, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    editProvinces(data, id, dispatch, provinces) {

        return RequestManager.put(`${secondrayUrl}provinces/${id}`, { name: data.name, country_id: data?.country_id }, true)

            .then(response => {

                Swal.success('Actualizado!', `Tus provincias han sido actualizadas.`);

                const updatedProvinces = provinces.map(province => province?.id == id ? response.data.data : province);

                return dispatch(setProvince(updatedProvinces));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })
    }

    deleteProvince(id, dispatch, provinces) {

        return RequestManager.delete(`${secondrayUrl}provinces/${id}`)

            .then(response => {

                Swal.success('Borrado!', `Tu provincia ha sido eliminada.`);

                const updatedProvinces = provinces.filter(province => province?.id != id);

                return dispatch(setProvince(updatedProvinces));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Province
}