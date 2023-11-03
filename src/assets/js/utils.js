import axios from "axios";
import Swal from "sweetalert2";

const handelChange = (state, key, value) => {

    return state(perv => ({
        ...perv,
        [key]: value
    }))

};

const handleDropdownChange = (e, state, formik, key) => {
    state(e.value);
    formik?.setFieldValue(key, e.value?.id); // Update the formik values with the selected province ID
}

const getSelectedOption = (list, optionKey, value) => {
    return list?.filter(item => item[optionKey] == value)[0];
}

class SwalControlar {

    constructor() {

    }

    success(title, message) {

        return Swal.fire({
            icon: 'success',
            title: title || 'Good...',
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

class SecureRequest {

    constructor(token) {

        this.token = token

    }

    auth() {

        return {

            Authorization: `Bearer ${this.token}`,

            'Accept': 'applaction/json'

        }

    }

    post(url, data, hasAuth) {

        return axios({

            method: 'post',

            url: url,

            data: data,

            headers: this.auth()

        })

    }

    get(url, hasAuth) {

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

const fireSwal = (icon, title, text, moreOptions) => {
    return Swal.fire({
        icon,
        title,
        text,
        ...moreOptions
    });
}

const isLoggedIn = () => {
    return localStorage.getItem('token');
}



export {
    handelChange,
    SecureRequest,
    handleDropdownChange,
    getSelectedOption,
    fireSwal,
    isLoggedIn
}

export default SwalControlar;