import { Roles } from "../../apis/apis";
import { TableActions } from "../../components";

const accountsBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.user?.email}</p>

};

const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.user?.name}</p>

};

const dateateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

const actionsBodyTemplate = (rowData) => {

    const rolesUtility = new Roles();

    return <TableActions handelDeleteFunction={rolesUtility.deleteRole} rowData={rowData}></TableActions>

};



export {
    accountsBodyTemplate,
    nameBodyTemplate,
    dateateBodyTemplate,
    actionsBodyTemplate
}