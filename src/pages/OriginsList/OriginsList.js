import { PageContent } from '../../components';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';

import {
    idBodyTemplate,
    nameBodyTemplate,
    actionsBodyTemplate,
    hostBodyTemplate,
    dateBodyTemplate
} from './data';


import useCustomEffect from '../../hooks/useCustomEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Origins } from '../../apis/apis';


export default function OriginsList() {

    const [selectedEntries, setSelectedEntries] = useState({ name: 5, code: 5 });
    const entries = [];

    const [data, setData] = useState([]);
    const OriginsUtailty = new Origins();

    // Fetch Entries 
    data?.map((item, index) => entries.push({ name: index + 1, code: index + 1 }));

    const { useReplacePagnitToText } = useCustomEffect();

    useReplacePagnitToText();

    useEffect(() => {

        OriginsUtailty.fetchOrigins(setData, true);

    }, []);


    return (

        <PageContent url={'add-origin'} title={'All Origins'}
            showActions={true}>

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


            <DataTable value={data} paginator rows={selectedEntries.name} dataKey="id"
                emptyMessage="No Countries Found." className='px-8'>

                <Column field="id" header="Id" className='!px-[15px]' body={idBodyTemplate} />

                <Column field='name' header="Name" className='!px-[0px]' body={nameBodyTemplate} />

                <Column field='host' header="Host" className='!px-[15px]' body={hostBodyTemplate} />

                <Column field="date" header="Date" className='!px-[15px]' body={dateBodyTemplate} />

                <Column field="STATUS" header="Action" className='!px-[15px]' body={actionsBodyTemplate} />


            </DataTable>


        </PageContent>

    )
}
