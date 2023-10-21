import { PageContent } from '../../components';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Size } from '../../apis/apis';

import {
    weightBodyTemplate,
    idBodyTemplate,
    characterBodyTemplate,
    dateateBodyTemplate,
    actionsBodyTemplate
} from './data';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export default function SizeList() {

    const rosters = useSelector(store => store.rosters);

    const [selectedEntries, setSelectedEntries] = useState({ name: 4, code: 4 });

    const [selectedRosters, setselectedRosters] = useState(JSON.parse(sessionStorage.getItem('selected-roaster')));

    const entries = [];

    const sizeUtility = new Size();

    const [data, setData] = useState([]);

    data.map((item, index) => entries.push({ name: index + 1, code: index + 1 }));

    useEffect(() => {

        selectedRosters?.id && sizeUtility.fetchSizeByProvider(setData, selectedRosters?.id, true);

    }, [selectedRosters?.id]);


    return (

        selectedRosters?.id ?
            <PageContent url={'/products/plans/size/list/add-size'} title={'Size Management'} showActions={true}   >

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

                    <div className='w-full my-5'>

                        <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Roasters</label>

                        <Dropdown value={selectedRosters} onChange={(e) => setselectedRosters(e.value)} options={rosters} optionLabel="user.name"
                            placeholder="Select Province" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                    </div>

                </div>


                <DataTable value={data} paginator rows={selectedEntries.name} dataKey="id" emptyMessage="No Products Found." className='px-8'>

                    <Column field='id' header="ID" body={idBodyTemplate} />

                    <Column field='character' header="Character" body={characterBodyTemplate} />

                    <Column field='weight' header="Weight" body={weightBodyTemplate} />

                    <Column field='date' header="Date" body={dateateBodyTemplate} />

                    <Column field='action' header="Action" body={actionsBodyTemplate} />

                </DataTable>


            </PageContent>
            :
            <Navigate to={'/products/plans/size'} />
    )
}
