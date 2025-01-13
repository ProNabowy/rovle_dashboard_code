import axios from "axios";
import { swal } from "../apis";

export default class Store {

    addRole(data, navigate) {
        return axios.post(`roles`, data).then(response => swal.success('Añadido!', `Se ha añadido el rol.`).then(_ => navigate('/settings/permissions/list')));
    }

    addOrigin(data, navigate) {
        return axios.post(`origins`, data).then(response => {
            swal.success('Añadido!', response.data.message).then(_ => navigate && navigate('/origins/list'));
            return response.data;
        });
    }
    addProduct(data, navigate) {
        return axios.post(`products`, data).then(response => {
            swal.success('Añadido!', response.data.message).then(_ => navigate('/products/list'))
            return response.data;
        });
    }
    addPlan(data, navigate) {
        return axios.post(`plans`, data).then(response => {
            swal.success('Añadido!', response.data.message).then(_ => navigate('/products/plans/list'));
            return response.data;
        });
    }
    acceptSubscription(id, data, navigate) {

        const updateData = data?.map(item => {
            return { ...item, id: item?.presentationId, units: item.units, presentationId: null };
        })

        return axios.post(`subscription/${id}/accept`, { presentations: updateData }).then(response => {
            swal.success('Añadido!', response.data.message).then(_ => navigate('/products/plans/subscriptions'));
            return response.data;
        });
    }
    addSize(data, navigate) {
        return axios.post(`sizes`, data).then(response => {
            swal.success('Añadido!', response.data.message).then(_ => navigate('/products/plans/size/list'));
            return response.data;
        });
    }
    addUser(data, navigate) {
        return axios.post(`users`, data).then(response => {
            swal.success('Añadido!', response.data.message).then(_ => navigate('/groups/users'));
            return response.data;
        });
    }
    addRoaster(data, navigate) {
        return axios.post(`providers`, data).then(response => {
            swal.success('Añadido!', response.data.message).then(_ => navigate('/groups/roasters'));
            return response.data;
        });
    }
    addCoffee(data, navigate) {
        return axios.post(`coffee-shops`, data).then(response => {
            swal.success('Añadido!', response.data.message).then(_ => navigate && navigate('/setups/coffee-shop'))
            return response.data;
        });
    }
    addOffeer(data, navigate) {
        return axios.post(`passports`, data).then(response => {
            swal.success('Añadido!', response.data.message).then(_ => navigate("/setups/offers"));
            return response.data;
        });
    }
    acspetPlan(id) {
        return axios.get(`orders/${id}/deliver`).then(response => {
            if (response.data?.message === "Could not order delivery") {
                swal.warning('Advertencia', `No se pudo solicitar la recogida. Por favor inténtelo mas tarde.`).then(_ => window.location.reload());
            } else {
                swal.success('Envio solicitado', `Hemos informado a Correos para que recoja el envío`).then(_ => window.location.reload());
            }
            return response.data;
        });
    }
    switchOrigin(data) {
        return axios.post(`origins/substitute`, data).then(response => {
            swal.success('Añadido!', response.data.message);
            return response.data;
        });
    }
    actAs(provider_id) {
        return axios.post(`act-as`, { provider_id }).then(response => {
            return window.open(`/products/list?token=${response?.data?.data?.token}`, '_blank');
        });
    }
}
