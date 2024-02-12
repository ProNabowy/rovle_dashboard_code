import { RenderTable } from '../../../../components';


export default function RoastersTable({ children, columns, roasters, table }) {

    return <RenderTable columns={columns} list={roasters} table={table} />

};