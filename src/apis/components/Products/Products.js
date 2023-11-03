import { RequestManager, secondrayUrl, Swal } from "../../data";

class Products {

    fetchProducts(state, hasAuth) {

        return RequestManager.get(`${secondrayUrl}products`, hasAuth)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }
    getSingleProducts(state, id) {

        return RequestManager.get(`${secondrayUrl}products/${id}`, true)

            .then(response => {

                state(response.data.data);

                return response.data.data;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }
    editProducts(data, id) {

        data.origins = data?.origins.map(item => item?.id || item);
        data.coffeeShops = data?.coffeeShops.map(item => item?.id || item);

        return RequestManager.put(`${secondrayUrl}products/${id}`, data, id)

            .then(response => {

                return Swal.success('Updated!', `Your Product has been Updated.`).then(res => window.location.href = "/products/list");

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addProduct(data) {

        return RequestManager.post(`${secondrayUrl}products`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Product has been Added.`).then(res => window.location.href = "/products/list");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteProduct(id) {

        return RequestManager.delete(`${secondrayUrl}products/${id}`)

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