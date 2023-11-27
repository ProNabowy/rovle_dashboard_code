import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter } from './data';


export default function Orders() {

    const { orders } = useDataGetter();

    return (

        <PageContent
            PermissionsKey={'Orders'}
            roleKey={'dashboard.orders.store'}
            title={'All Orders'}
            showActions={true}
        >

            <RenderTable columns={columns} list={orders} />

        </PageContent>

    )
}
