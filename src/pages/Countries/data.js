import { useSelector } from 'react-redux';
import { Countries } from '../../apis/apis';
import { TableActions } from '../../components';
import Table from '../../assets/js/table';

const tableService = new Table();

const useActionsBodyTemplate = (rowData) => {

    const countries = new Countries();

    const countriesList = useSelector(store => store.countries);

    return <TableActions
        path={`/settings/country/list/edit-country?id=${rowData?.id}`}
        handelDeleteFunction={countries.deleteCountry}
        rowData={rowData}
        editKey={'dashboard.countries.update'}
        deleteKey={'dashboard.countries.destroy'}
        PagePermissionKey={'Countries'}
        list={countriesList}
    ></TableActions>

};

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "nombre", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
    { field: "created_at", header: "Fecha", classNames: "!px-[15px]", tamplate: tableService.startDateBodyTemplate },
    { field: "updated_at", header: "Fecha última", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "estado", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
];


export {
    columns
}