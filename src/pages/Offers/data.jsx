import { useContext, useEffect, useState } from 'react';
import TableActions from '../../components/TableActions/TableActions';
import { Delete, Get } from '../../apis/apis';
import { AppContext } from '../../context/AppContext';
import Table from '../../assets/utils/table';

const tableService = new Table();

const useDataGetter = _ => {

    const getUtailty = new Get();

    const deleteUtailty = new Delete();

    const [offers, setOffeers] = useState([]);

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getOffeers().then(response => setOffeers(response)).finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    const level_one = offers.filter(item => item?.level_id === 1 || item?.level_id === null);
    const level_two = offers.filter(item => item?.level_id === 2 || item?.level_id === null);
    const level_three = offers.filter(item => item?.level_id === 3 || item?.level_id === null);

    const roasterNameBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.provider?.commercial_name}</p>
    };

    const recurrenBodyTemplate = (rowData) => {

        const recurren = rowData.duration == 0 ? "DIA" : rowData.duration == 1 ? "Week" : rowData?.duration == 2 ? "MES" : rowData?.duration == 3 ? "AÑO" : "UNA VEZ"

        return <p className='mb-1 capitalize text-[13px] font-medium'>{recurren}</p>
    };

    const useActionsBodyTemplate = (rowData) => {

        return <TableActions
            path={`/setups/offers/edit-offer?id=${rowData?.id}`}
            handelDeleteFunction={deleteUtailty.deleteOffeer}
            rowData={rowData}
            editKey={'dashboard.passports.update'}
            deleteKey={'dashboard.passports.destroy'}
            PagePermissionKey={'Passports'}
            state={setOffeers}
            list={offers}
        ></TableActions>

    };

    const lastDateBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.end_date}</p>
    };

    const columns = [
        { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
        { field: "name", header: "Nombre de la oferta", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
        { field: "name", header: "Nombre del tostador", classNames: "!px-[15px]", tamplate: roasterNameBodyTemplate },
        { field: "recurren", header: "Recurrente", classNames: "!px-[15px]", tamplate: recurrenBodyTemplate },
        { field: "created_at", header: "Fecha de inicio", classNames: "!px-[15px]", tamplate: row => tableService.startDateBodyTemplate(row, 'start_date') },
        { field: "updated_at", header: "Fecha de finalización", classNames: "!px-[15px]", tamplate: lastDateBodyTemplate },
        { field: "status", header: "Acción", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
    ];

    return {
        offers,
        level_one,
        level_two,
        level_three,
        columns
    };

}

export {
    useDataGetter
}