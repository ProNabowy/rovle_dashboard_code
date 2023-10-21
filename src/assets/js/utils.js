import axios from "axios";
import Swal from "sweetalert2";

const handelChange = (state, key, value) => {

    return state(perv => ({
        ...perv,
        [key]: value
    }))

};

const renderFlexInputs = (names, placeholders, state, key, asPassword) => {
    return (
        <div className='flex items-center justify-between mb-6'>

            <div className='sm:w-[48%]'>

                <label htmlFor={names[0]} className='text-[18px] text-[#252525] font-medium'>{names[0]}</label>

                <input onChange={e => handelChange(state, key[0], e.target.value)} type={asPassword ? "password" : 'text'} id={names[0]} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={placeholders[0]} />

            </div>

            <div className='sm:w-[48%]'>

                <label htmlFor={names[1]} className='text-[18px] text-[#252525] font-medium'>{names[1]}</label>

                <input type={asPassword ? "password" : 'text'} onChange={e => handelChange(state, key[1], e.target.value)} id={names[1]} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={placeholders[1]} />

            </div>

        </div>
    )
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

            Authorization: `Bearer ${this.token}`

        }

    }

    post(url, data, hasAuth) {

        return axios({

            method: 'post',

            url: url,

            data: data,

            headers: hasAuth ? this.auth() : null

        })

    }

    get(url, hasAuth) {

        return axios({

            method: 'get',

            url: url,

            headers: hasAuth ? this.auth() : null

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



export {
    handelChange,
    renderFlexInputs,
    SecureRequest
}

export default SwalControlar;