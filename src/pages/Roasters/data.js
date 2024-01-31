import { useSelector } from 'react-redux';
import { Rosters } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';
import Table from '../../assets/js/table';

const tableService = new Table();

const emailBodyTemplate = (rowData) => {
    return <p className='mb-1 text-[13px] font-medium'>{rowData?.user?.email}</p>
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
    { field: "official_name", header: "Nombre oficial", tamplate: officialNameBodyTemplate },
    { field: "manage_stock", header: "Control de inventario", tamplate: stockBodyTemplate },
    { field: "commercial_name", header: "Nombre comercial", tamplate: tableService.roasterNameBodyTemplate },
    { field: "official_name", header: "Correo electrónico", tamplate: emailBodyTemplate },
    { field: "official_name", header: "Ubicaciones", tamplate: tableService.fullLocationBodyTemplate },
    { field: "updated_at", header: "Fecha de finalización", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Acción", tamplate: useActionsBodyTemplate },
];

export {
    columns
}