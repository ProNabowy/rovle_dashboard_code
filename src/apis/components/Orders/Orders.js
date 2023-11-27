import { handleLogOut } from "../../../assets/js/utils";
import { RequestManager, Swal, secondrayUrl } from "../../data";

class Orders {

    fetchOrders(state) {

        return RequestManager.get(`${secondrayUrl}orders`)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

}

export {
    Orders
}