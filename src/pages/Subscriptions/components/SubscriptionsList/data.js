import Table from "../../../../assets/js/table"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const tableService = new Table();

const statusBodyTemplate = (rowData) => {
    return <p className={`mb-1 capitalize text-[13px] font-medium ${rowData.status == 'active' ? "text-[#28C76F]" : rowData.status == 'pending' || rowData.status == 'suspended' ? "text-[#C9CC3A]" : "text-[#FF5C34]"}`}> {rowData?.status} </p>
};

const usePackageBodyTemplate = (rowData) => {

    return <FontAwesomeIcon icon={faEye} />

};

const columns = [
    { field: "name", header: "Name", classNames: "!px-[15px]", tamplate: tableService.nameBodyTemplate },
    { field: "address", header: "Address", classNames: "!px-[0px]", tamplate: tableService.addressBodyTemplate },
    { field: "created_at", header: "Start date", classNames: "!px-[15px]", tamplate: tableService.startDateBodyTemplate },
    { field: "updated_at", header: "Last date", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Status", classNames: "!px-[15px]", tamplate: statusBodyTemplate },
    { field: "name", header: "Package", classNames: "!px-[15px]", tamplate: usePackageBodyTemplate },
];


export {
    columns
};