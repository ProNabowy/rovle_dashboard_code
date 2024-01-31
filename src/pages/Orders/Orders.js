import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter } from './data';


export default function Orders() {

    const { orders } = useDataGetter();

    return (

        <PageContent
            PermissionsKey={'Orders'}
            roleKey={'dashboard.orders.store'}
            title={'Todas las órdenes'}
            showActions={true}
            columns={columns}
            list={orders}
            saveName={'Orders'}
        >

            <RenderTable columns={columns} list={orders} />

        </PageContent>

    )
}
