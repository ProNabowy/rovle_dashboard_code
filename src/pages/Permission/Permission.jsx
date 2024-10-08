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

    return (

        <PageContent
            url={'/settings/permissions/list/add-permission'}
            title={'Permisos'}
            showActions={true}
            roleKey={'dashboard.roles.store'}
            columns={columns}
            list={roles}
            table={tableRef}
            saveName={'Roles'}
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
