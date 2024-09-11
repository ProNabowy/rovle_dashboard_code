import axios from "axios";
import { swal } from "../apis";

export default class Delete {

    deleteUserFromRole(userID, rowData) {

        return axios.delete(`roles/${userID}/accounts`).then(response => {

            swal.success('Borrado!', `El rol ha sido eliminado.`);

            return response.data

        });

    }
    deleteRole(id, roles, state) {

        return axios.delete(`roles/${id}`).then(response => {

            swal.success('Borrado!', `El rol ha sido eliminado.`);

            return state(perv => perv?.filter(role => role?.id != id));

        });

    }
    deleteProduct(id, products, setProducts) {

        return axios.delete(`products/${id}`).then(response => {

            swal.success('Borrado!', `Tu producto ha sido eliminado.`);

            const updatedProducts = products.filter(product => product?.id != id);

            setProducts(updatedProducts);

            return updatedProducts;
        });

    }
    deleteOrigin(id, origins, setOrigins) {

        return axios.delete(`origins/${id}`).then(response => {

            swal.success('Borrado!', `Tu café ha sido eliminado.`);

            const updatedOrigins = origins.filter(origin => origin?.id != id);

            setOrigins(updatedOrigins);

            return updatedOrigins;
        });

    }
    deletePlan(id, plans, setPlans) {

        return axios.delete(`plans/${id}`).then(response => {

            swal.success('Borrado!', `Tu plan ha sido eliminado.`);

            const updatedPlans = plans.filter(plan => plan?.id != id);

            setPlans(updatedPlans);

            return updatedPlans;
        });

    }
    deleteSize(id, sizes, setSizes) {

        return axios.delete(`sizes/${id}`).then(response => {

            swal.success('Borrado!', `El tamaño ha sido eliminado.`);

            const updatedSizes = sizes.filter(size => size?.id != id);

            setSizes(updatedSizes);

            return updatedSizes;
        });

    }
    deleteUser(id, users, setUsers) {

        return axios.delete(`users/${id}`).then(response => {

            swal.success('Borrado!', `El usuario ha sido eliminado.`);

            const updatedUsers = users.filter(user => user?.id != id);

            setUsers(updatedUsers);

            return updatedUsers;
        });

    }
    deleteRoaster(id, roasters, setRoasters) {

        return axios.delete(`providers/${id}`).then(response => {

            swal.success('Borrado!', `Tu tostador ha sido eliminado.`)

            const updatedRoasters = roasters.filter(roaster => roaster?.id != id);

            setRoasters(updatedRoasters);

            return updatedRoasters;
        });

    }
    deleteCoffee(id, coffees, setCoffees) {

        return axios.delete(`coffee-shops/${id}`).then(response => {

            swal.success('Borrado!', `Tu tostador ha sido eliminado.`);

            const updatedCoffees = coffees.filter(coffee => coffee?.id != id);

            setCoffees(updatedCoffees);

            return updatedCoffees;
        });

    }
    deleteOffeer(id, offeers, setOffeer) {

        return axios.delete(`passports/${id}`).then(response => {

            swal.success('Borrado!', `Tu oferta ha sido eliminada.`);

            const updatedOffeers = offeers.filter(coffee => coffee?.id != id);

            setOffeer(updatedOffeers);

            return updatedOffeers;
        });

    }

    cancelPlan(id) {
        return axios.delete(`orders/${id}`).then(response => {
            swal.success('Cancelado', `El pedido ha sido cancelado con éxito.`).then(_ => window.location.reload());
            return response.data;
        });
    }

}
