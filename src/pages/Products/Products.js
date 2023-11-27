import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter, } from './data';

export default function ProductsList() {

    const { products } = useDataGetter();

    return (

        <PageContent
            url={'add-product'}
            title={'All Products'}
            showActions={true}
            PermissionsKey={'Products'}
            roleKey={'dashboard.products.store'} >

            <RenderTable columns={columns} list={products} />

        </PageContent>


    )
}
