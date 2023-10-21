import { RequestManager, Swal, baseUrl, secondrayUrl } from "../../data";

class Province {


    fetchProvinces(state, dispatch) {

        RequestManager.get(`${baseUrl}provinces`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addProvinces(data) {

        RequestManager.post(`${secondrayUrl}provinces`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Provinces has been Added.`).then(res => window.location.href = "/settings/province/list");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteProvince(id) {

        RequestManager.delete(`${secondrayUrl}provinces/${id}`)

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
    Province
}