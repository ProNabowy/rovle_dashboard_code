import { PageContent, RenderTable, TableHeader } from '../../components';
import { useSelector } from 'react-redux';
import { useCustomEffect } from '../../hooks';
import { columns } from './data';


export default function Permission() {

    const roles = useSelector(store => store.roles);

    const { useReplacePagnitToText, useTableEntries } = useCustomEffect();

    const { selectedEntries, setSelectedEntries, entries } = useTableEntries(roles);

    useReplacePagnitToText();

    return (

        <PageContent url={'/settings/permissions/list/add-permission'} title={'Permissions'} showActions={true} >

            <TableHeader selectedEntries={selectedEntries} setSelectedEntries={setSelectedEntries} entries={entries} />

            <RenderTable columns={columns} list={roles} selectedEntries={selectedEntries} />

        </PageContent>

    )
}
