import { useSelector } from 'react-redux';
import { Province } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';
import Table from '../../assets/js/table';

const tableService = new Table();

const useActionsBodyTemplate = (rowData) => {

    const ProvinceUtility = new Province();
    const provinces = useSelector(store => store.province);

    return <TableActions
        path={`/settings/province/list/edit-province?id=${rowData?.id}`}
        handelDeleteFunction={ProvinceUtility.deleteProvince}
        rowData={rowData}
        editKey={'dashboard.provinces.update'}
        deleteKey={'dashboard.provinces.destroy'}
        PagePermissionKey={'Provinces'}
        list={provinces}
    >

    </TableActions>

};


const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "Name", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
    { field: "country.name", header: "Country", classNames: "!px-[15px]", tamplate: tableService.countryBodyTemplate },
    { field: "created_at", header: "Date", classNames: "!px-[15px]", tamplate: tableService.startDateBodyTemplate },
    { field: "updated_at", header: "Last Date", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Action", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
];


export {
    columns
};