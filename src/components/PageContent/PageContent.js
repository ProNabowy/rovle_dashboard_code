import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { hasPermissions } from '../../assets/js/utils';
import useExportTable from '../../hooks/ExportTable/useExportTable';

export default function PageContent({
    children,
    title,
    showActions,
    url,
    addnewClassNames,
    PermissionsKey,
    roleKey,
    list,
    columns,
    saveName
}) {

    const user_access = useSelector(store => store?.userPeressmisons);
    const PagePermissions = useSelector(store => store.permissions);
    const isHasPermissions = hasPermissions(PagePermissions[PermissionsKey], user_access, roleKey);

    const [visible, setVisible] = useState(false);

    const { exportPDF, exportExcel } = useExportTable(columns, list, saveName);


    return (

        <section className='rounded-[20px] my-10' style={{ boxShadow: "rgba(126, 124, 152, 0.1) 0px -2px 8px 3px" }}>

            <div className='p-4 px-10 border-b flex items-center justify-between rounded-tl-[20px] rounded-tr-[20px]' style={{ boxShadow: "0px -2px 4px 0px rgba(126, 124, 152, 0.10)" }}>

                <h1 className='text-[30px] text-[#252525]'>{title}</h1>

                {
                    showActions
                        ?
                        <div className='flex items-center'>

                            <div className='relative'>

                                <button onClick={_ => setVisible(perv => !perv)} className='flex items-center relative z-30 bg-white py-3 px-8 rounded-full border border-[var(--primary-color)] me-5'>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M20.0625 11V20C20.0625 20.3481 19.9242 20.6819 19.6781 20.9281C19.4319 21.1742 19.0981 21.3125 18.75 21.3125H5.25C4.9019 21.3125 4.56806 21.1742 4.32192 20.9281C4.07578 20.6819 3.9375 20.3481 3.9375 20V11C3.9375 10.6519 4.07578 10.3181 4.32192 10.0719C4.56806 9.82577 4.9019 9.68749 5.25 9.68749H7.5C7.64918 9.68749 7.79226 9.74676 7.89775 9.85225C8.00324 9.95773 8.0625 10.1008 8.0625 10.25C8.0625 10.3992 8.00324 10.5423 7.89775 10.6477C7.79226 10.7532 7.64918 10.8125 7.5 10.8125H5.25C5.20027 10.8125 5.15258 10.8322 5.11742 10.8674C5.08225 10.9026 5.0625 10.9503 5.0625 11V20C5.0625 20.0497 5.08225 20.0974 5.11742 20.1326C5.15258 20.1677 5.20027 20.1875 5.25 20.1875H18.75C18.7997 20.1875 18.8474 20.1677 18.8826 20.1326C18.9177 20.0974 18.9375 20.0497 18.9375 20V11C18.9375 10.9503 18.9177 10.9026 18.8826 10.8674C18.8474 10.8322 18.7997 10.8125 18.75 10.8125H16.5C16.3508 10.8125 16.2077 10.7532 16.1023 10.6477C15.9968 10.5423 15.9375 10.3992 15.9375 10.25C15.9375 10.1008 15.9968 9.95773 16.1023 9.85225C16.2077 9.74676 16.3508 9.68749 16.5 9.68749H18.75C19.0981 9.68749 19.4319 9.82577 19.6781 10.0719C19.9242 10.3181 20.0625 10.6519 20.0625 11ZM8.6475 6.89749L11.4375 4.10843V13.25C11.4375 13.3992 11.4968 13.5423 11.6023 13.6477C11.7077 13.7532 11.8508 13.8125 12 13.8125C12.1492 13.8125 12.2923 13.7532 12.3977 13.6477C12.5032 13.5423 12.5625 13.3992 12.5625 13.25V4.10843L15.3525 6.89749C15.404 6.95276 15.4661 6.99708 15.5351 7.02783C15.6041 7.05857 15.6786 7.0751 15.7541 7.07644C15.8296 7.07777 15.9047 7.06388 15.9747 7.03558C16.0447 7.00729 16.1084 6.96519 16.1618 6.91177C16.2152 6.85836 16.2573 6.79473 16.2856 6.72469C16.3139 6.65465 16.3278 6.57963 16.3264 6.5041C16.3251 6.42857 16.3086 6.35409 16.2778 6.28509C16.2471 6.21609 16.2028 6.15399 16.1475 6.10249L12.3975 2.35249C12.292 2.24716 12.1491 2.18799 12 2.18799C11.8509 2.18799 11.708 2.24716 11.6025 2.35249L7.8525 6.10249C7.79724 6.15399 7.75291 6.21609 7.72216 6.28509C7.69142 6.35409 7.67489 6.42857 7.67356 6.5041C7.67222 6.57963 7.68612 6.65465 7.71441 6.72469C7.7427 6.79473 7.78481 6.85836 7.83822 6.91177C7.89164 6.96519 7.95526 7.00729 8.0253 7.03558C8.09534 7.06388 8.17036 7.07777 8.24589 7.07644C8.32142 7.0751 8.3959 7.05857 8.4649 7.02783C8.5339 6.99708 8.596 6.95276 8.6475 6.89749Z" fill="#45B8EA" />
                                    </svg>

                                    <span className='ms-3 text-[var(--primary-color)] font-medium'>Exportar</span>

                                </button>

                                <ul className={`shadow-lg p-2 pb-0 transition bg-white left-[-10px] mt-[-5px] rounded-[5px] absolute z-20 w-full ${visible ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"}`}>

                                    <li onClick={exportPDF} className='flex items-center cursor-pointer p-2 mb-1 border-b text-[14px]'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 14.25C21 14.4489 20.921 14.6397 20.7803 14.7803C20.6397 14.921 20.4489 15 20.25 15H18V16.5H19.5C19.6989 16.5 19.8897 16.579 20.0303 16.7197C20.171 16.8603 20.25 17.0511 20.25 17.25C20.25 17.4489 20.171 17.6397 20.0303 17.7803C19.8897 17.921 19.6989 18 19.5 18H18V19.5C18 19.6989 17.921 19.8897 17.7803 20.0303C17.6397 20.171 17.4489 20.25 17.25 20.25C17.0511 20.25 16.8603 20.171 16.7197 20.0303C16.579 19.8897 16.5 19.6989 16.5 19.5V14.25C16.5 14.0511 16.579 13.8603 16.7197 13.7197C16.8603 13.579 17.0511 13.5 17.25 13.5H20.25C20.4489 13.5 20.6397 13.579 20.7803 13.7197C20.921 13.8603 21 14.0511 21 14.25ZM8.625 16.125C8.625 16.8212 8.34844 17.4889 7.85616 17.9812C7.36387 18.4734 6.69619 18.75 6 18.75H5.25V19.5C5.25 19.6989 5.17098 19.8897 5.03033 20.0303C4.88968 20.171 4.69891 20.25 4.5 20.25C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25C3.75 14.0511 3.82902 13.8603 3.96967 13.7197C4.11032 13.579 4.30109 13.5 4.5 13.5H6C6.69619 13.5 7.36387 13.7766 7.85616 14.2688C8.34844 14.7611 8.625 15.4288 8.625 16.125ZM7.125 16.125C7.125 15.8266 7.00647 15.5405 6.7955 15.3295C6.58452 15.1185 6.29837 15 6 15H5.25V17.25H6C6.29837 17.25 6.58452 17.1315 6.7955 16.9205C7.00647 16.7095 7.125 16.4234 7.125 16.125ZM15.375 16.875C15.375 17.7701 15.0194 18.6285 14.3865 19.2615C13.7535 19.8944 12.8951 20.25 12 20.25H10.5C10.3011 20.25 10.1103 20.171 9.96967 20.0303C9.82902 19.8897 9.75 19.6989 9.75 19.5V14.25C9.75 14.0511 9.82902 13.8603 9.96967 13.7197C10.1103 13.579 10.3011 13.5 10.5 13.5H12C12.8951 13.5 13.7535 13.8556 14.3865 14.4885C15.0194 15.1215 15.375 15.9799 15.375 16.875ZM13.875 16.875C13.875 16.3777 13.6775 15.9008 13.3258 15.5492C12.9742 15.1975 12.4973 15 12 15H11.25V18.75H12C12.4973 18.75 12.9742 18.5525 13.3258 18.2008C13.6775 17.8492 13.875 17.3723 13.875 16.875ZM3.75 10.5V3.75C3.75 3.35218 3.90804 2.97064 4.18934 2.68934C4.47064 2.40804 4.85218 2.25 5.25 2.25H14.25C14.3485 2.24992 14.4461 2.26926 14.5371 2.3069C14.6282 2.34454 14.7109 2.39975 14.7806 2.46938L20.0306 7.71938C20.1003 7.78908 20.1555 7.87182 20.1931 7.96286C20.2307 8.05391 20.2501 8.15148 20.25 8.25V10.5C20.25 10.6989 20.171 10.8897 20.0303 11.0303C19.8897 11.171 19.6989 11.25 19.5 11.25C19.3011 11.25 19.1103 11.171 18.9697 11.0303C18.829 10.8897 18.75 10.6989 18.75 10.5V9H14.25C14.0511 9 13.8603 8.92098 13.7197 8.78033C13.579 8.63968 13.5 8.44891 13.5 8.25V3.75H5.25V10.5C5.25 10.6989 5.17098 10.8897 5.03033 11.0303C4.88968 11.171 4.69891 11.25 4.5 11.25C4.30109 11.25 4.11032 11.171 3.96967 11.0303C3.82902 10.8897 3.75 10.6989 3.75 10.5ZM15 7.5H17.6897L15 4.81031V7.5Z" fill="#7C7C7C" />
                                        </svg>

                                        <span>Como PDF</span>

                                    </li>

                                    <li onClick={exportExcel} className='flex items-center cursor-pointer p-2 text-[14px]'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M18.75 2.25H6.75C6.35218 2.25 5.97064 2.40804 5.68934 2.68934C5.40804 2.97064 5.25 3.35218 5.25 3.75V6H3.75C3.35218 6 2.97064 6.15804 2.68934 6.43934C2.40804 6.72064 2.25 7.10218 2.25 7.5V16.5C2.25 16.8978 2.40804 17.2794 2.68934 17.5607C2.97064 17.842 3.35218 18 3.75 18H5.25V20.25C5.25 20.6478 5.40804 21.0294 5.68934 21.3107C5.97064 21.592 6.35218 21.75 6.75 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V3.75C20.25 3.35218 20.092 2.97064 19.8107 2.68934C19.5294 2.40804 19.1478 2.25 18.75 2.25ZM15 9.75H18.75V14.25H15V9.75ZM18.75 8.25H15V7.5C15 7.10218 14.842 6.72064 14.5607 6.43934C14.2794 6.15804 13.8978 6 13.5 6V3.75H18.75V8.25ZM6.75 3.75H12V6H6.75V3.75ZM3.75 7.5H13.5V14.9841C13.5 14.9897 13.5 14.9944 13.5 15C13.5 15.0056 13.5 15.0103 13.5 15.0159V16.5H3.75V7.5ZM6.75 18H12V20.25H6.75V18ZM13.5 20.25V18C13.8978 18 14.2794 17.842 14.5607 17.5607C14.842 17.2794 15 16.8978 15 16.5V15.75H18.75V20.25H13.5ZM6.17344 13.77L7.64906 12L6.17344 10.23C6.04613 10.0771 5.98479 9.87986 6.0029 9.68172C6.02101 9.48358 6.11709 9.30074 6.27 9.17344C6.42291 9.04613 6.62014 8.98479 6.81828 9.0029C7.01642 9.02101 7.19926 9.11709 7.32656 9.27L8.625 10.8281L9.92344 9.27C9.98647 9.19428 10.0638 9.13173 10.151 9.0859C10.2382 9.04007 10.3336 9.01186 10.4317 9.0029C10.5298 8.99393 10.6287 9.00438 10.7228 9.03364C10.8169 9.0629 10.9043 9.1104 10.98 9.17344C11.0557 9.23647 11.1183 9.3138 11.1641 9.40101C11.2099 9.48822 11.2381 9.58361 11.2471 9.68172C11.2561 9.77983 11.2456 9.87875 11.2164 9.97282C11.1871 10.0669 11.1396 10.1543 11.0766 10.23L9.60094 12L11.0766 13.77C11.2039 13.9229 11.2652 14.1201 11.2471 14.3183C11.229 14.5164 11.1329 14.6993 10.98 14.8266C10.8271 14.9539 10.6299 15.0152 10.4317 14.9971C10.2336 14.979 10.0507 14.8829 9.92344 14.73L8.625 13.1719L7.32656 14.73C7.19926 14.8829 7.01642 14.979 6.81828 14.9971C6.62014 15.0152 6.42291 14.9539 6.27 14.8266C6.11709 14.6993 6.02101 14.5164 6.0029 14.3183C5.98479 14.1201 6.04613 13.9229 6.17344 13.77Z" fill="#7C7C7C" />
                                        </svg>

                                        <span>Como hoja de Excel</span>

                                    </li>

                                </ul>

                            </div>

                            {
                                isHasPermissions
                                    ?

                                    <Link className={addnewClassNames} to={url}>

                                        <button className='flex items-center py-3 px-8 rounded-full bg-[var(--primary-color)] text-white  border border-[var(--primary-color)]'>

                                            <FontAwesomeIcon icon={faPlus} className='text-[20px]' />

                                            <span className='ms-3 text-whitefont-medium'>Añadir nuevo</span>

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
