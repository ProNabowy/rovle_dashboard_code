import { PageContent } from '../../components';
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import useCustomEffect from '../../hooks/useCustomEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
    idBodyTemplate,
    nameBodyTemplate,
    actionsBodyTemplate,
    provinceBodyTemplate,
    created_atBodyTemplate,
    updated_atBodyTemplate
} from './data';
import { useSelector } from 'react-redux';


export default function CitiesList() {

    const [selectedEntries, setSelectedEntries] = useState({ name: 5, code: 5 });

    const cities = useSelector(store => store.cities);

    const entries = [];

    cities.map((item, index) => entries.push({ name: index + 1, code: index + 1 }));



    const { useReplacePagnitToText, useFetchData } = useCustomEffect();

    useReplacePagnitToText();


    return (

        <PageContent url={'add-city'} title={'City Form'} showActions={true}
        >

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


            <DataTable value={cities} paginator rows={selectedEntries.name} l dataKey="id" className='px-8'>

                <Column field="id" header="Id" className='!px-[15px]' body={idBodyTemplate} />

                <Column field='name' header="Name" className='!px-[0px]' body={nameBodyTemplate} />

                <Column field='province' header="Province" className='!px-[0px]' body={provinceBodyTemplate} />

                <Column field='created_at' header="Start Date" className='!px-[15px]' body={created_atBodyTemplate} />

                <Column field="updated_at" header="Last Date" className='!px-[15px]' body={updated_atBodyTemplate} />

                <Column field="STATUS" header="Action" className='!px-[15px]' body={actionsBodyTemplate} />


            </DataTable>


        </PageContent>

    )
}
