import { Delete, Get } from "../../apis/apis";
import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, } from "@fortawesome/free-solid-svg-icons";
import Table from "../../assets/utils/table";
import { AppContext } from "../../context/AppContext";
import { TableActions } from "../../components";
import { Link } from "react-router-dom";

const useDataGetter = () => {

    const deleteUtility = new Delete();

    const [visible, setVisible] = useState(false);

    const [users, setUsers] = useState([]);

    const getUtility = new Get();

    const [roles, setRoles] = useState([]);

    const { setIsLoading, user } = useContext(AppContext);

    const isProvider = user?.provider

    const tableService = new Table();

    useEffect(() => {

        setIsLoading(true);

        getUtility.getRoles().then(response => setRoles(response)).finally(_ => setIsLoading(false));

        return _ => { };
    }, []);

    const useAccountsBodyTemplate = (rowData) => {

        return <p onClick={() => {

            getUtility.getRolesUsers(rowData.id, setUsers).then(_ => setVisible(true));

        }} className='mb-1 capitalize text-[13px] text-[#58291E] underline cursor-pointer font-medium'>{rowData?.accounts} accounts</p>

    };

    const useActionsBodyTemplate = (rowData) => {

        const roles = ['Admin', 'Provider', 'Waiter', 'Encargado'];


        return (
            rowData?.owner_id
                ?
                <TableActions
                    path={`/settings/permissions/list/edit-permission?id=${rowData?.id}`}
                    handelDeleteFunction={deleteUtility.deleteRole}
                    rowData={rowData}
                    editKey={'dashboard.roles.update'}
                    deleteKey={'dashboard.roles.destroy'}
                    list={roles}
                    state={setRoles}
                ></TableActions>
                :
                <Link to={`/settings/permissions/list/edit-permission?id=${rowData?.id}?status=disable`}>

                    <FontAwesomeIcon icon={faEye} className="cursor-pointer me-5 ms-10" />

                </Link>
        )

    };

    const columns = [
        { field: "name", header: "Nombre del Rol", classNames: "!px-[15px]", tamplate: tableService.nameBodyTemplate },
        { field: "name", header: "Cuentas", classNames: "!px-[0px]", tamplate: useAccountsBodyTemplate },
        { field: "updated_at", header: "Fecha última", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
        { field: "status", header: "Acción", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
    ];

    return {
        columns,
        roles,
        visible,
        setVisible,
        users,
        setUsers
    };
}

export {
    useDataGetter
}