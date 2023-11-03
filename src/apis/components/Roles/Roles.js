import { RequestManager, Swal, secondrayUrl } from "../../data";

class Roles {


    fetchRoles(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}roles`, true)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }
    fetchUsers(state, roleId) {

        return RequestManager.get(`${secondrayUrl}roles/${roleId}/accounts`, true)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }
    deleteUser(userID) {

        return RequestManager.delete(`${secondrayUrl}roles/${userID}/accounts`, true)

            .then(response => {

                return;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addRole(data) {

        return RequestManager.post(`${secondrayUrl}roles`, data, true)

            .then(response => {

                Swal.success('Added!', `Role has been Added.`).then(res => window.location.href = "/settings/province/list");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteRole(id) {

        return RequestManager.delete(`${secondrayUrl}roles/${id}`)

            .then(response => {

                Swal.success('Deleted!', `The Role has been deleted.`).then(resp => window.location.reload());

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })


    }

}

export {
    Roles
}