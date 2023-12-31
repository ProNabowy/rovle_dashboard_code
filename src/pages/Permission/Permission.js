import { PageContent, RenderTable } from '../../components';
import { useSelector } from 'react-redux';
import { columns } from './data';

export default function Permission() {

    const roles = useSelector(store => store.roles);

    return (

        <PageContent
            url={'/settings/permissions/list/add-permission'}
            title={'Permissions'}
            showActions={true}
            PermissionsKey={'Roles'}
            roleKey={'dashboard.roles.store'}>

            <RenderTable columns={columns} list={roles} />

        </PageContent>

    )
}
