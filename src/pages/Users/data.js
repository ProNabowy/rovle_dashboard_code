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
    { field: "name", header: "Nombre", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
    { field: "email", header: "Correo electrónico", classNames: "!px-[15px]", tamplate: tableService.emailBodyTemplate },
    { field: "address", header: "Dirección", classNames: "!px-[15px]", tamplate: tableService.addressBodyTemplate },
    { field: "card_id", header: "Identificación de tarjeta", classNames: "!px-[15px]", tamplate: cardIdBodyTemplate },
    { field: "name", header: "Rol", classNames: "!px-[15px]", tamplate: permissionBodyTemplate },
    { field: "updated_at", header: "Fecha de finalización", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "actions", header: "Acción", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
];

export {
    useDataGetter,
    columns
}