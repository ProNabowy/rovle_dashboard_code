import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import {
    data,
    idBodyTemplate,
    getCustomers,
    actionsBodyTemplate,
    emailBodyTemplate,
    officialNameBodyTemplate,
    commercialNameBodyTemplate,
    lastDateBodyTemplate,
    locationBodyTemplate
} from '../data';

import { useSelector } from 'react-redux';


export default function RoastersTable({ children }) {

    const data = useSelector(store => store.rosters);
    console.log(data);
    return (
        <DataTable value={data} paginator rows={10} dataKey="id"

            emptyMessage="No Products Found." className='px-8'>

            <Column field="id" header="Id" body={idBodyTemplate} />

            <Column field='officialName' header="Official Name" body={officialNameBodyTemplate} />

            <Column field='commercialName' header="Commercial Name" body={commercialNameBodyTemplate} />

            <Column field='email' header="email" body={emailBodyTemplate} />

            <Column field='location' header="Locations" body={locationBodyTemplate} />

            <Column field="lastDate" header="Last Date" body={lastDateBodyTemplate} />

            <Column field="STATUS" header="Action" body={actionsBodyTemplate} />


            {children}

        </DataTable>
    )
}
