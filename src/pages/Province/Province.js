import { PageContent, RenderTable, TableHeader } from '../../components';
import useCustomEffect from '../../hooks/useCustomEffect';
import { useSelector } from 'react-redux';
import { columns } from './data';


export default function Province() {

    const province = useSelector(store => store.province);

    const { useReplacePagnitToText, useTableEntries } = useCustomEffect();

    const { selectedEntries, setSelectedEntries, entries } = useTableEntries(province);

    useReplacePagnitToText();

    return (

        <PageContent url={'add-province'} title={'All Province'} showActions={true}   >


            <TableHeader selectedEntries={selectedEntries} setSelectedEntries={setSelectedEntries} entries={entries} />

            <RenderTable columns={columns} list={province} selectedEntries={selectedEntries} />


        </PageContent>

    )
}
