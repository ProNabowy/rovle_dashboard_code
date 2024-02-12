import { RenderTable } from '../../../components';

export default function CoffeeShopTable({ children, columns, shops, table }) {

    return <RenderTable columns={columns} list={shops} table={table} />

}
