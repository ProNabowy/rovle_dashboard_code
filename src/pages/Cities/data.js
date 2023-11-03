import { Cities } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';


const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name?.slice(0, 100)}</p>
};

const provinceBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.province?.name}</p>

};

const created_atBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.created_at}</p>
};

const updated_atBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

const actionsBodyTemplate = (rowData) => {


    const citiesUtility = new Cities();

    return <TableActions path={`/settings/cities/list/edit-city?id=${rowData?.id}`} handelDeleteFunction={citiesUtility.deleteCity} rowData={rowData}></TableActions>

};

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: idBodyTemplate },
    { field: "name", header: "Name", classNames: "!px-[0px]", tamplate: nameBodyTemplate },
    { field: "province", header: "Province", classNames: "!px-[15px]", tamplate: provinceBodyTemplate },
    { field: "created_at", header: "Start Date", classNames: "!px-[15px]", tamplate: created_atBodyTemplate },
    { field: "updated_at", header: "Last Date", classNames: "!px-[15px]", tamplate: updated_atBodyTemplate },
    { field: "status", header: "Action", classNames: "!px-[15px]", tamplate: actionsBodyTemplate },
];


export {
    columns
}