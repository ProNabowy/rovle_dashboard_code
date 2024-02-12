import { Delete, Get } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Table from '../../assets/utils/table';

const tableService = new Table();

const useDataGetter = () => {

    const getUtailty = new Get();

    const deleteUtailty = new Delete();

    const { setIsLoading } = useContext(AppContext);

    const [roasters, setRoasters] = useState([]);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getRoasters().then(response => setRoasters(response))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

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

        return <TableActions
            path={`/groups/roasters/edit-roaster?id=${rowData?.id}`}
            handelDeleteFunction={deleteUtailty.deleteRoaster}
            rowData={rowData}
            editKey={'dashboard.providers.update'}
            deleteKey={'dashboard.providers.destroy'}
            PagePermissionKey={'Providers'}
            state={setRoasters}
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

    return { roasters, columns };
}



export {
    useDataGetter
}