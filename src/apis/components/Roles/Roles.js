import { handleLogOut } from "../../../assets/js/utils";
import { setRoles } from "../../../store/reduces/roles";
import { RequestManager, Swal, secondrayUrl } from "../../data";

class Roles {


    fetchRoles(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}roles`, true)

            .then(response => {

                dispatch(state(response.data.data));

                return response.data.data;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    getSingleRole(state, roleId) {

        return RequestManager.get(`${secondrayUrl}roles/${roleId}`, true)

            .then(response => {

                state(response.data.data?.permissions);

                return response.data.data;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    fetchUsers(state, roleId) {

        return RequestManager.get(`${secondrayUrl}roles/${roleId}/accounts`, true)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }
    deleteUser(userID) {

        return RequestManager.delete(`${secondrayUrl}roles/${userID}/accounts`, true)

            .then(response => {

                return;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    editRole(data, roleId, dispatch, roles) {

        return RequestManager.put(`${secondrayUrl}roles/${roleId}`, data, true)

            .then(response => {

                Swal.success('Updated!', `Permissions has been Updated.`);

                const updatedRoles = roles.map(role => role?.id == roleId ? response.data.data : role);

                return dispatch(setRoles(updatedRoles));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    addRole(data, dispatch, roles) {

        return RequestManager.post(`${secondrayUrl}roles`, data, true)

            .then(response => {

                Swal.success('Added!', `Role has been Added.`);

                return dispatch(setRoles([...roles, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    deleteRole(id, dispatch, roles) {

        return RequestManager.delete(`${secondrayUrl}roles/${id}`)

            .then(response => {

                Swal.success('Deleted!', `The Role has been deleted.`);

                const updatedRoles = roles.filter(role => role?.id != id);

                return dispatch(setRoles(updatedRoles));
            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Roles
}