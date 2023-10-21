import { RequestManager, Swal, baseUrl, secondrayUrl } from "../../data";

class Users {


    fetchUsers(state, hasAuth) {

        RequestManager.get(`${secondrayUrl}users`, hasAuth)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {
                console.log(error);
                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }


    addUser(data) {

        RequestManager.post(`${secondrayUrl}users`, data, true)

            .then(response => {

                Swal.success('Added!', `User has been Added.`).then(res => window.location.href = "/groups/users");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteUser(id) {

        RequestManager.delete(`${secondrayUrl}users/${id}`)

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