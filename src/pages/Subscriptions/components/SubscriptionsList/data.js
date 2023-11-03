import { Fragment, useContext, useState } from "react";

import Packages from "../Packages";

const addressBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.address}</p>

};

const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.name}</p>

};

const startDateteBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.created_at}</p>
};

const endDateteBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

const statusBodyTemplate = (rowData) => {

    const status = rowData.is_active == 1 ? "Available" : rowData.is_active == 0 ? "Suspended" : "Closed";

    return <p className={`mb-1 capitalize text-[13px] font-medium ${rowData.status == 'active' ? "text-[#28C76F]" : rowData.status == 'pending' || rowData.status == 'suspended' ? "text-[#C9CC3A]" : "text-[#FF5C34]"}`}> {rowData?.status} </p>
};

const usePackageBodyTemplate = (rowData) => {

    const [visible, setVisible] = useState(false);

    return <Fragment>

        <p onClick={() => setVisible(true)} className='mb-1 capitalize text-[13px] font-medium text-[#58291E] underline cursor-pointer'>
            {
                rowData?.presentations?.length
                    ?
                    rowData?.presentations[0].name
                    :
                    "Add Package"
            }
        </p>

        <Packages rowData={rowData} visible={visible} setVisible={setVisible} />

    </Fragment>

};

const columns = [
    { field: "name", header: "Name", classNames: "!px-[15px]", tamplate: nameBodyTemplate },
    { field: "address", header: "Address", classNames: "!px-[0px]", tamplate: addressBodyTemplate },
    { field: "start-date", header: "Start date", classNames: "!px-[15px]", tamplate: startDateteBodyTemplate },
    { field: "end-date", header: "Last date", classNames: "!px-[15px]", tamplate: endDateteBodyTemplate },
    { field: "status", header: "Status", classNames: "!px-[15px]", tamplate: statusBodyTemplate },
    { field: "package", header: "package", classNames: "!px-[15px]", tamplate: usePackageBodyTemplate },
];


export {
    columns
};