import { handleLogOut } from "../../../assets/js/utils";
import { setSizes } from "../../../store/reduces/sizes";
import { RequestManager, Swal, secondrayUrl } from "../../data";

class Size {

    fetchSizes(state) {

        return RequestManager.get(`${secondrayUrl}sizes`)

            .then(response => {

                state(response.data.data);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    fetchSizeByProvider(state, providerId, dispatch) {

        return RequestManager.get(`${secondrayUrl}sizes?provider_id=${providerId}`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }


    addSize(data, dispatch, sizes) {

        return RequestManager.post(`${secondrayUrl}sizes`, data, true)

            .then(response => {

                Swal.success('Added!', `Size has been Added.`);

                return dispatch(setSizes([...sizes, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    deleteSize(id, dispatch, sizes) {

        return RequestManager.delete(`${secondrayUrl}sizes/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Size has been deleted.`)

                const updatedSizes = sizes.filter(size => size?.id != id);
                console.log(updatedSizes, sizes);
                return dispatch(setSizes(updatedSizes));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Size
}