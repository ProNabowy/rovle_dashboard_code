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

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    fetchSingleOffer(state, id) {

        return RequestManager.get(`${secondrayUrl}passports/${id}`)

            .then(response => {

                state(response.data.data);

                return response.data.data;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    deleteOffer(id, dispatch, offeers) {

        return RequestManager.delete(`${secondrayUrl}passports/${id}`)

            .then(response => {

                Swal.success('Deleted!', `Your Offer has been deleted.`);

                const updatedOffeers = offeers.filter(offer => offer?.id != id);

                return dispatch(setOffeers(updatedOffeers));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }


    addOffer(data, dispatch, offeers) {

        return RequestManager.post(`${secondrayUrl}passports`, data, true)

            .then(response => {

                Swal.success('Added!', `Your Offeer has been Added.`).then(res => window.location.href = "/setups/offers");

                return dispatch(setOffeers([...offeers, response.data.data]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    updateOffer(data, id, dispatch, offeers) {

        return RequestManager.put(`${secondrayUrl}passports/${id}`, data, true)

            .then(response => {

                Swal.success('Updated!', `Your Offeer has been Updated.`);

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