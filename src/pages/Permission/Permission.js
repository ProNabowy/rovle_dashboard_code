import { PageContent, RenderTable } from '../../components';
import { useSelector } from 'react-redux';
import { columns } from './data';

export default function Permission() {

    const roles = useSelector(store => store.roles);

    return (

        <PageContent
            url={'/settings/permissions/list/add-permission'}
            title={'Permisos'}
            showActions={true}
            PermissionsKey={'Roles'}
            roleKey={'dashboard.roles.store'}
            columns={columns}
            list={roles}
            saveName={'Roles'}
        >

            <RenderTable columns={columns} list={roles} />

        </PageContent>

    )
}
