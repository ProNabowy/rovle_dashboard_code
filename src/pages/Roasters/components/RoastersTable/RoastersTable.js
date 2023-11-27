import { columns } from '../../data';
import { useSelector } from 'react-redux';
import { RenderTable } from '../../../../components';


export default function RoastersTable({ children }) {

    const data = useSelector(store => store.rosters);

    return (

        <RenderTable columns={columns} list={data} />

    )
};