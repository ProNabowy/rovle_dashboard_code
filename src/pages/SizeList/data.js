import { Size } from "../../apis/apis";
import { TableActions } from "../../components";

const weightBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.weight}</p>

};

const idBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.id}</p>

};
const characterBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.name}</p>

};

const dateateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

const actionsBodyTemplate = (rowData) => {

    const sizeUtility = new Size();

    return <TableActions disableEdit={true} handelDeleteFunction={sizeUtility.deleteSize} rowData={rowData}></TableActions>

};

export {
    weightBodyTemplate,
    characterBodyTemplate,
    dateateBodyTemplate,
    actionsBodyTemplate,
    idBodyTemplate
}