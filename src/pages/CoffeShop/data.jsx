import TableActions from '../../components/TableActions/TableActions';
import { Delete, Get } from '../../apis/apis';
import Table from '../../assets/utils/table';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const tableService = new Table();

const useDataGetter = () => {

    const getUtailty = new Get();

    const deleteUtailty = new Delete();

    const { setIsLoading } = useContext(AppContext);

    const [shops, setShops] = useState([]);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getCoffees().then(response => setShops(response))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);



    const postCodeBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.post_code}</p>
    };

    const useActionsBodyTemplate = (rowData) => {

        return <TableActions
            path={`/setups/coffee-shop/edit-coffee?id=${rowData?.id}`}
            handelDeleteFunction={deleteUtailty.deleteCoffee}
            rowData={rowData}
            editKey={'dashboard.coffeeShops.update'}
            deleteKey={'dashboard.coffeeShops.destroy'}
            PagePermissionKey={'Coffee Shops'}
            list={shops}
            state={setShops}
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

    return { shops, columns };
}



export {
    useDataGetter
}