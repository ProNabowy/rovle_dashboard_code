import { baseUrl, RequestManager, Swal } from "../../data";

class PostLogin {

    login(data) {

        RequestManager.post(`${baseUrl}auth/login`, data, false).then(response => {

            localStorage.setItem('token', response.data.token);

            Swal.success(null, `You're Loged in successfuly`).then(response => window.location.href = '/');

        })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `The given Data was invalid`);

            })
    }

}

export {
    PostLogin
}