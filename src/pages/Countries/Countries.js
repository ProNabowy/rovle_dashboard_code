import { PageContent, RenderTable, TableHeader } from '../../components';
import { useCustomEffect } from '../../hooks';
import { useSelector } from 'react-redux';
import { columns } from './data';


export default function Countries() {

    const countries = useSelector(store => store.countries);

    const { useReplacePagnitToText, useTableEntries } = useCustomEffect();

    const { selectedEntries, setSelectedEntries, entries } = useTableEntries(countries);

    useReplacePagnitToText();

    return (

        <PageContent url={'add-country'} title={'All Countries'} showActions={true}>

            <TableHeader selectedEntries={selectedEntries} setSelectedEntries={setSelectedEntries} entries={entries} />

            <RenderTable columns={columns} list={countries} selectedEntries={selectedEntries} />

        </PageContent>

    )
}
