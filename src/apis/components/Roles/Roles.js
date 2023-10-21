import { RequestManager, Swal, secondrayUrl } from "../../data";

class Roles {


    fetchRoles(state, dispatch) {

        RequestManager.get(`${secondrayUrl}roles`, true)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addRole(data) {

        RequestManager.post(`${secondrayUrl}roles`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Provinces has been Added.`).then(res => window.location.href = "/settings/province/list");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteRole(id) {

        RequestManager.delete(`${secondrayUrl}roles/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your Province has been deleted.`).then(resp => window.location.reload());

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