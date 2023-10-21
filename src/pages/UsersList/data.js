import { Users } from "../../apis/apis";
import { TableActions } from "../../components";


export const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};


export const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name}</p>

};

export const emailBodyTemplate = (rowData) => {

    return <p className='mb-1 text-[13px] font-medium'>{rowData.email}</p>

};

export const addressBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData.address}</p>

};

export const cardIdBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData.card_id}</p>

};

export const permissionBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData?.roles[0]?.name || "Under Proccing"}</p>

};

export const lastDateBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData.updated_at}</p>

};


export const actionsBodyTemplate = (rowData) => {

    const usersUtility = new Users();

    return <TableActions handelDeleteFunction={usersUtility.deleteUser} rowData={rowData}></TableActions>

};
