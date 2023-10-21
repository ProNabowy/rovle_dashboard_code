import { Rosters } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';

export const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};


export const emailBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.user?.email}</p>

};

export const officialNameBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.official_name}</p>
};

export const commercialNameBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.commercial_name}</p>
};

export const locationBodyTemplate = (rowData) => {
    const items = ['Country', 'Provice', 'City'];
    const location = [rowData?.country?.name, rowData?.province?.name, rowData?.city?.name];
    return location?.map((item, index) => {
        return <div className='flex items-center'>
            <p className='capitalize text-[13px] opacity-70 font-medium me-2'>{items[index]}: </p>
            <p key={index} className='mb-1 capitalize text-[13px] font-medium'>{item}</p>

        </div>
    })
};

export const lastDateBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

export const actionsBodyTemplate = (rowData) => {

    const roastersUtility = new Rosters();

    return <TableActions handelDeleteFunction={roastersUtility.deleteRoaster} rowData={rowData}></TableActions>

};