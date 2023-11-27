import { useSelector } from 'react-redux';
import { Cities } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';
import Table from '../../assets/js/table';

const tableService = new Table();

const provinceBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.province?.name}</p>
};

const useActionsBodyTemplate = (rowData) => {

    const citiesUtility = new Cities();
    const cities = useSelector(store => store.cities);

    return <TableActions
        path={`/settings/cities/list/edit-city?id=${rowData?.id}`}
        handelDeleteFunction={citiesUtility.deleteCity}
        rowData={rowData}
        editKey={'dashboard.cities.update'}
        deleteKey={'dashboard.cities.destroy'}
        PagePermissionKey={'Cities'}
        list={cities}
    ></TableActions>

};

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "Name", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
    { field: "province?.name", header: "Province", classNames: "!px-[15px]", tamplate: provinceBodyTemplate },
    { field: "created_at", header: "Start Date", classNames: "!px-[15px]", tamplate: tableService.startDateBodyTemplate },
    { field: "updated_at", header: "Last Date", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Action", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
];


export {
    columns
}