import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter } from './data';

export default function Province() {

    const { province } = useDataGetter();

    return (

        <PageContent
            url={'add-province'}
            title={'All Province'}
            roleKey={'dashboard.provinces.store'}
            PermissionsKey={'Provinces'}
            showActions={true}
            columns={columns}
            list={province}
            saveName={'Province'}
        >


            <RenderTable columns={columns} list={province} />

        </PageContent>

    )
}
