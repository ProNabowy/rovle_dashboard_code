import { PageContent, RenderTable, TableHeader } from '../../components';
import { columns, useDataGetter, } from './data';



export default function ProductsList() {

    const { selectedEntries, setSelectedEntries, entries, products } = useDataGetter();

    return (

        <PageContent url={'add-product'} title={'All Products'} showActions={true}>

            <TableHeader selectedEntries={selectedEntries} setSelectedEntries={setSelectedEntries} entries={entries} />

            <RenderTable columns={columns} list={products} selectedEntries={selectedEntries} />

        </PageContent>

    )
}
