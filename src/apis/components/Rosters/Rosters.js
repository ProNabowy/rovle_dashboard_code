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

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    addRoaster(data, dispatch, roasters, navigate) {

        return RequestManager.post(`${secondrayUrl}providers`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Roaster has been Added.`).then(_ => navigate('/groups/roasters'));

                return dispatch(setRosters([...roasters, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }
    updateRoaster(data, id, dispatch, roasters) {

        return RequestManager.put(`${secondrayUrl}providers/${id}`, data)

            .then(response => {

                Swal.success('Updated!', `Your Roaster has been Updated.`)

                const updatedRoasters = roasters.map(roaster => roaster?.id == id ? response.data.data : roaster);

                return dispatch(setRosters(updatedRoasters));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    deleteRoaster(id, dispatch, roasters) {

        return RequestManager.delete(`${secondrayUrl}providers/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your Roaster has been deleted.`)

                const updatedRoasters = roasters.filter(roaster => roaster?.id != id);

                return dispatch(setRosters(updatedRoasters));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Rosters
}