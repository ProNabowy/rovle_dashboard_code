import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { hasPermissions } from '../../assets/js/utils';

export default function PageContent({
    children,
    title,
    showActions,
    url,
    addnewClassNames,
    PermissionsKey,
    roleKey,
}) {

    const user_access = useSelector(store => store?.userPeressmisons);
    const PagePermissions = useSelector(store => store.permissions);

    const isHasPermissions = hasPermissions(PagePermissions[PermissionsKey], user_access, roleKey);

    return (

        <section className='rounded-[20px] my-10' style={{ boxShadow: "rgba(126, 124, 152, 0.1) 0px -2px 8px 3px" }}>

            <div className='p-4 px-10 border-b flex items-center justify-between rounded-tl-[20px] rounded-tr-[20px]' style={{ boxShadow: "0px -2px 4px 0px rgba(126, 124, 152, 0.10)" }}>

                <h1 className='text-[30px] text-[#252525]'>{title}</h1>

                {
                    showActions
                        ?
                        <div className='flex items-center'>

                            <button className='flex items-center py-3 px-8 rounded-full border border-[var(--primary-color)] me-5'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M20.0625 11V20C20.0625 20.3481 19.9242 20.6819 19.6781 20.9281C19.4319 21.1742 19.0981 21.3125 18.75 21.3125H5.25C4.9019 21.3125 4.56806 21.1742 4.32192 20.9281C4.07578 20.6819 3.9375 20.3481 3.9375 20V11C3.9375 10.6519 4.07578 10.3181 4.32192 10.0719C4.56806 9.82577 4.9019 9.68749 5.25 9.68749H7.5C7.64918 9.68749 7.79226 9.74676 7.89775 9.85225C8.00324 9.95773 8.0625 10.1008 8.0625 10.25C8.0625 10.3992 8.00324 10.5423 7.89775 10.6477C7.79226 10.7532 7.64918 10.8125 7.5 10.8125H5.25C5.20027 10.8125 5.15258 10.8322 5.11742 10.8674C5.08225 10.9026 5.0625 10.9503 5.0625 11V20C5.0625 20.0497 5.08225 20.0974 5.11742 20.1326C5.15258 20.1677 5.20027 20.1875 5.25 20.1875H18.75C18.7997 20.1875 18.8474 20.1677 18.8826 20.1326C18.9177 20.0974 18.9375 20.0497 18.9375 20V11C18.9375 10.9503 18.9177 10.9026 18.8826 10.8674C18.8474 10.8322 18.7997 10.8125 18.75 10.8125H16.5C16.3508 10.8125 16.2077 10.7532 16.1023 10.6477C15.9968 10.5423 15.9375 10.3992 15.9375 10.25C15.9375 10.1008 15.9968 9.95773 16.1023 9.85225C16.2077 9.74676 16.3508 9.68749 16.5 9.68749H18.75C19.0981 9.68749 19.4319 9.82577 19.6781 10.0719C19.9242 10.3181 20.0625 10.6519 20.0625 11ZM8.6475 6.89749L11.4375 4.10843V13.25C11.4375 13.3992 11.4968 13.5423 11.6023 13.6477C11.7077 13.7532 11.8508 13.8125 12 13.8125C12.1492 13.8125 12.2923 13.7532 12.3977 13.6477C12.5032 13.5423 12.5625 13.3992 12.5625 13.25V4.10843L15.3525 6.89749C15.404 6.95276 15.4661 6.99708 15.5351 7.02783C15.6041 7.05857 15.6786 7.0751 15.7541 7.07644C15.8296 7.07777 15.9047 7.06388 15.9747 7.03558C16.0447 7.00729 16.1084 6.96519 16.1618 6.91177C16.2152 6.85836 16.2573 6.79473 16.2856 6.72469C16.3139 6.65465 16.3278 6.57963 16.3264 6.5041C16.3251 6.42857 16.3086 6.35409 16.2778 6.28509C16.2471 6.21609 16.2028 6.15399 16.1475 6.10249L12.3975 2.35249C12.292 2.24716 12.1491 2.18799 12 2.18799C11.8509 2.18799 11.708 2.24716 11.6025 2.35249L7.8525 6.10249C7.79724 6.15399 7.75291 6.21609 7.72216 6.28509C7.69142 6.35409 7.67489 6.42857 7.67356 6.5041C7.67222 6.57963 7.68612 6.65465 7.71441 6.72469C7.7427 6.79473 7.78481 6.85836 7.83822 6.91177C7.89164 6.96519 7.95526 7.00729 8.0253 7.03558C8.09534 7.06388 8.17036 7.07777 8.24589 7.07644C8.32142 7.0751 8.3959 7.05857 8.4649 7.02783C8.5339 6.99708 8.596 6.95276 8.6475 6.89749Z" fill="#45B8EA" />
                                </svg>

                                <span className='ms-3 text-[var(--primary-color)] font-medium'>Export</span>

                            </button>

                            {
                                isHasPermissions
                                    ?

                                    <Link className={addnewClassNames} to={url}>

                                        <button className='flex items-center py-3 px-8 rounded-full bg-[var(--primary-color)] text-white  border border-[var(--primary-color)]'>

                                            <FontAwesomeIcon icon={faPlus} className='text-[20px]' />

                                            <span className='ms-3 text-whitefont-medium'>Add New</span>

                                        </button>

                                    </Link>
                                    :
                                    null
                            }

                        </div>
                        :
                        null
                }

            </div>

            <div className='py-10'>

                {children}

            </div>

        </section>

    )
}
