import { useSelector } from 'react-redux';
import { Rosters } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';
import Table from '../../assets/js/table';

const tableService = new Table();

const emailBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.user?.email}</p>
};

const officialNameBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.official_name}</p>
};

const stockBodyTemplate = (rowData) => {

    return <p className={`mb-1 capitalize text-[13px] font-medium ${rowData.manage_stock ? "text-[#28C76F]" : "text-[#FF5C34]"}`}>{rowData.manage_stock ? "Yes" : "No"}</p>

};

const useActionsBodyTemplate = (rowData) => {

    const roastersUtility = new Rosters();

    const roasters = useSelector(store => store.rosters);

    return <TableActions
        path={`/groups/roasters/edit-roaster?id=${rowData?.id}`}
        handelDeleteFunction={roastersUtility.deleteRoaster}
        rowData={rowData}
        editKey={'dashboard.providers.update'}
        deleteKey={'dashboard.providers.destroy'}
        PagePermissionKey={'Providers'}
        list={roasters}
    ></TableActions>

};

const columns = [
    { field: "id", header: "ID", tamplate: tableService.idBodyTemplate },
    { field: "official_name", header: "Official Name", tamplate: officialNameBodyTemplate },
    { field: "manage_stock", header: "Control of the stock", tamplate: stockBodyTemplate },
    { field: "commercial_name", header: "Commercial Name", tamplate: tableService.roasterNameBodyTemplate },
    { field: "official_name", header: "Email", tamplate: emailBodyTemplate },
    { field: "official_name", header: "Locations", tamplate: tableService.fullLocationBodyTemplate },
    { field: "updated_at", header: "Last Date", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Action", tamplate: useActionsBodyTemplate },
];

export {
    columns
}