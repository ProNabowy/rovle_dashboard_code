import { RenderTable } from '../../../components';


export default function OfferListTable({ children, countOfEntries, data, columns, table }) {

    return <RenderTable columns={columns} list={data} table={table} selectedEntries={{ name: countOfEntries || 6 }} />

}
