import { Navigate, useLocation } from "react-router-dom";
import { loggedIn } from "../../assets/utils/utils";

export default function RouteGuard() {

    const isLogin = loggedIn();

    const location = useLocation().pathname;

    const availableRoutes = ['/'];

    const notAvailableRoutes = ['/login', '/register', '/join', '/reset-password'];

    if (isLogin) {
        if (notAvailableRoutes.includes(location)) {
            return <Navigate to={'/'} />;
        }
    } else {
        if (!notAvailableRoutes.includes(location)) {
            return <Navigate to={'/login'} />;
        }
    }

    return null;
}
