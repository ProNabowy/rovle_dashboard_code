import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter } from './data';


export default function UsersList() {

    const { users } = useDataGetter();

    return (

        <PageContent
            url={'add-user'}
            title={'Listar usuarios'}
            showActions={true}
            PermissionsKey={'Users'}
            roleKey={'dashboard.users.store'}
            columns={columns}
            list={users}
            saveName={'Users'}
        >
            <RenderTable columns={columns} list={users} />

        </PageContent>

    )
}
