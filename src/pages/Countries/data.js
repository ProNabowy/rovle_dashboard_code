import { Countries } from '../../apis/apis';
import { TableActions } from '../../components';

const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

const nameBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name}</p>
};

const dateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.created_at?.toString()}</p>
};

const lastDateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

const actionsBodyTemplate = (rowData) => {

    const countries = new Countries();

    return <TableActions path={`/settings/country/list/edit-country?id=${rowData?.id}`} handelDeleteFunction={countries.deleteCountry} rowData={rowData}></TableActions>

};

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: idBodyTemplate },
    { field: "name", header: "Name", classNames: "!px-[0px]", tamplate: nameBodyTemplate },
    { field: "date", header: "Date", classNames: "!px-[15px]", tamplate: dateBodyTemplate },
    { field: "updated_at", header: "Last Date", classNames: "!px-[15px]", tamplate: lastDateBodyTemplate },
    { field: "status", header: "Action", classNames: "!px-[15px]", tamplate: actionsBodyTemplate },
];


export {
    columns
}