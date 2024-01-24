import { handleLogOut } from "../../../assets/js/utils";
import { setOrigins } from "../../../store/reduces/origins";
import { RequestManager, secondrayUrl, Swal } from "../../data";

class Origins {

    fetchOrigins(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}origins`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    addOrigin(data, dispatch, origins, navigate) {

        return RequestManager.post(`${secondrayUrl}origins`, data)

            .then(response => {

                Swal.success('Added!', `Your Origin has been Added.`).then(_ => navigate('/origins/list'));

                return dispatch(setOrigins([...origins, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    deleteOrigin(id, dispatch, origins) {

        return RequestManager.delete(`${secondrayUrl}origins/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your coffee has been deleted.`);

                const updatedOrigins = origins.filter(origin => origin?.id != id);

                return dispatch(setOrigins(updatedOrigins));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Origins
}