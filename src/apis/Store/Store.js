import axios from "axios";
import { swal } from "../apis";

export default class Store {

    addRole(data, navigate) {
        return axios.post(`roles`, data).then(response => swal.success('Añadido!', `Se ha añadido el rol.`).then(_ => navigate('/settings/permissions/list')));
    }

    addOrigin(data, navigate) {
        return axios.post(`origins`, data).then(response => {
            swal.success('Añadido!', `Tu origen ha sido añadido.`).then(_ => navigate && navigate('/origins/list'));
            return response.data;
        });
    }
    addProduct(data, navigate) {
        return axios.post(`products`, data).then(response => {
            swal.success('Añadido!', `Tu producto ha sido añadido.`).then(_ => navigate('/products/list'))
            return response.data;
        });
    }
    addPlan(data, navigate) {
        return axios.post(`plans`, data).then(response => {
            swal.success('Añadido!', `Tu plan ha sido añadido.`).then(_ => navigate('/products/plans/list'));
            return response.data;
        });
    }
    acceptSubscription(id, data, navigate) {

        const updateData = data.map(item => {
            return { id: item.presentationId, units: item.units };
        })

        return axios.post(`subscription/${id}/accept`, { presentations: updateData }).then(response => {
            swal.success('Añadido!', `Tu paquete de suscripción ha sido añadido.`).then(_ => navigate('/products/plans/subscriptions/list'));
            return response.data;
        });
    }
    addSize(data, navigate) {
        return axios.post(`sizes`, data).then(response => {
            swal.success('Añadido!', `El tamaño ha sido añadido.`).then(_ => navigate('/products/plans/size'));
            return response.data;
        });
    }
    addUser(data, navigate) {
        return axios.post(`users`, data).then(response => {
            swal.success('Añadido!', `El usuario ha sido añadido.`).then(_ => navigate('/groups/users'));
            return response.data;
        });
    }
    addRoaster(data, navigate) {
        return axios.post(`providers`, data).then(response => {
            swal.success('Añadido!', `Tu tostador ha sido añadido.`).then(_ => navigate('/groups/roasters'));
            return response.data;
        });
    }
    addCoffee(data, navigate) {
        return axios.post(`coffee-shops`, data).then(response => {
            swal.success('Añadido!', `Tu café ha sido añadido.`).then(_ => navigate('/setups/coffee-shop'))
            return response.data;
        });
    }
    addOffeer(data, navigate) {
        return axios.post(`passports`, data).then(response => {
            swal.success('Añadido!', `Tu oferta ha sido añadida.`).then(_ => navigate("/setups/offers"));
            return response.data;
        });
    }
}
