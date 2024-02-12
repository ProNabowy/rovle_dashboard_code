import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { useDataGetter } from './data';


export default function UsersList() {

    const { users, columns } = useDataGetter();

    const tableRef = useRef();

    return (

        <PageContent
            url={'add-user'}
            title={'Miembros del equipo'}
            showActions={true}
            PermissionsKey={'Users'}
            roleKey={'dashboard.users.store'}
            columns={columns}
            list={users}
            table={tableRef}
            saveName={'Users'}
        >
            <RenderTable columns={columns} table={tableRef} list={users} />

        </PageContent>

    )
}
