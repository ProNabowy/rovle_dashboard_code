import { PageContent, RenderTable, TableHeader } from '../../components';
import { columns, useDataGetter } from './data';


export default function PlansList() {

    const { selectedEntries, setSelectedEntries, entries, data } = useDataGetter();

    return (

        <PageContent url={'/products/plans/add-plan'} title={'All Plan'} showActions={true} >

            <TableHeader selectedEntries={selectedEntries} setSelectedEntries={setSelectedEntries} entries={entries} />

            <RenderTable columns={columns} list={data} selectedEntries={selectedEntries} />

        </PageContent>

    )
}
