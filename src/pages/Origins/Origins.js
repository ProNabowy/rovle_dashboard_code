import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter } from './data';


export default function OriginsList() {

    const {  origins } = useDataGetter();

    return (
        <PageContent
            url={'add-origin'}
            title={'All Origin'}
            PermissionsKey={'Origins'}
            roleKey={'dashboard.origins.store'}
            showActions={true}>

            <RenderTable columns={columns} list={origins} />

        </PageContent>
    )
}
