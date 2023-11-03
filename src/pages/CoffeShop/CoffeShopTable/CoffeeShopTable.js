import { RenderTable } from '../../../components';
import { columns } from '../data';
import { useDataGetter } from './data';



export default function CoffeeShopTable({ children }) {

    const { data } = useDataGetter();

    return (
        <RenderTable columns={columns} list={data} selectedEntries={{ name: 4 }} />
    )
}
