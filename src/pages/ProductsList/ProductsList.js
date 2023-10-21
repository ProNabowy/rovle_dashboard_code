import { PageContent } from '../../components';
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';


import {
    idBodyTemplate,
    shopsBodyTemplate,
    packagesBodyTemplate,
    updated_at_BodyTemplate,
    actionsBodyTemplate,
    nameBodyTemplate,
    roastersBodyTemplate,
} from './data';


import useCustomEffect from '../../hooks/useCustomEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Products } from '../../apis/apis';
import { useEffect } from 'react';



export default function ProductsList() {

    const [selectedEntries, setSelectedEntries] = useState({ name: 4, code: 4 });

    const entries = [];

    const [products, setProducts] = useState([]);

    const productsUtility = new Products();

    products.map((item, index) => entries.push({ name: index + 1, code: index + 1 }));

    const { useReplacePagnitToText } = useCustomEffect();

    useReplacePagnitToText();

    useEffect(() => {
        productsUtility.fetchProducts(setProducts, true);
    }, []);

    return (

        <PageContent url={'add-product'} title={'All Products'} showActions={true}>

            <div className='flex items-center justify-between px-10 mb-5'>

                <div className='flex items-center'>

                    <h3 className='text-[#252525] font-medium me-3'>Show</h3>

                    <Dropdown value={selectedEntries} onChange={(e) => setSelectedEntries(e.value)} options={entries} optionLabel="name"
                        placeholder="" className="w-full md:w-14rem" />

                    <h3 className='text-[#252525] font-medium ms-3'>entries</h3>

                </div>

                <div className='relative min-w-[400px]'>

                    <input type='text' placeholder='Search (Ctrl+/)' className='px-10 py-3 rounded-full border w-full' />

                    <FontAwesomeIcon icon={faSearch} className='text-[#252525] text-[13px] absolute left-4 top-[50%] translate-y-[-50%]' />

                </div>


            </div>


            <DataTable value={products} paginator showGridlines rows={selectedEntries.name} dataKey="id" emptyMessage="No Products Found." className='px-8'>

                <Column field="id" header="ID" className='!px-[15px]' body={idBodyTemplate} />

                <Column field='name' header="Product Name" className='!px-[0px]' body={nameBodyTemplate} />

                <Column field='roasters' header="Roasters" className='!px-[15px]' body={roastersBodyTemplate} />

                <Column field='shops' header="Shops" className='!px-[15px]' body={shopsBodyTemplate} />

                <Column field='packages' header="Packages" className='!px-[15px]' body={packagesBodyTemplate} />

                <Column field='updated_at' header="Last Date" className='!px-[15px]' body={updated_at_BodyTemplate} />

                <Column field='auction' header="Auction" className='!px-[15px]' body={actionsBodyTemplate} />

            </DataTable>


        </PageContent>

    )
}
