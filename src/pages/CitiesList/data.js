import { Cities } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';


export const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

export const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name?.slice(0 , 100)}</p>
};

export const provinceBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.province?.name}</p>

};

export const created_atBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.created_at}</p>
};

export const updated_atBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

export const actionsBodyTemplate = (rowData) => {


    const citiesUtility = new Cities();

    return <TableActions handelDeleteFunction={citiesUtility.deleteCity} rowData={rowData}></TableActions>

};
