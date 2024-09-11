import axios from "axios";
import { swal } from "../apis";
import { setSecureCookie } from "../../assets/utils/utils";

export default class Auth {

    postLogin(data) {

        axios.post('https://api.rovle.io/api/v1/auth/login', data).then(response => {

            const data = response.data;

            if (data?.user?.has_dashboard_access) {

                setSecureCookie('token', data?.token, 1);
                // set user info to localstorage
                localStorage.setItem('user', JSON.stringify(data.user));

                swal.success(null, response?.data?.message).then(response => window.location.href = '/products/list');

            } else {

                swal.warning('Oops', "No tienes permiso para entrar al panel de control.");

            }

            return data;

        });

    }

    forgetPassword(data) {
        return axios.post(`https://api.rovle.io/api/v1/auth/forgot-password`, data).then(response => response.data);
    }
    verifyOtp(data) {
        return axios.post(`https://api.rovle.io/api/v1/auth/verify-otp`, data).then(response => response.data);
    }
    resetPassword(data) {
        return axios.post(`https://api.rovle.io/api/v1/auth/reset-password`, data).then(response => response.data);
    }
}
