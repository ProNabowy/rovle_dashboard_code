import React, { useState, Fragment } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function SeeMore({ list, headerName, tamplate }) {

    const [dialogVisible, setDialogVisible] = useState(false);

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogVisible(false)} />;
    };

    return (
        <Fragment>

            <Dialog header="Paquetes" headerClassName='black-text' headerStyle={{color: "black !important"}} visible={dialogVisible} style={{ width: '40vw', height: "50vh" }} onHide={() => setDialogVisible(false)} footer={dialogFooterTemplate}>

                <DataTable value={list} scrollable scrollHeight="flex">

                    <Column field="name" header={headerName} body={tamplate}></Column>

                </DataTable>

            </Dialog>

            <div onClick={() => setDialogVisible(true)} className='flex items-center justify-center mt-3 cursor-pointer'>

                <div className='w-[7px] h-[7px] rounded-full me-2 border border-[#45B8EA]'></div>
                <div className='w-[7px] h-[7px] rounded-full me-2 border border-[#45B8EA]'></div>
                <div className='w-[7px] h-[7px] rounded-full me-2 border border-[#45B8EA]'></div>

            </div>

        </Fragment>
    )
}
