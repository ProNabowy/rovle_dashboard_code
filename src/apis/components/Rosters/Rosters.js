import { RequestManager, Swal, baseUrl, secondrayUrl } from "../../data";

class Rosters {


    fetchRosters(state, dispatch) {

        RequestManager.get(`${baseUrl}providers`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addRoaster(data) {

        RequestManager.post(`${secondrayUrl}providers`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Roaster has been Added.`).then(res => window.location.href = "/groups/roasters");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteRoaster(id) {

        RequestManager.delete(`${secondrayUrl}providers/${id}`)

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