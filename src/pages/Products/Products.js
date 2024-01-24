import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter, } from './data';

export default function ProductsList() {

    const { products } = useDataGetter();

    return (

        <PageContent
            url={'add-product/choose-owner'}
            title={'All Products'}
            showActions={true}
            PermissionsKey={'Products'}
            roleKey={'dashboard.products.store'}
            columns={columns}
            list={products}
            saveName={'Products'}
        >

            <RenderTable columns={columns} list={products} />

        </PageContent>


    )
}
