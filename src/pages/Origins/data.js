import { useContext, useEffect } from 'react';
import { Origins } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';
import { AppContext } from '../../components/AppContext/AppContext';
import { setOrigins } from '../../store/reduces/origins';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../assets/js/table';

const tableService = new Table();

const useDataGetter = _ => {

    const origins = useSelector(store => store.origins);

    const OriginsUtailty = new Origins();

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        OriginsUtailty.fetchOrigins(setOrigins, dispatch).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

    }, []);

    return { origins }

}

const hostBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.commercial_name}</p>
};

const useActionsBodyTemplate = (rowData) => {

    const OriginsUtailty = new Origins();

    const origins = useSelector(store => store.origins);

    return <TableActions
        disableEdit={true}
        handelDeleteFunction={OriginsUtailty.deleteOrigin}
        rowData={rowData}
        deleteKey={'dashboard.origins.destroy'}
        PagePermissionKey={'Origins'}
        list={origins}
    ></TableActions>
};


const columns = [
    { field: "id", header: "ID", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "Nombre", tamplate: tableService.nameBodyTemplate },
    { field: "provider.commercial_name", header: "Anfitrión", tamplate: hostBodyTemplate },
    { field: "created_at", header: "Fecha", tamplate: tableService.startDateBodyTemplate },
    { field: "status", header: "Acción", tamplate: useActionsBodyTemplate },
];


export {
    columns,
    useDataGetter
}