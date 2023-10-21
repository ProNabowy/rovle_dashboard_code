import { Origins } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';

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


export {
    idBodyTemplate,
    nameBodyTemplate,
    hostBodyTemplate,
    dateBodyTemplate,
    actionsBodyTemplate
}