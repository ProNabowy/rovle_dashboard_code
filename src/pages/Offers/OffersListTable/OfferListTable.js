import { useState } from 'react';
import { RenderTable } from '../../../components';
import { columns } from '../data';


export default function OfferListTable({ children }) {

    const [data, setData] = useState([]);

    return <RenderTable columns={columns} list={data} selectedEntries={{ name: 4 }} />

}
