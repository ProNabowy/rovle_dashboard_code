import { RequestManager, Swal, secondrayUrl } from "../../data";

class Rosters {


    fetchRosters(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}providers`)
            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addRoaster(data) {

        return RequestManager.post(`${secondrayUrl}providers`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Roaster has been Added.`).then(res => window.location.href = "/groups/roasters");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }
    updateRoaster(data, id) {

        return RequestManager.put(`${secondrayUrl}providers/${id}`, data)

            .then(response => {

                Swal.success('Updated!', `Your Roaster has been Updated.`).then(res => window.location.href = "/groups/roasters");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteRoaster(id) {

        return RequestManager.delete(`${secondrayUrl}providers/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your Roaster has been deleted.`).then(resp => window.location.reload());

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })


    }

}

export {
    Rosters
}