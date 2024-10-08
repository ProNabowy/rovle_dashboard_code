import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { useDataGetter } from './data';


export default function Orders() {

    const { orders, columns } = useDataGetter();

    const tableRef = useRef();

    return (

        <PageContent
            PermissionsKey={'Orders'}
            roleKey={'dashboard.orders.store'}
            title={'Listado de pedidos'}
            showActions={true}
            columns={columns}
            list={orders}
            table={tableRef}
            saveName={'Orders'}
        >

            <RenderTable columns={columns} list={orders} table={tableRef} />

        </PageContent>

    )
}
