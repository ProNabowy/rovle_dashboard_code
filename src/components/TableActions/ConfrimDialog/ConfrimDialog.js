import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

export default function ConfrimDialog({ classNames, style, confirmShownRef }) {

    const toast = useRef(null);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const accept = () => {
        toast.current.show({ severity: 'success', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        confirmShownRef.current = false // Reset the flag after accepting
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        confirmShownRef.current = false // Reset the flag after rejecting
    };

    const confirm = () => {

        if (isConfirmed) {

            confirmDialog({
                message: 'Are you sure you want to delete this item',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept,
                reject
            });

        }

    };

    useEffect(() => {

        confirm();
        
    }, [isConfirmed]);
    return (
        <Fragment>

            <FontAwesomeIcon
                className={`text-[20px] text-[#FF5C34] cursor-pointer ${classNames}`}
                style={style}
                onClick={() => {
                    setIsConfirmed(true);
                }}
                icon={faTrashCan}
            />
            <Toast ref={toast} />

            <ConfirmDialog />
        </Fragment>
    )
}
