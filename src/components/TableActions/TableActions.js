import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hasPermissions } from '../../assets/js/utils';

export default function TableActions({
    rowData,
    handelDeleteFunction,
    disableEdit,
    path,
    PagePermissionKey,
    editKey,
    deleteKey,
    list
}) {

    const dispatch = useDispatch();

    const permissions = useSelector(store => store.permissions);
    const user_access = useSelector(store => store?.userPeressmisons);

    const isHasPermissionToEdit = hasPermissions(permissions[PagePermissionKey], user_access, editKey);
    const isHasPermissionToDelete = hasPermissions(permissions[PagePermissionKey], user_access, deleteKey);

    const handleClick = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            confirmButtonText: 'Yes, delete it!',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {

                handelDeleteFunction && handelDeleteFunction(rowData.id, dispatch, list);

            }
        });
        return;
    }
    return (

        <div className='flex items-center relative '>

            {
                isHasPermissionToEdit
                    ?
                    <Link to={path} className={`cursor-pointer me-5 ms-10 ${disableEdit ? "hidden" : ""}`}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.3103 6.87842L17.1216 2.68873C16.9823 2.5494 16.8169 2.43888 16.6349 2.36348C16.4529 2.28808 16.2578 2.24927 16.0608 2.24927C15.8638 2.24927 15.6687 2.28808 15.4867 2.36348C15.3047 2.43888 15.1393 2.5494 15 2.68873L3.43969 14.25C3.2998 14.3888 3.18889 14.554 3.11341 14.736C3.03792 14.918 2.99938 15.1132 3.00001 15.3103V19.5C3.00001 19.8978 3.15804 20.2793 3.43935 20.5606C3.72065 20.8419 4.10218 21 4.50001 21H8.6897C8.88675 21.0006 9.08197 20.9621 9.26399 20.8866C9.44602 20.8111 9.61122 20.7002 9.75001 20.5603L21.3103 8.99998C21.4496 8.86069 21.5602 8.69531 21.6356 8.5133C21.711 8.33129 21.7498 8.13621 21.7498 7.9392C21.7498 7.74219 21.711 7.5471 21.6356 7.36509C21.5602 7.18308 21.4496 7.01771 21.3103 6.87842ZM4.81032 15L12.75 7.06029L14.3147 8.62498L6.37501 16.5637L4.81032 15ZM4.50001 16.8103L7.1897 19.5H4.50001V16.8103ZM9.00001 19.1897L7.43532 17.625L15.375 9.68529L16.9397 11.25L9.00001 19.1897ZM18 10.1897L13.8103 5.99998L16.0603 3.74998L20.25 7.93873L18 10.1897Z" fill="#0B3772" />
                        </svg>

                    </Link>
                    :
                    null
            }

            {
                isHasPermissionToDelete
                    ?
                    <FontAwesomeIcon onClick={handleClick} className={`text-[20px] text-[#FF5C34] cursor-pointer`} icon={faTrashCan}></FontAwesomeIcon>
                    :
                    null
            }

        </div >
    )
}
