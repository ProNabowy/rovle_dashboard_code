import { RequestManager, secondrayUrl, Swal } from "../../data";

class Permissions {

    fetchPermissions(state) {

        return RequestManager.get(`${secondrayUrl}permissions`, true)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    getSinglePermission(state, roleId) {

        return RequestManager.get(`${secondrayUrl}roles/${roleId}`, true)

            .then(response => {

                state(response.data.data?.permissions);

                return response.data.data;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addPermissions(data) {

        return RequestManager.post(`${secondrayUrl}roles`, data, true)

            .then(response => {

                Swal.success('Added!', `Permissions has been Added.`).then(res => window.location.href = '/settings/permissions/list');

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    editPermissions(data, roleId) {

        return RequestManager.put(`${secondrayUrl}roles/${roleId}`, data, true)

            .then(response => {

                Swal.success('Updated!', `Permissions has been Updated.`).then(res => window.location.href = '/settings/permissions/list');

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

}


export {
    Permissions
}