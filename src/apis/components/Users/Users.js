import { RequestManager, Swal, secondrayUrl } from "../../data";

class Users {


    fetchUsers(state) {

        return RequestManager.get(`${secondrayUrl}users`)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    fetchSingleUser(state, id) {

        return RequestManager.get(`${secondrayUrl}users/${id}`)
            .then(response => {
                console.log(response);

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }


    addUser(data) {

        return RequestManager.post(`${secondrayUrl}users`, data)

            .then(response => {

                Swal.success('Added!', `User has been Added.`).then(res => window.location.href = "/groups/users");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }
    editUser(data, id) {

        return RequestManager.put(`${secondrayUrl}users/${id}`, data)

            .then(response => {

                Swal.success('Added!', `User has been Updated.`)

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteUser(id) {

        return RequestManager.delete(`${secondrayUrl}users/${id}`)

            .then(response => {

                Swal.success('Deleted!', `User has been deleted.`).then(resp => window.location.reload());

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })


    }

}

export {
    Users
}