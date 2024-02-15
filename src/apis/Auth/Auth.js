import axios from "axios";
import { swal } from "../apis";
import { setSecureCookie } from "../../assets/utils/utils";

export default class Auth {

    postLogin(data) {

        axios.post('https://rovle.eslamghazy.net/api/v1/auth/login', data).then(response => {

            setSecureCookie('token', response.data?.token, 1);
            // set user info to localstorage
            localStorage.setItem('user', JSON.stringify(response.data.user));

            swal.success(null, response?.data?.message).then(response => window.location.href = '/products/list');

            return response.data;

        });

    }

    forgetPassword(data) {
        return axios.post(`https://rovle.eslamghazy.net/api/v1/auth/forgot-password`, data).then(response => response.data);
    }
    verifyOtp(data) {
        return axios.post(`https://rovle.eslamghazy.net/api/v1/auth/verify-otp`, data).then(response => response.data);
    }
    resetPassword(data) {
        return axios.post(`https://rovle.eslamghazy.net/api/v1/auth/reset-password`, data).then(response => response.data);
    }
}
