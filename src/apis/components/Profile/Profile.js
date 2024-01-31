import { handleLogOut } from "../../../assets/js/utils";
import { RequestManager, Swal, secondrayUrl } from "../../data";

class Profile {

    fetchProfile(state) {

        return RequestManager.get(`${secondrayUrl}profile`)

            .then(response => {

                state(response.data.data);

                return response.data.data;

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    getRoasterProfile(state, dispatch) {

        return RequestManager.get(`${secondrayUrl}profile`)

            .then(response => {

                const user = JSON.parse(localStorage.getItem('user'));

                localStorage.setItem('user', JSON.stringify({ ...user, ...response.data.data }));

                dispatch && dispatch(state([response.data.data?.provider]));

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })

    }

    editProfile(data) {

        return RequestManager.post(`${secondrayUrl}profile`, data, true)

            .then(response => {

                const user = JSON.stringify(response.data?.data);

                localStorage.setItem('user', user);

                Swal.success('Añadido!', `Tu perfil ha sido actualizado.`);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Algo salió mal, por favor inténtalo de nuevo más tarde.`).then(_ => handleLogOut(error?.response));

            })
    }


}

export {
    Profile
}