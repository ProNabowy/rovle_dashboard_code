import TableActions from '../../components/TableActions/TableActions';
import { CoffeeShops } from '../../apis/apis';
import { useSelector } from 'react-redux';
import Table from '../../assets/js/table';

const tableService = new Table();

const postCodeBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.post_code}</p>
};

const useActionsBodyTemplate = (rowData) => {

    const coffeeUtility = new CoffeeShops();

    const shops = useSelector(store => store.shops);

    return <TableActions
        path={`/setups/coffee-shop/edit-coffee?id=${rowData?.id}`}
        handelDeleteFunction={coffeeUtility.deleteCoffee}
        rowData={rowData}
        editKey={'dashboard.coffeeShops.update'}
        deleteKey={'dashboard.coffeeShops.destroy'}
        PagePermissionKey={'Coffee Shops'}
        list={shops}
    ></TableActions>

};

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "Nombre", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
    { field: "post_code", header: "Código postal", classNames: "!px-[15px]", tamplate: postCodeBodyTemplate },
    { field: "address", header: "Dirección", classNames: "!px-[15px]", tamplate: tableService.addressBodyTemplate },
    { field: "address", header: "Ubicaciones", classNames: "!px-[15px]", tamplate: tableService.fullLocationBodyTemplate },
    { field: "updated_at", header: "Fecha de finalización", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Acción", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
];


export {
    columns
}