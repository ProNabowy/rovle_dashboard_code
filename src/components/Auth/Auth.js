import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "../../assets/js/utils";


export default function Auth() {

    const isLogin = isLoggedIn();

    const arrOfNotAvilableRoutes = ['/login', '/register', '/join',];

    const location = useLocation().pathname;


    return (
        isLogin
            ?
            arrOfNotAvilableRoutes.includes(location)
                ?
                <Navigate to={'/'} />
                :
                null
            :
            <Navigate to={'/login'} />
    )
}
