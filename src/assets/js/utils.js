import axios from "axios";
import Swal from "sweetalert2";


// Ensures that the last clicked time triggers the function to prevent rapid successive calls.
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), 500);
    };
}

// Acsspet List And Get the Current Option Form This List
const getSelectedOption = (list, optionKey, value) => {
    return list?.filter(item => item[optionKey] == value)[0];
}

// To Customize Swal Services
class SwalControlar {

    constructor() {

    }

    success(title, message) {

        return Swal.fire({
            icon: 'success',
            title: title || 'Bien...',
            text: message,
        })

    }

    warning(title, message) {

        return Swal.fire({
            icon: 'warning',
            title: title || 'Advertencia...',
            text: message,
        })

    }

    rejected(title, message) {

        return Swal.fire({
            icon: 'error',
            title: title || 'Oops...',
            text: message,
        });

    }
};

// To Customize axios Services
class SecureRequest {

    constructor(token) {

        this.token = token

    }

    auth(asFormData) {

        return {

            Authorization: `Bearer ${this.token}`,

            'Content-Type': asFormData ? 'multipart/form-data' : 'application/json',
        }

    }

    post(url, data, asFormData) {

        return axios({

            method: 'post',

            url: url,

            data: data,

            headers: this.auth(asFormData),

        })

    }

    get(url) {

        return axios({

            method: 'get',

            url: url,

            headers: this.auth()

        })

    }

    put(url, data) {

        return axios({

            method: 'put',

            url: url,

            data: data,

            headers: this.auth()

        })

    }

    delete(url) {

        return axios({

            method: 'delete',

            url: url,

            headers: {

                Authorization: `Bearer ${this.token}`

            }

        })

    }

}

// Check For User Login
const isLoggedIn = () => {
    return localStorage.getItem('token');
}

// Control User Permissions
const hasPermissions = (arrOfPermissions, arrOfUserPermissions, key) => {

    const objectOfPermissions = {};

    arrOfPermissions?.map(item => {

        const newItem = { id: item?.id, name: item?.name };

        objectOfPermissions[item?.name?.trim()] = item?.id;

        return newItem;

    });

    return arrOfUserPermissions.includes(objectOfPermissions && objectOfPermissions[key?.trim()]);
}

// Handle User Logout
const handleLogOut = (response, userWant) => {

    if (response?.status == 401 || userWant) {

        window.localStorage.clear();

        return window.location.reload();

    }

}


export {
    SecureRequest,
    getSelectedOption,
    isLoggedIn,
    debounce,
    hasPermissions,
    handleLogOut
}

export default SwalControlar;