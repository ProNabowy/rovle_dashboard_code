import { useEffect, useContext, useState } from "react";
import { Users } from "../../apis/apis";
import { TableActions } from "../../components";
import { useCustomEffect } from "../../hooks";
import { AppContext } from "../../components/AppContext/AppContext";

const useDataGetter = _ => {

    const userUtailty = new Users();

    const [data, setData] = useState([]);

    const { useReplacePagnitToText, useTableEntries } = useCustomEffect();

    const { selectedEntries, setSelectedEntries, entries } = useTableEntries(data);

    useReplacePagnitToText();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        userUtailty.fetchUsers(setData, true).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

    }, []);

    return { selectedEntries, setSelectedEntries, entries, data };

}


const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};


const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name}</p>

};

const emailBodyTemplate = (rowData) => {

    return <p className='mb-1 text-[13px] font-medium'>{rowData.email}</p>

};

const addressBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData.address}</p>

};

const cardIdBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData.card_id}</p>

};

const permissionBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData?.roles[0]?.name}</p>

};

const lastDateBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData.updated_at}</p>

};


const actionsBodyTemplate = (rowData) => {

    const usersUtility = new Users();

    return <TableActions path={`/groups/users/edit-user?id=${rowData?.id}`} handelDeleteFunction={usersUtility.deleteUser} rowData={rowData}></TableActions>

};
const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: idBodyTemplate },
    { field: "name", header: "Name", classNames: "!px-[0px]", tamplate: nameBodyTemplate },
    { field: "email", header: "Email", classNames: "!px-[15px]", tamplate: emailBodyTemplate },
    { field: "address", header: "Address", classNames: "!px-[15px]", tamplate: addressBodyTemplate },
    { field: "cardId", header: "Card Id", classNames: "!px-[15px]", tamplate: cardIdBodyTemplate },
    { field: "role", header: "Role", classNames: "!px-[15px]", tamplate: permissionBodyTemplate },
    { field: "lastDate", header: "Last Date", classNames: "!px-[15px]", tamplate: lastDateBodyTemplate },
    { field: "actions", header: "Actions", classNames: "!px-[15px]", tamplate: actionsBodyTemplate },
];

export {
    useDataGetter,
    columns
}