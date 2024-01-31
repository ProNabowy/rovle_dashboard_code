import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter } from './data';


export default function OriginsList() {

    const { origins } = useDataGetter();

    return (
        <PageContent
            url={'add-origin'}
            title={'Todos los Orígenes'}
            PermissionsKey={'Origins'}
            roleKey={'dashboard.origins.store'}
            showActions={true}
            columns={columns}
            list={origins}
            saveName={'Origins'}
        >

            <RenderTable columns={columns} list={origins} />

        </PageContent>
    )
}
