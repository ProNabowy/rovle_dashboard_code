import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { useDataGetter } from './data';


export default function OriginsList() {

    const { origins, columns } = useDataGetter();

    const tableRef = useRef();

    return (
        <PageContent
            url={'add-origin'}
            title={'Todos los Orígenes'}
            PermissionsKey={'Origins'}
            roleKey={'dashboard.origins.store'}
            showActions={true}
            columns={columns}
            list={origins}
            table={tableRef}
            saveName={'Origins'}
        >

            <RenderTable columns={columns} list={origins} table={tableRef} />

        </PageContent>
    )
}
