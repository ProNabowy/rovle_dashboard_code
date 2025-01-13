import { useRef } from 'react';
import { PageContent, RenderTable, } from '../../components';
import { useDataGetter } from './data';
import { UsersList } from './components';

export default function Permission() {

    const {
        columns,
        roles,
        visible,
        setVisible,
        users,
        setUsers
    } = useDataGetter();

    const tableRef = useRef();

    const exportColumns = roles.map((item) => {
        return {
            ["Nombre del Rol"]: item.name,
            ["Cuentas"]: item.accounts,
            ["Fecha última"]: item.updated_at,
        };
    });

    const exportPDFColumns = [
        {
            title: "Nombre del Rol",
            dataKey: "name",
        },
        {
            title: "Cuentas",
            dataKey: "accounts",
        },
        {
            title: "Fecha última",
            dataKey: "updated_at",
        }
    ]

    return (

        <PageContent
            url={'/settings/permissions/list/add-permission'}
            title={'Permisos'}
            showActions={true}
            roleKey={'dashboard.roles.store'}
            table={tableRef}
            exportedExcelList={exportColumns}
            list={roles}
            exportPDFColumns={exportPDFColumns}
        >

            <RenderTable
                columns={columns}
                list={roles}
                table={tableRef}
            />

            <UsersList
                visible={visible}
                setVisible={setVisible}
                users={users}
                setUsers={setUsers}
            />

        </PageContent>

    )
}
