import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter } from './data';


export default function UsersList() {

    const { users } = useDataGetter();

    return (

        <PageContent
            url={'add-user'}
            title={'List Users'}
            showActions={true}
            PermissionsKey={'Users'}
            roleKey={'dashboard.users.store'}
        >
            <RenderTable columns={columns} list={users} />

        </PageContent>

    )
}
