import { RequestManager, secondrayUrl, Swal } from "../../data";

class Products {

    fetchProducts(state, hasAuth) {

        RequestManager.get(`${secondrayUrl}products`, hasAuth)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {
                console.log(error);
                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addProduct(data) {

        RequestManager.post(`${secondrayUrl}products`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Product has been Added.`).then(res => window.location.href = "/products/list");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteProduct(id) {

        RequestManager.delete(`${secondrayUrl}products/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your Product has been deleted.`).then(resp => window.location.reload());

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })


    }

}

export {
    Products
}