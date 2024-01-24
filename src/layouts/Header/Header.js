import { faAngleDown, faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useDataGetter } from './data'
import { handleLogOut } from '../../assets/js/utils';

export default function Header({ isExpanded, setIsExpanded }) {

    const { visible, handleOpenMnue, user } = useDataGetter();

    return (
        <header className='relative shadow py-3 px-3 mb-5'>

            <div className='container rounded-bl rounded-br flex items-center justify-between'>

                <span className='me-4 cursor-pointer' onClick={_ => setIsExpanded(!isExpanded)}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <path d="M27.9998 16.5C27.9998 16.7652 27.8945 17.0196 27.7069 17.2071C27.5194 17.3947 27.265 17.5 26.9998 17.5H13.9998C13.7346 17.5 13.4802 17.3947 13.2927 17.2071C13.1052 17.0196 12.9998 16.7652 12.9998 16.5C12.9998 16.2348 13.1052 15.9804 13.2927 15.7929C13.4802 15.6054 13.7346 15.5 13.9998 15.5H26.9998C27.265 15.5 27.5194 15.6054 27.7069 15.7929C27.8945 15.9804 27.9998 16.2348 27.9998 16.5ZM13.9998 9.50001H26.9998C27.265 9.50001 27.5194 9.39465 27.7069 9.20711C27.8945 9.01958 27.9998 8.76522 27.9998 8.50001C27.9998 8.23479 27.8945 7.98044 27.7069 7.7929C27.5194 7.60536 27.265 7.50001 26.9998 7.50001H13.9998C13.7346 7.50001 13.4802 7.60536 13.2927 7.7929C13.1052 7.98044 12.9998 8.23479 12.9998 8.50001C12.9998 8.76522 13.1052 9.01958 13.2927 9.20711C13.4802 9.39465 13.7346 9.50001 13.9998 9.50001ZM26.9998 23.5H4.99981C4.73459 23.5 4.48024 23.6054 4.2927 23.7929C4.10517 23.9804 3.99981 24.2348 3.99981 24.5C3.99981 24.7652 4.10517 25.0196 4.2927 25.2071C4.48024 25.3947 4.73459 25.5 4.99981 25.5H26.9998C27.265 25.5 27.5194 25.3947 27.7069 25.2071C27.8945 25.0196 27.9998 24.7652 27.9998 24.5C27.9998 24.2348 27.8945 23.9804 27.7069 23.7929C27.5194 23.6054 27.265 23.5 26.9998 23.5ZM8.99981 18.5C9.19771 18.5002 9.3912 18.4416 9.55579 18.3317C9.72039 18.2219 9.84868 18.0656 9.92443 17.8828C10.0002 17.7 10.02 17.4988 9.98134 17.3047C9.94269 17.1106 9.84732 16.9324 9.70731 16.7925L5.41356 12.5L9.70731 8.20751C9.89495 8.01987 10.0004 7.76537 10.0004 7.50001C10.0004 7.23464 9.89495 6.98015 9.70731 6.79251C9.51967 6.60487 9.26517 6.49945 8.99981 6.49945C8.73445 6.49945 8.47995 6.60487 8.29231 6.79251L3.29231 11.7925C3.19933 11.8854 3.12557 11.9957 3.07525 12.1171C3.02493 12.2385 2.99902 12.3686 2.99902 12.5C2.99902 12.6314 3.02493 12.7615 3.07525 12.8829C3.12557 13.0043 3.19933 13.1146 3.29231 13.2075L8.29231 18.2075C8.38525 18.3003 8.49557 18.374 8.61696 18.4241C8.73836 18.4743 8.86845 18.5001 8.99981 18.5Z" fill="#252525" />
                    </svg>

                </span>

                <div className='relative flex-1 flex items-center'>

                    <div className='flex-1 border rounded-full relative overflow-hidden me-5'>

                        <input type='text' className='w-full p-3 ps-10' placeholder='Search (Ctrl+/)' />

                        <FontAwesomeIcon icon={faSearch} className='absolute left-4 text-[#8B6464] top-[50%] translate-y-[-50%]'></FontAwesomeIcon>

                    </div>

                    <div onClick={handleOpenMnue} className='border rounded-full min-w-[200px] flex items-center justify-between p-2 px-5 cursor-pointer relative'>

                        <img src={`${user?.image}`} alt='' loading='lazy' width={'fit-content'} height={'fit-content'} className='rounded-full w-[39px] h-[39px] me-2' />

                        <div className='me-5'>

                            <h3 className='text-[#252525] text-[13px] font-medium'>{user?.name}</h3>

                            <h6 className='text-[#252525] font-medium text-[12px]'>{user?.roles && user?.roles[0]?.name}</h6>

                        </div>

                        <FontAwesomeIcon icon={faAngleDown} className='text-[#252525] text-[20px] cursor-pointer' />

                        <div className={`absolute w-full shadow-lg z-[100] bg-white border border-t-[transparent] transition left-0 ${visible ? "bottom-[-95px] visible opacity-100" : "bottom-[-150px] opacity-0 invisible"}`}>

                            <Link to={'/profile'} className='flex items-center  p-2 pb-3 border-b-2'>Profile</Link>

                            <button onClick={_ => handleLogOut(null, true)} className='flex items-center p-2 text-[#FF5C34] font-medium'>

                                <FontAwesomeIcon icon={faRightFromBracket} className='me-3' />

                                <p>Logout</p>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </header>
    )
}
