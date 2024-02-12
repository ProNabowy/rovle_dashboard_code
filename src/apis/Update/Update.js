import axios from "axios";
import { swal } from "../apis";

export default class Update {

    updateRole(id, data) {
        return axios.put(`roles/${id}`, data).then(response => swal.success('Updated!', `Permissions has been Updated.`));
    }
    updateProduct(id, data) {
        return axios.put(`products/${id}`, data).then(response => swal.success('Actualizado!', `Tu producto ha sido actualizado.`));
    }
    updatePlan(id, data) {
        return axios.put(`plans/${id}`, data).then(response => swal.success('Actualizado!', `Tu plan ha sido actualizado.`));
    }
    updateUser(id, data) {
        return axios.put(`users/${id}`, data).then(response => swal.success('Actualizado!', `El usuario ha sido actualizado.`));
    }
    updateRoaster(id, data) {
        return axios.put(`providers/${id}`, data).then(response => swal.success('Actualizado!', `Tu tostador ha sido actualizado.`));
    }
    updateCoffee(id, data) {
        return axios.put(`coffee-shops/${id}`, data).then(response => swal.success('Actualizado!', `Tu café ha sido actualizado.`));
    }
    updateOffeer(id, data) {
        return axios.put(`passports/${id}`, data).then(response => swal.success('Actualizado!', `Tu oferta ha sido actualizada.`));
    }
    updateProfile(data) {
        return axios.post(`profile`, data).then(response => swal.success('Actualizado!', `Tu perfil ha sido actualizado.`));
    }

}
