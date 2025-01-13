import axios from "axios";
import { swal } from "../apis";

export default class Update {

    constructor() {

        this.headers = {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        }

    }

    updateRole(id, data) {
        return axios.put(`roles/${id}`, data).then(response => swal.success('Actualizado!', `Se ha actualizado el permiso con éxito !`));
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
        return axios.post(`providers/${id}`, { ...data, _method: "PUT" }, this.headers).then(response => swal.success('Actualizado!', `Tu tostador ha sido actualizado.`));
    }
    updateCoffee(id, data) {
        return axios.put(`coffee-shops/${id}`, data).then(response => swal.success('Actualizado!', `Tu café ha sido actualizado.`));
    }
    updateOffeer(id, data) {
        return axios.put(`passports/${id}`, data).then(response => swal.success('Actualizado!', `Tu oferta ha sido actualizada.`));
    }
    updateProfile(data) {
        const includedImage = typeof data?.image === 'object';
        const updateData = includedImage ? data : { ...data };

        !includedImage ? delete updateData?.image : null;

        return axios.post(`profile`, updateData, this.headers).then(response => swal.success('Actualizado!', `Tu perfil ha sido actualizado.`)).then(_ => typeof data?.image === 'object' ? window.location.reload() : null)
    }

    updateOrigin(id, data) {
        return axios.put(`origins/${id}`, data).then(response => swal.success('Actualizado!', `Actualizado exitosamente`));
    }

}
