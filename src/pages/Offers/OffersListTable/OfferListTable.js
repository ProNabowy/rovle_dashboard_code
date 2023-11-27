import { RenderTable } from '../../../components';
import { columns, useDataGetter } from '../data';


export default function OfferListTable({ children, countOfEntries, data }) {

    return <RenderTable columns={columns} list={data} selectedEntries={{ name: countOfEntries || 6 }} />

}
