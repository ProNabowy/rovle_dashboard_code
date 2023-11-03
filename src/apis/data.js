import SwalControlar, { SecureRequest } from "../assets/js/utils";
const secondrayUrl = 'https://rovle.eslamghazy.net/api/dashboard/'
const token = localStorage.getItem('token');
const Swal = new SwalControlar();
const RequestManager = new SecureRequest(token);

export {
    secondrayUrl,
    token,
    Swal,
    RequestManager
}