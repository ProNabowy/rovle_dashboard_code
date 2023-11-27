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

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })

    }

    editProfile(data) {

        return RequestManager.post(`${secondrayUrl}profile`, data, true)

            .then(response => {

                const user = JSON.stringify(response.data?.data);

                localStorage.setItem('user', user);

                Swal.success('Added!', `Your Profile has been Updated.`);

            })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `something wrong please try again later`).then(_ => handleLogOut(error?.response));

            })
    }


}

export {
    Profile
}