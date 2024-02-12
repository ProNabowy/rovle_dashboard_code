import { useContext, useState } from "react";
import Auth from "../../apis/Auth";
import { AppContext } from "../../context/AppContext";
import { swal } from "../../apis/apis";

const useDataGetter = () => {

    const [checked, setChecked] = useState(false);

    const index = sessionStorage.getItem('valid-otp') ? 2 : sessionStorage.getItem('email') ? 1 : 0;

    const [activeIndex, setActiveIndex] = useState(index);

    const authUtailty = new Auth();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const { setIsLoading } = useContext(AppContext);

    const handelSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        return authUtailty.forgetPassword({ email: data?.email })
            .then(response => swal.success('Actualizado!', response?.message))
            .then(_ => {
                setActiveIndex(1);
                // Set Email To Session 
                sessionStorage.setItem('email', data?.email);
            })
            .finally(_ => setIsLoading(false));
    }

    return {
        checked,
        setChecked,
        data,
        setData,
        handelSubmit,
        activeIndex,
        setActiveIndex
    }

}

export {
    useDataGetter
}