import { RenderTable } from '../../../components';
import { columns } from '../data';
import { useDataGetter } from './data';



export default function CoffeeShopTable({ children }) {

    const { shops } = useDataGetter();

    return (
        <RenderTable columns={columns} list={shops} />
    )
}
