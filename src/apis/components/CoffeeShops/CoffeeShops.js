import { handleLogOut } from "../../../assets/js/utils";
import { setShops } from "../../../store/reduces/shops";
import { RequestManager, secondrayUrl, Swal } from "../../data";

class CoffeeShops {

    fetchCoffees(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}coffee-shops`, true)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    getSingleCoffee(state, id) {

        return RequestManager.get(`${secondrayUrl}coffee-shops/${id}`, true)

            .then(response => {

                state(response.data.data);

                return response.data.data;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    addCoffee(data, dispatch, coffeeShops, navigate) {

        return RequestManager.post(`${secondrayUrl}coffee-shops`, data, true)

            .then(response => {

                Swal.success('Added!', `Your coffee has been Added.`).then(_ => navigate('/setups/coffee-shop'))

                return dispatch(setShops([...coffeeShops, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    editCoffee(data, id, dispatch, shops) {

        return RequestManager.put(`${secondrayUrl}coffee-shops/${id}`, data, true)

            .then(response => {

                Swal.success('Updated!', `Your coffee has been Updated.`)

                const updatedShops = shops.map(shop => shop?.id == id ? response.data.data : shop);

                return dispatch(setShops(updatedShops));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    deleteCoffee(id, dispatch, shops) {

        return RequestManager.delete(`${secondrayUrl}coffee-shops/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your coffee has been deleted.`)

                const updatedShops = shops.filter(shops => shops?.id != id);

                return dispatch(setShops(updatedShops));
            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    CoffeeShops
}