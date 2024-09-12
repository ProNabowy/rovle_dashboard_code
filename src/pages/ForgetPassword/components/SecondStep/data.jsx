import { useContext, useState } from "react"
import { AppContext } from "../../../../context/AppContext";
import { Auth } from "../../../../apis/apis";

const useDataGetter = (setActiveIndex) => {

    const [code, setCode] = useState(null);

    const [invalid, setInvalid] = useState(false);

    const email = sessionStorage.getItem('email');

    const { setIsLoading } = useContext(AppContext);

    const authUtailty = new Auth();

    const handelSubmit = (e) => {

        e.preventDefault();

        setIsLoading(true);

        return authUtailty.verifyOtp({ email: email, otp: code })
            .then(_ => {

                setActiveIndex(2);
                console.log(code);
                return sessionStorage.setItem('valid-otp', code.code);

            })
            .catch(_ => setInvalid(true))
            .finally(_ => setIsLoading(false));
    }

    return {
        code,
        setCode,
        handelSubmit,
        email,
        invalid,
        setInvalid
    }
}

export {
    useDataGetter
}