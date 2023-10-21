import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useState } from 'react';
import {
    idBodyTemplate,
    nameBodyTemplate,
    actionsBodyTemplate,
    postCodeBodyTemplate,
    addressBodyTemplate,
    lastDateBodyTemplate,
    locationBodyTemplate
} from '../data';
import { CoffeeShops } from '../../../apis/apis';



export default function CoffeeShopTable({ children }) {

    const [data, setData] = useState([]);
    const coffeeUtailty = new CoffeeShops();
    console.log(data);
    useEffect(() => {

        coffeeUtailty.fetchCoffees(setData, true);

        return () => { };

    }, []);

    return (
        <DataTable value={data} paginator rows={10} dataKey="id" emptyMessage="No Products Found." className='px-8'>

            <Column field="id" header="Id" body={idBodyTemplate} />

            <Column field='name' header="Name" className='' body={nameBodyTemplate} />

            <Column field='postCode' header="Post Code" className='max-w-[350px]' body={postCodeBodyTemplate} />

            <Column field='address' header="Address" body={addressBodyTemplate} />

            <Column field='location' header="Locations" body={locationBodyTemplate} />

            <Column field="lastDate" header="Last Date" body={lastDateBodyTemplate} />

            <Column field="STATUS" header="Action" body={actionsBodyTemplate} />


            {children}

        </DataTable>
    )
}
