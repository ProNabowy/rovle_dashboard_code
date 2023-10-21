import { Province } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';

export const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

export const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name}</p>
};

export const countryBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.country?.name}</p>

};

export const dateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.created_at}</p>
};

export const lastDateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

export const actionsBodyTemplate = (rowData) => {

    const ProvinceUtility = new Province();

    return <TableActions handelDeleteFunction={ProvinceUtility.deleteProvince} rowData={rowData}></TableActions>


};
