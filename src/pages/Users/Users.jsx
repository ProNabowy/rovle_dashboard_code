import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { useDataGetter } from './data';


export default function UsersList() {

    const { users, columns } = useDataGetter();

    const tableRef = useRef();

    const exportColumns = users.map((item) => {
        return {
            ["Nombre"]: item.name,
            ["Correo electrónico"]: item.email,
            ["Rol"]: item?.roles && item?.roles[0]?.name,
            ["Fecha de finalización"]: item.updated_at,
        };
    });

    const exportPDFColumns = [
        {
            title: "Nombre",
            dataKey: "name",
        },
        {
            title: "Correo electrónico",
            dataKey: "email",
        },
        {
            title: "Fecha de finalización",
            dataKey: "updated_at",
        }
    ]


    return (

        <PageContent
            url={'add-user'}
            title={'Miembros del equipo'}
            showActions={true}
            PermissionsKey={'Users'}
            roleKey={'dashboard.users.store'}
            table={tableRef}
            exportedExcelList={exportColumns}
            list={users}
            exportPDFColumns={exportPDFColumns}
        >
            <RenderTable columns={columns} table={tableRef} list={users} />

        </PageContent>

    )
}
