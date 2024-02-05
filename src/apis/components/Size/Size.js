import { handleLogOut } from "../../../assets/js/utils";
import { setSizes } from "../../../store/reduces/sizes";
import { RequestManager, Swal, secondrayUrl } from "../../data";

class Size {

    fetchSizes(state) {

        // return RequestManager.get(`${secondrayUrl}sizes`)

        //     .then(response => {

        //         state(response.data.data);

        //     })
        //     .catch(error => {

        //         Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

        //     })

        const sizes = [
            {
                "id": 1,
                "name": "SM",
                "weight": "500",
            },
            {
                "id": 2,
                "name": "M",
                "weight": "1000",
            },
            {
                "id": 3,
                "name": "L",
                "weight": "2000",
            },
            {
                "id": 4,
                "name": "XL",
                "weight": "3000",
            },
            {
                "id": 4,
                "name": "XXL",
                "weight": "5000",
            },
        ];

        return state(sizes);

    }

    fetchSizeByProvider(state, providerId, dispatch) {

        return RequestManager.get(`${secondrayUrl}sizes?provider_id=${providerId}`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }


    addSize(data, dispatch, sizes, navigate) {

        return RequestManager.post(`${secondrayUrl}sizes`, data, true)

            .then(response => {

                Swal.success('Añadido!', `El tamaño ha sido añadido.`).then(_ => navigate('/products/plans/size'));

                return dispatch(setSizes([...sizes, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    deleteSize(id, dispatch, sizes) {

        return RequestManager.delete(`${secondrayUrl}sizes/${id}`)

            .then(response => {

                Swal.success('Borrado!', `
                El tamaño ha sido eliminado.`)

                const updatedSizes = sizes.filter(size => size?.id != id);

                return dispatch(setSizes(updatedSizes));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })


    }

}

export {
    Size
}