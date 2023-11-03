import { Dialog } from 'primereact/dialog';
import { Fragment, useState } from 'react';
import PackagesForm from './components/PackagesForm/PackagesForm';
import { Formik } from '../../../../hooks';

export default function Packages({ visible, setVisible, rowData }) {

    const [initialValues, setInitialValues] = useState({ presentations: [], });

    const { useFormData } = Formik();

    const handelSubmit = values => {


    }

    const { formik } = useFormData(initialValues, handelSubmit);

    return (
        <Fragment>

            <Dialog headerClassName='!bg-[#58291E]' header={<h1 className='text-center text-white'>{rowData?.user?.name} / {rowData?.name} / {rowData?.total} = {rowData?.price}</h1>} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>

                <div className='rounded-[20px] mt-20 border border-[#252525] p-[32px] grid grid-cols-12 gap-10'>

                    <PackagesForm formik={formik} />

                    <div className='flex items-center justify-end col-span-12'>

                        <button className='bg-[#45B8EA] text-white px-24 p-3 rounded-full'>Save</button>

                    </div>

                </div>

            </Dialog>

        </Fragment>
    )
}
