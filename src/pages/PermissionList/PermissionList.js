import { PageContent } from '../../components';
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


import { accountsBodyTemplate, nameBodyTemplate, dateateBodyTemplate, actionsBodyTemplate } from './data';
import { useSelector } from 'react-redux';


export default function PermissionList() {

    const [selectedEntries, setSelectedEntries] = useState({ name: 4, code: 4 });

    const roles = useSelector(store => store.roles);

    const entries = [];

    roles.map((item, index) => entries.push({ name: index + 1, code: index + 1 }));


    return (

        <PageContent url={'/settings/permissions/list/add-permission'} title={'Permissions'} showActions={true}   >

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

            </div>


            <DataTable value={roles} paginator rows={selectedEntries.name} dataKey="id" emptyMessage="No Products Found." className='px-8'>

                <Column field='name' header="Role Name" body={nameBodyTemplate} />

                <Column field='address' header="Accounts" body={accountsBodyTemplate} />

                <Column field='date' header="Last Date" body={dateateBodyTemplate} />

                <Column field='Action' header="Action" body={actionsBodyTemplate} />

            </DataTable>


        </PageContent>

    )
}
