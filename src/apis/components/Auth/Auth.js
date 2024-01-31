import { RequestManager, Swal } from "../../data";

class PostLogin {

    login(data) {

        return RequestManager.post(`https://rovle.eslamghazy.net/api/v1/auth/login`, data, false).then(response => {

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            Swal.success(null, response?.data?.message).then(response => window.location.href = '/products/list');

        })
            .catch(error => {

                Swal.rejected(null, error?.response?.data?.message || `Los datos proporcionados no son válidos.`);

            })
    }

}

export {
    PostLogin
}