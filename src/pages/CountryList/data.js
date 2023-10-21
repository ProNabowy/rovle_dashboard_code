import { Countries } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';

export const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

export const nameBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name}</p>
};


export const dateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.created_at?.toString()}</p>
};

export const lastDateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

export const actionsBodyTemplate = (rowData) => {

    const countries = new Countries();

    return <TableActions handelDeleteFunction={countries.deleteCountry} rowData={rowData}></TableActions>
};
