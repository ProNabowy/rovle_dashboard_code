import { handleLogOut } from "../../../assets/js/utils";
import { setProducts } from "../../../store/reduces/products";
import { RequestManager, secondrayUrl, Swal } from "../../data";

class Products {

    fetchProducts(dispatch, state) {

        return RequestManager.get(`${secondrayUrl}products`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }
    getSingleProducts(state, id) {

        return RequestManager.get(`${secondrayUrl}products/${id}`, true)

            .then(response => {

                state(response.data.data);

                return response.data.data;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }
    editProducts(data, id, products, dispatch) {

        return RequestManager.put(`${secondrayUrl}products/${id}`, data, id)

            .then(response => {

                Swal.success('Updated!', `Your Product has been Updated.`);

                const updatedProducts = products.map(product => product?.id == id ? response.data.data : product);

                return dispatch(setProducts(updatedProducts));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    addProduct(data, dispatch, products) {

        return RequestManager.post(`${secondrayUrl}products`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Product has been Added.`);

                return dispatch(setProducts([...products, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    deleteProduct(id, dispatch, products) {

        return RequestManager.delete(`${secondrayUrl}products/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your Product has been deleted.`);

                const updatedProducts = products.filter(product => product?.id != id);

                dispatch(setProducts(updatedProducts));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Products
}