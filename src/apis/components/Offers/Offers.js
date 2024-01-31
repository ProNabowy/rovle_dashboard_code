import { handleLogOut } from "../../../assets/js/utils";
import { setOffeers } from "../../../store/reduces/offeers";
import { RequestManager, Swal, secondrayUrl } from "../../data";

class Offers {


    fetchOffers(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}passports`)

            .then(response => {

                dispatch(state(response.data.data));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    fetchSingleOffer(state, id) {

        return RequestManager.get(`${secondrayUrl}passports/${id}`)

            .then(response => {

                state(response.data.data);

                return response.data.data;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    deleteOffer(id, dispatch, offeers) {

        return RequestManager.delete(`${secondrayUrl}passports/${id}`)

            .then(response => {

                Swal.success('Borrado!', `Tu oferta ha sido eliminada.`);

                const updatedOffeers = offeers.filter(offer => offer?.id != id);

                return dispatch(setOffeers(updatedOffeers));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }


    addOffer(data, dispatch, offeers, navigate) {

        return RequestManager.post(`${secondrayUrl}passports`, data, true)

            .then(response => {

                Swal.success('Añadido!', `Tu oferta ha sido añadida.`).then(_ => navigate("/setups/offers"));

                return dispatch(setOffeers([...offeers, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    updateOffer(data, id, dispatch, offeers) {

        return RequestManager.put(`${secondrayUrl}passports/${id}`, data, true)

            .then(response => {

                Swal.success('Actualizado!', `Tu oferta ha sido actualizada.`);

                const updatedOffeers = offeers.map(offer => offer?.id == id ? response.data.data : offer);

                return dispatch(setOffeers(updatedOffeers));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }


}

export {
    Offers
}