import { useContext, useEffect, useState } from 'react';
import { Delete, Get } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';
import { AppContext } from '../../context/AppContext';
import Table from '../../assets/utils/table';

const tableService = new Table();

const useDataGetter = _ => {

    const [origins, setOrigins] = useState([]);

    const getUtailty = new Get();

    const deleteUtailty = new Delete();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getOrigins()
            .then(response => setOrigins(response))
            .finally(_ => { setIsLoading(false) });

        return () => { };
    }, []);

    const hostBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.commercial_name}</p>
    };

    const useActionsBodyTemplate = (rowData) => {

        return <TableActions
            disableEdit={true}
            handelDeleteFunction={deleteUtailty.deleteOrigin}
            rowData={rowData}
            state={setOrigins}
            deleteKey={'dashboard.origins.destroy'}
            PagePermissionKey={'Origins'}
            list={origins}
        ></TableActions>
    };


    const columns = [
        { field: "id", header: "ID", tamplate: tableService.idBodyTemplate },
        { field: "name", header: "Nombre", tamplate: tableService.nameBodyTemplate },
        { field: "provider.commercial_name", header: "Introducido por", tamplate: hostBodyTemplate },
        { field: "created_at", header: "Fecha", tamplate: tableService.startDateBodyTemplate },
        { field: "status", header: "Acción", tamplate: useActionsBodyTemplate },
    ];

    return { origins, columns }

}

export {
    useDataGetter
}