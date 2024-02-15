import axios from "axios";
import { swal } from "../../apis/apis.jsx";
import { getCookie } from "./utils.js";


const useAxiosConfig = () => {

    const AUTH_TOKEN = getCookie('token');
    axios.defaults.baseURL = 'https://rovle.eslamghazy.net/api/dashboard/';
    axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.headers.common['Content-Type'] = 'application/json';

    // Add a response interceptor
    axios.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            // Handle response errors here

            if (error.response) {
                const { status } = error.response;

                Promise.reject(error).catch(error => swal.rejected(null, error?.data?.message || error?.response?.data?.error || error?.response?.data?.message || `Something went wrong. Please try again later.`));

            }

            return Promise.reject(error);
        }
    );

    return {};

}

export {
    useAxiosConfig
}