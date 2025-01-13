import { useEffect, useContext, useState } from "react";
import { Delete, Get } from "../../apis/apis";
import { TableActions } from "../../components";
import Table from "../../assets/utils/table";
import { AppContext } from "../../context/AppContext";

const tableService = new Table();

const useDataGetter = _ => {

    const getUtailty = new Get();

    const deleteUtailty = new Delete();

    const [users, setUsers] = useState([]);

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        getUtailty.getUsers().then(response => setUsers(response)).finally(() => setIsLoading(false));

        return () => { };
    }, []);


    const cardIdBodyTemplate = (rowData) => {

        return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData.card_id}</p>

    };

    const permissionBodyTemplate = (rowData) => {

        return <p className='mb-1 capitalize text-[13px] font-medium '>{rowData?.role_name}</p>

    };

    const useActionsBodyTemplate = (rowData) => {

        return <TableActions
            path={`/groups/users/edit-user?id=${rowData?.id}`}
            handelDeleteFunction={deleteUtailty.deleteUser}
            rowData={rowData}
            editKey={'dashboard.users.update'}
            deleteKey={'dashboard.users.destroy'}
            PagePermissionKey={'Users'}
            state={setUsers}
            list={users}
        ></TableActions>

    };
    const columns = [
        { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
        { field: "name", header: "Nombre", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
        { field: "email", header: "Correo electrónico", classNames: "!px-[15px]", tamplate: tableService.emailBodyTemplate },
        { field: "role_name", header: "Rol", classNames: "!px-[15px]", tamplate: permissionBodyTemplate },
        { field: "updated_at", header: "Fecha de finalización", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
        { field: "actions", header: "Acción", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
    ];

    return { users, columns };

}


export {
    useDataGetter,
}