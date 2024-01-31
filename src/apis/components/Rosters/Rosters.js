import { handleLogOut } from "../../../assets/js/utils";
import { setRosters } from "../../../store/reduces/rosters";
import { RequestManager, Swal, secondrayUrl } from "../../data";

class Rosters {

    fetchRosters(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}providers`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    addRoaster(data, dispatch, roasters, navigate) {

        return RequestManager.post(`${secondrayUrl}providers`, data, true)

            .then(response => {

                Swal.success('Añadido!', `Tu tostador ha sido añadido.`).then(_ => navigate('/groups/roasters'));

                return dispatch(setRosters([...roasters, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }
    updateRoaster(data, id, dispatch, roasters) {

        return RequestManager.put(`${secondrayUrl}providers/${id}`, data)

            .then(response => {

                Swal.success('Actualizado!', `Tu tostador ha sido actualizado.`)

                const updatedRoasters = roasters.map(roaster => roaster?.id == id ? response.data.data : roaster);

                return dispatch(setRosters(updatedRoasters));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    deleteRoaster(id, dispatch, roasters) {

        return RequestManager.delete(`${secondrayUrl}providers/${id}`)

            .then(response => {

                Swal.success('Borrado!', `Tu tostador ha sido eliminado.`)

                const updatedRoasters = roasters.filter(roaster => roaster?.id != id);

                return dispatch(setRosters(updatedRoasters));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Rosters
}