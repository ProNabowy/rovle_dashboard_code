import BreadcrumbNav from '../BreadcrumbNav/BreadcrumbNav'
import { hasPermissions, isLoggedIn } from '../../assets/js/utils';
import { useSelector } from 'react-redux';
import Header from '../Header/Header'
import routes from '../../routes';

export default function MainContent({ isExpanded, setIsExpanded }) {

    const permissions = useSelector(store => store.permissions);
    const user_access = useSelector(store => store?.userPeressmisons);

    const isHasPermissions = (PagePermissions, permissionKey) => hasPermissions(permissions[PagePermissions], user_access, permissionKey);

    const isLogin = isLoggedIn();

    return (
        isLogin
            ?
            <div className={`bg-[#ffffff] ${isExpanded ? "ms-[260px]" : "ms-[80px]"}`} style={{ transition: "0.5s" }}>

                <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

                <div className='container'>

                    <BreadcrumbNav></BreadcrumbNav>

                    {routes(isHasPermissions)}

                </div>

            </div>
            :
            routes(isHasPermissions)
    )
}
