import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable';
import NotFound from '../../pages/NotFound/NotFound';

const data = (columns) => {

    return columns?.map(column => {

        return <Column field={column?.field} header={column?.header} className={column?.classNames} body={column?.tamplate} />;

    })

}

export default function RenderTable({ columns, list, selectedEntries, emptyMessage }) {


    return <DataTable DataTable value={list} paginator={list?.length > +selectedEntries?.name} rows={selectedEntries?.name} dataKey="id"
        emptyMessage={<NotFound classNames={'!h-fit'} title={emptyMessage || 'data not found'} hideButton={true} />} className='px-8' >

        {data(columns)}

    </DataTable>

}
