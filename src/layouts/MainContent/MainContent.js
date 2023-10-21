import BreadcrumbNav from '../BreadcrumbNav/BreadcrumbNav'
import Header from '../Header/Header'
import routes from '../../routes';

export default function MainContent({ isExpanded, setIsExpanded }) {
    return (
        <div className={`bg-[#ffffff] ${isExpanded ? "ms-[260px]" : "ms-[80px]"}`} style={{ transition: "0.5s" }}>

            <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

            <div className='container'>


                <BreadcrumbNav></BreadcrumbNav>

                {routes()}

            </div>

        </div>
    )
}
