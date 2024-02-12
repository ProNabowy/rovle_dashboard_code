import { useContext, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import Auth from "../../../../apis/Auth";
import { swal } from "../../../../apis/apis";
import { useNavigate } from "react-router-dom";

const useDataGetter = () => {

    const email = sessionStorage.getItem('email');

    const otp = sessionStorage.getItem('valid-otp');

    const [data, setData] = useState({});

    const navigate = useNavigate();

    const { setIsLoading } = useContext(AppContext);

    const authUtailty = new Auth();

    const handleSubmit = (e) => {

        e.preventDefault();

        setIsLoading(true);

        return authUtailty.resetPassword({ ...data, email, otp })
            .then(response => {

                return swal.success('Actualizado!', response?.message)
                    .then(_ => {

                        sessionStorage.clear();
                        return navigate('/login');

                    })

            }).finally(_ => setIsLoading(false));

    }

    return { email, handleSubmit, setData }
}

export {
    useDataGetter
}