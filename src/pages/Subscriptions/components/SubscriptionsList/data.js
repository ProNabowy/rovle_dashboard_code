import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../../../assets/js/table";
import { Link } from "react-router-dom";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const tableService = new Table();

const statusBodyTemplate = (rowData) => {
    const status = rowData?.status == 'pending' ? "Pending" : rowData?.status === "processing" ? "Processing" : rowData?.status === 'completed' ? "Completed" : "Cancelled";
    return <p className={`mb-1 capitalize text-[13px] font-medium ${rowData.status == 'pending' ? "text-[#C9CC3A]" : rowData.status == 'processing' ? "text-[#7A3ACC]" : rowData?.status === 'active' ? "text-[#28C76F]" : "text-[#FF5C34]"}`}> {rowData?.status} </p>
};

const usePackageBodyTemplate = (rowData) => {

    return <p className={`mb-1 capitalize text-[13px] font-medium text-[#58291E]`}>{rowData?.plan_size?.size?.weight}Kg = {rowData?.plan_size?.price} Euro</p>

};
const actionBodyTemplate = (rowData) => {

    return (
        <Link to={`/products/plans/subscriptions/manage-package?id=${rowData.id}`}>
            <FontAwesomeIcon icon={faGear} className="text-[#45B8EA]" />
        </Link>
    )

};


const columns = [
    { field: "name", header: "Name", tamplate: tableService.nameBodyTemplate },
    { field: "address", header: "Address", tamplate: tableService.addressBodyTemplate },
    { field: "created_at", header: "Start date", tamplate: tableService.startDateBodyTemplate },
    { field: "updated_at", header: "Last date", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Status", tamplate: statusBodyTemplate },
    { field: "name", header: "Package", tamplate: usePackageBodyTemplate },
    { field: "action", header: "Action", tamplate: actionBodyTemplate },
];


export {
    columns
};