import { handleLogOut } from "../../../assets/js/utils";
import { RequestManager, secondrayUrl, Swal } from "../../data";

class Permissions {

    fetchPermissions(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}permissions`, true)

            .then(response => {

                dispatch(state(response.data?.data[0]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(() => handleLogOut(error?.response));

            })

    }

}


export {
    Permissions
}