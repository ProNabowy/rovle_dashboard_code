import { DataTable } from 'primereact/datatable';
import { Fragment } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import { useDataGetter, FilterFields, data } from './data';
import useExportTable from '../../hooks/ExportTable/useExportTable';

export default function RenderTable({
    columns,
    list,
}) {

    const {
        selectedEntries,
        setSelectedEntries,
        entries,
        filters,
        onGlobalFilterChange,
        globalFilterValue
    } = useDataGetter(list);

    const { exportExcel, exportPDF } = useExportTable(columns, list);

    return (

        <Fragment>

            <TableHeader
                entries={entries}
                setSelectedEntries={setSelectedEntries}
                selectedEntries={selectedEntries}
                globalFilterValue={globalFilterValue}
                onGlobalFilterChange={onGlobalFilterChange}
            />

            <DataTable DataTable value={list} filters={filters}
                globalFilterFields={FilterFields}
                paginator={list?.length > +selectedEntries?.name} rows={selectedEntries?.name} dataKey="id"
                emptyMessage={<h1 className='text-center my-5'>No Data Found</h1>} className='px-8' >

                {data(columns)}

            </DataTable>

        </Fragment>

    )

}
