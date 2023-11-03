import { useContext, useEffect, useState } from 'react';
import { Origins } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';
import useCustomEffect from '../../hooks/useCustomEffect/useCustomEffect';
import { AppContext } from '../../components/AppContext/AppContext';

const useDataGetter = _ => {

    const [data, setData] = useState([]);

    const OriginsUtailty = new Origins();

    const { useReplacePagnitToText, useTableEntries } = useCustomEffect();

    const { selectedEntries, setSelectedEntries, entries } = useTableEntries(data);

    useReplacePagnitToText();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        OriginsUtailty.fetchOrigins(setData, true).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

    }, []);

    return { selectedEntries, setSelectedEntries, entries, data }

}

const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

const nameBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name}</p>
};


const hostBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.official_name}</p>
};

const dateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.created_at?.toString()}</p>
};

const actionsBodyTemplate = (rowData) => {

    const OriginsUtailty = new Origins();

    return <TableActions disableEdit={true} handelDeleteFunction={OriginsUtailty.deleteOrigin} rowData={rowData}></TableActions>
};


const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: idBodyTemplate },
    { field: "name", header: "Name", classNames: "!px-[0px]", tamplate: nameBodyTemplate },
    { field: "host", header: "Host", classNames: "!px-[15px]", tamplate: hostBodyTemplate },
    { field: "date", header: "Date", classNames: "!px-[15px]", tamplate: dateBodyTemplate },
    { field: "status", header: "Action", classNames: "!px-[15px]", tamplate: actionsBodyTemplate },
];


export {
    columns,
    useDataGetter
}