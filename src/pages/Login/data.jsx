import { useState } from "react";
import { Auth } from "../../apis/apis";

const useDataGetter = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const authUtailty = new Auth();

    const handelSubmit = (e) => {
        e.preventDefault();
        authUtailty.postLogin(data);
    }

    return {
        data,
        setData,
        handelSubmit
    }

}

export {
    useDataGetter
}