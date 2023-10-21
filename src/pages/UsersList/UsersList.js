import { PageContent } from '../../components';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Users } from '../../apis/apis';
import {
    idBodyTemplate,
    cardIdBodyTemplate,
    nameBodyTemplate,
    permissionBodyTemplate,
    lastDateBodyTemplate,
    emailBodyTemplate,
    addressBodyTemplate,
    actionsBodyTemplate
} from './data';




export default function UsersList() {

    const [selectedEntries, setSelectedEntries] = useState({ name: 5, code: 5 });

    const entries = [];

    const userUtailty = new Users();

    const [data, setData] = useState([]);

    data.map((item, index) => entries.push({ name: index + 1, code: index + 1 }));


    useEffect(() => {

        userUtailty.fetchUsers(setData, true);

    }, []);

    return (

        <PageContent url={'add-user'} title={'List Users'} showActions={true}     >

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


            <DataTable value={data} paginator rows={selectedEntries.name} dataKey="id" emptyMessage="No Products Found." className='px-8'>

                <Column field="id" header="ID" body={idBodyTemplate} />

                <Column field='name' header="Name" body={nameBodyTemplate} />

                <Column field='email' header="Email" body={emailBodyTemplate} />

                <Column field='address' header="Address" body={addressBodyTemplate} />

                <Column field='cardId' header="Card Id" body={cardIdBodyTemplate} />

                <Column field='permission' header="Permission" body={permissionBodyTemplate} />

                <Column field='lastDate' header="Last Date" body={lastDateBodyTemplate} />

                <Column field='actions' header="Actions" body={actionsBodyTemplate} />


            </DataTable>


        </PageContent>

    )
}
