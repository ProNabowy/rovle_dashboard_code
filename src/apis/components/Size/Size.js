import { RequestManager, Swal, secondrayUrl } from "../../data";

class Size {


    fetchSizes(state) {

        return RequestManager.get(`${secondrayUrl}sizes`, true)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {
                console.log(error);
                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    fetchSizeByProvider(state, providerId, hasAuth) {

        return RequestManager.get(`${secondrayUrl}providers/${providerId}/sizes`, hasAuth)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {
                console.log(error);
                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }


    addSize(data) {

        return RequestManager.post(`${secondrayUrl}sizes`, data, true)

            .then(response => {

                Swal.success('Added!', `Size has been Added.`).then(res => window.location.href = '/products/plans/size/list');

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteSize(id) {

        return RequestManager.delete(`${secondrayUrl}sizes/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Size has been deleted.`).then(resp => window.location.reload());

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })


    }

}

export {
    Size
}