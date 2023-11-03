import { RequestManager, secondrayUrl, Swal } from "../../data";

class Origins {

    fetchOrigins(state, hasAuth) {

        return RequestManager.get(`${secondrayUrl}origins`, hasAuth)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addOrigin(data) {

        console.log(data);
        return RequestManager.post(`${secondrayUrl}origins`, data, true)
            .then(response => {

                Swal.success('Added!', `Your Origin has been Added.`).then(res => window.location.href = "/origins/list");

                return

            })
            .catch(error => {
                console.log(error);
                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteOrigin(id) {

        return RequestManager.delete(`${secondrayUrl}origins/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your coffee has been deleted.`).then(resp => window.location.reload());

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })


    }

}

export {
    Origins
}