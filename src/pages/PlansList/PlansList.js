import { PageContent } from '../../components';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Plans } from '../../apis/apis';

import {
    idBodyTemplate,
    statusBodyTemplate,
    roasterNameBodyTemplate,
    nameBodyTemplate,
    lastDateBodyTemplate,
    sizeBodyTemplate,
    actionsBodyTemplate
} from './data';


export default function PlansList() {

    const [selectedEntries, setSelectedEntries] = useState({ name: 4, code: 4 });

    const entries = [];

    const plansUtailty = new Plans();

    const [data, setData] = useState([]);

    data.map((item, index) => entries.push({ name: index + 1, code: index + 1 }));

    useEffect(() => {

        plansUtailty.fetchPlans(setData, true);

    }, []);


    return (

        <PageContent url={'/products/plans/add-plan'} title={'All Plan'} showActions={true}   >

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

                emptyMessage="No Plans Found." className='px-8'>

                <Column field="id" header="ID" body={idBodyTemplate} />

                <Column field='planName' header="Plan Name" body={nameBodyTemplate} />

                <Column field='roaster-name' header="Roaster Name" body={roasterNameBodyTemplate} />

                <Column field='status' header="Status" body={statusBodyTemplate} />

                <Column field='size' header="Sizes" body={sizeBodyTemplate} />

                <Column field='last-date' header="Last Date" body={lastDateBodyTemplate} />

                <Column field="action" header="Action" className='!px-[15px]' body={actionsBodyTemplate} />

            </DataTable>


        </PageContent>

    )
}
