import { handleLogOut } from "../../../assets/js/utils";
import { RequestManager, Swal, secondrayUrl } from "../../data";

class Orders {

    fetchOrders(state) {

        return RequestManager.get(`${secondrayUrl}orders`)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

}

export {
    Orders
}