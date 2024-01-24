import { handleLogOut } from "../../../assets/js/utils";
import { setUsers } from "../../../store/reduces/users";
import { RequestManager, Swal, secondrayUrl } from "../../data";

class Users {

    fetchUsers(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}users`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    fetchSingleUser(state, id) {

        return RequestManager.get(`${secondrayUrl}users/${id}`)
            .then(response => {

                state(response.data.data);

                return response.data.data;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }


    addUser(data, dispatch, users, navigate) {

        return RequestManager.post(`${secondrayUrl}users`, data)

            .then(response => {

                Swal.success('Added!', `User has been Added.`).then(_ => navigate('/groups/users'));

                return dispatch(setUsers([...users, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }
    editUser(data, id, dispatch, users) {

        return RequestManager.put(`${secondrayUrl}users/${id}`, data)

            .then(response => {

                Swal.success('Added!', `User has been Updated.`)

                const updatedUsers = users.map(user => user?.id == id ? response.data.data : user);

                return dispatch(setUsers(updatedUsers));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    deleteUser(id, dispatch, users) {

        return RequestManager.delete(`${secondrayUrl}users/${id}`)

            .then(response => {

                Swal.success('Deleted!', `User has been deleted.`);

                const updatedUsers = users.filter(user => user?.id != id);

                return dispatch(setUsers(updatedUsers));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Users
}