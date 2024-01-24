import { useEffect, useContext } from "react";
import { Users } from "../../apis/apis";
import { TableActions } from "../../components";
import { AppContext } from "../../components/AppContext/AppContext";
import { setUsers } from "../../store/reduces/users";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../assets/js/table";

const tableService = new Table();

const useDataGetter = _ => {

    const userUtailty = new Users();

    const users = useSelector(store => store.users);

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        userUtailty.fetchUsers(setUsers, dispatch).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

    }, []);

    return { users };

}

const cardIdBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData.card_id}</p>

};

const permissionBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData?.roles && rowData?.roles[0]?.name}</p>

};

const useActionsBodyTemplate = (rowData) => {

    const usersUtility = new Users();

    const users = useSelector(store => store.users);

    return <TableActions
        path={`/groups/users/edit-user?id=${rowData?.id}`}
        handelDeleteFunction={usersUtility.deleteUser}
        rowData={rowData}
        editKey={'dashboard.users.update'}
        deleteKey={'dashboard.users.destroy'}
        PagePermissionKey={'Users'}
        list={users}
    ></TableActions>

};
const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "Name", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
    { field: "email", header: "Email", classNames: "!px-[15px]", tamplate: tableService.emailBodyTemplate },
    { field: "address", header: "Address", classNames: "!px-[15px]", tamplate: tableService.addressBodyTemplate },
    { field: "card_id", header: "Card Id", classNames: "!px-[15px]", tamplate: cardIdBodyTemplate },
    { field: "name", header: "Role", classNames: "!px-[15px]", tamplate: permissionBodyTemplate },
    { field: "updated_at", header: "Last Date", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "actions", header: "Actions", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
];

export {
    useDataGetter,
    columns
}