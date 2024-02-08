import { useState } from "react";
import { PostLogin } from "../../apis/apis";

const useDataGetter = () => {

    const [checked, setChecked] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const postLogin = new PostLogin();

    const handelSubmit = (e) => {
        e.preventDefault();
        postLogin.login(data);
    }

    return {
        checked,
        setChecked,
        data,
        setData,
        handelSubmit
    }

}

export {
    useDataGetter
}