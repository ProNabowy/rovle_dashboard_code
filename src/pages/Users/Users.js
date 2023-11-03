import { PageContent, RenderTable, TableHeader } from '../../components';
import { columns, useDataGetter } from './data';


export default function UsersList() {

    const { selectedEntries, setSelectedEntries, entries, data } = useDataGetter();

    return (

        <PageContent url={'add-user'} title={'List Users'} showActions={true} >

            <TableHeader selectedEntries={selectedEntries} setSelectedEntries={setSelectedEntries} entries={entries} />

            <RenderTable columns={columns} list={data} selectedEntries={selectedEntries} />

        </PageContent>

    )
}
