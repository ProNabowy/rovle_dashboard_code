import { RequestManager, secondrayUrl, Swal } from "../../data";

class CoffeeShops {

    fetchCoffees(state) {

        return RequestManager.get(`${secondrayUrl}coffee-shops`, true)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    addCoffee(data) {

        return RequestManager.post(`${secondrayUrl}coffee-shops`, data, true)

            .then(response => {

                Swal.success('Added!', `Your coffee has been Added.`).then(res => window.location.href = "/setups/coffee-shop");

                return

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`);

            })

    }

    deleteCoffee(id) {

        return RequestManager.delete(`${secondrayUrl}coffee-shops/${id}`)

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
    CoffeeShops
}