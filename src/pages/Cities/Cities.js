import { PageContent, RenderTable, TableHeader } from '../../components';
import useCustomEffect from '../../hooks/useCustomEffect';
import { useSelector } from 'react-redux';
import { columns } from './data';


export default function Cities() {

    const cities = useSelector(store => store.cities);

    const { useReplacePagnitToText, useTableEntries } = useCustomEffect();

    const { selectedEntries, setSelectedEntries, entries } = useTableEntries(cities);

    useReplacePagnitToText();

    return (

        <PageContent url={'add-city'} title={'City Form'} showActions={true}   >

            <TableHeader selectedEntries={selectedEntries} setSelectedEntries={setSelectedEntries} entries={entries} />

            <RenderTable columns={columns} list={cities} selectedEntries={selectedEntries} />

        </PageContent>

    )
}
