import { PageContent, RenderTable, TableHeader } from '../../components';
import { columns, useDataGetter } from './data';


export default function OriginsList() {

    const { selectedEntries, setSelectedEntries, entries, data } = useDataGetter();

    return (

        <PageContent url={'add-origin'} title={'All Origins'} showActions={true}>

            <TableHeader selectedEntries={selectedEntries} setSelectedEntries={setSelectedEntries} entries={entries} />

            <RenderTable columns={columns} list={data} selectedEntries={selectedEntries} />

        </PageContent>

    )
}
