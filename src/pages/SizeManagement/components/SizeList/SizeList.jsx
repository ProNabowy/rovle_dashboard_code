import { PageContent, RenderTable } from '../../../../components';
import { useDataGetter } from './data';
import { useRef } from 'react';

export default function SizeList() {

    const {
        sizes,
        columns
    } = useDataGetter();

    const tableRef = useRef();

    return (
        <PageContent
            url={'/products/plans/size/list/add-size'}
            title={'Gestión de tamaño'}
            showActions={true}
            PermissionsKey={'Sizes'}
            roleKey={'dashboard.sizes.store'}
            columns={columns}
            list={sizes}
            table={tableRef}
            saveName={'Sizes'}
        >

            <RenderTable columns={columns} list={sizes} table={tableRef} />

        </PageContent>
    )
}
