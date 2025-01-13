import axios from "axios";
import { swal } from "../../apis/apis.jsx";
import { getCookie } from "./utils.js";


const useAxiosConfig = () => {

    const sessionToken = sessionStorage.getItem('token');
    // https://rovle.eslamghazy.net/api/dashboard/
    const AUTH_TOKEN = getCookie('token');
    axios.defaults.baseURL = 'https://api.rovle.io/api/dashboard/';
    axios.defaults.headers.common['Authorization'] = `Bearer ${sessionToken || AUTH_TOKEN}`;
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.headers.common['Content-Type'] = 'application/json';

    // Add a response interceptor
    axios.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            // Handle response errors here
            const shouldSkipDefaultError = error.config?.headers?.['disable-default-error'];

            if (shouldSkipDefaultError) {

                return Promise.reject(error);
            }

            if (error.response) {

                const { status } = error.response;

                Promise.reject(error).catch(error => swal.rejected(null, error?.data?.message || error?.response?.data?.error || error?.response?.data?.message || `Algo salió mal. Por favor, inténtelo de nuevo más tarde.`));

            }

            return Promise.reject(error);
        }
    );

    return {};

}

export {
    useAxiosConfig
}