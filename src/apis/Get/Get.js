import axios from "axios";

export default class Get {

    getPermissions() {
        return axios.get('permissions').then(response => response.data?.data[0]);
    }
    getProfile() {
        return axios.get('profile').then(response => response.data.data);
    }
    getRoles() {
        return axios.get('roles').then(response => response.data.data);
    }
    getSingleRole(roleId) {
        return axios.get(`roles/${roleId}`).then(response => response.data.data);
    }
    getRolesUsers(roleId, state) {
        return axios.get(`roles/${roleId}/accounts`).then(response => state(response.data.data));
    }
    getProducts() {
        return axios.get(`products`).then(response => response.data.data);
    }
    getSingleProduct(id) {
        return axios.get(`products/${id}`).then(response => response.data.data);
    }
    getRoasters() {
        return axios.get(`providers`).then(response => response.data.data);
    }
    getSingleRoaster(id) {
        return axios.get(`providers/${id}`).then(response => response.data.data);
    }
    getOrigins() {
        return axios.get(`origins`).then(response => response.data.data);
    }
    getPlans() {
        return axios.get(`plans`).then(response => response.data.data);
    }
    getSinglePlan(id) {
        return axios.get(`plans/${id}`).then(response => response.data.data);
    }
    getSizes() {
        return axios.get(`sizes`).then(response => response.data.data);
    }
    getSizeByProvider(id) {
        return axios.get(`sizes?provider_id=${id}`).then(response => response.data.data);
    }
    getSubscriptionsByPlanId(id) {
        return axios.get(`plans/${id}/subscriptions`).then(response => response.data.data);
    }
    getSingleSubscription(id) {
        return axios.get(`subscriptions/${id}`).then(response => response.data.data);
    }
    getPlansByProvider(id) {
        return axios.get(`plans?provider_id=${id}`).then(response => response.data.data);
    }
    getUsers() {
        return axios.get(`users`).then(response => response.data.data);
    }
    getSingleUser(id) {
        return axios.get(`users/${id}`).then(response => response.data.data);
    }
    getCountries() {
        return axios.get(`countries`).then(response => response.data.data);
    }
    getOrders() {
        return axios.get(`orders`).then(response => response.data.data);
    }
    getCoffees() {
        return axios.get(`coffee-shops`).then(response => response.data.data);
    }
    getSingleCoffee(id) {
        return axios.get(`coffee-shops/${id}`).then(response => response.data.data);
    }
    getOffeers() {
        return axios.get(`passports`).then(response => response.data.data);
    }
    getSingleOffeer(id) {
        return axios.get(`passports/${id}`).then(response => response.data.data);
    }
}
