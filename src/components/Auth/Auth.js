import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "../../assets/js/utils";


export default function Auth() {

    const isLogin = isLoggedIn();

    const arrOfNotAvilableRoutes = ['/login', '/register', '/join', '/reset-password'];

    const location = useLocation().pathname;
    console.log(location);

    return (
        isLogin
            ?
            arrOfNotAvilableRoutes.includes(location)
                ?
                <Navigate to={'/'} />
                :
                null
            :
            arrOfNotAvilableRoutes.includes(location)
                ?
                null
                :
                <Navigate to={'/login'} />
    )
}
