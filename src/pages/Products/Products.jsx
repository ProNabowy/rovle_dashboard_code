import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { useDataGetter, } from './data';

export default function ProductsList() {

    const { products, columns } = useDataGetter();

    const tableRef = useRef();

    return (

        <PageContent
            url={'add-product/choose-owner'}
            title={'Todos los Productos'}
            showActions={true}
            PermissionsKey={'Products'}
            roleKey={'dashboard.products.store'}
            columns={columns}
            table={tableRef}
            list={products}
            saveName={'Products'}
        >

            <RenderTable columns={columns} list={products} table={tableRef} />

        </PageContent>


    )
}
