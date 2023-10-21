import { PageContent } from '../../components';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Plans } from '../../apis/apis';

import {
    addressBodyTemplate,
    nameBodyTemplate,
    startDateteBodyTemplate,
    endDateteBodyTemplate,
    packageBodyTemplate,
    statusBodyTemplate
} from './data';
import { useSelector } from 'react-redux';


export default function SubscriptionsList() {

    const rosters = useSelector(store => store.rosters);

    const [selectedEntries, setSelectedEntries] = useState({ name: 4, code: 4 });

    const [selectedRosters, setselectedRosters] = useState(null);

    const [selectedPlan, setselectedPlan] = useState(null);

    const [plans, setPlans] = useState([]);

    const entries = [];

    const plansUtailty = new Plans();

    plans?.map((item, index) => entries.push({ name: index + 1, code: index + 1 }));

    useEffect(() => {

        selectedRosters?.id && plansUtailty.fetchPlans(setPlans, selectedRosters?.id, true);

    }, [selectedRosters]);


    return (

        <PageContent url={'/products/plans/add-plan'} title={'Subscriptions'} showActions={true} >

            <div className='flex items-center justify-between flex-wrap px-10 mb-5'>

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

                <div className='grid grid-cols-12 gap-5 w-full my-5'>

                    <div className='col-span-6'>

                        <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Roaster</label>

                        <Dropdown value={selectedRosters} onChange={(e) => setselectedRosters(e.value)} options={rosters} optionLabel="user.name"
                            placeholder="Select Province" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                    </div>

                    <div className='col-span-6'>

                        <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Plan Name</label>

                        <Dropdown value={selectedPlan} onChange={(e) => setselectedPlan(e.value)} options={plans} optionLabel="user.name"
                            placeholder="Select Province" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                    </div>

                </div>


            </div>


            <DataTable value={plans} paginator rows={selectedEntries.name} dataKey="id" emptyMessage="No Products Found." className='px-8'>

                <Column field='name' header="User Name" body={nameBodyTemplate} />

                <Column field='address' header="Address" body={addressBodyTemplate} />

                <Column field='start-date' header="Start date" body={startDateteBodyTemplate} />

                <Column field='end-date' header="End date" body={endDateteBodyTemplate} />

                <Column field='status' header="Status" body={statusBodyTemplate} />

                <Column field='package' header="Package" body={packageBodyTemplate} />

            </DataTable>


        </PageContent>

    )
}
