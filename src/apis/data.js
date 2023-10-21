import SwalControlar, { SecureRequest } from "../assets/js/utils";
const baseUrl = "https://rovle.eslamghazy.net/api/v1/";
const secondrayUrl = 'https://rovle.eslamghazy.net/api/dashboard/'
const token = localStorage.getItem('token');
const Swal = new SwalControlar();
const RequestManager = new SecureRequest(token);

export {
    baseUrl,
    secondrayUrl,
    token,
    Swal,
    RequestManager
}