import { useState } from 'react';
import { PageContent } from '../../../../components';
import { Countries } from '../../../../apis/apis';
import { Formik } from '../../../../hooks';

export default function AddCountry() {

    const [initialValues, setInitialValues] = useState({ name: "" });

    const countries = new Countries();

    const { useFormData } = Formik();

    const handelSubmit = (values) => countries.addCountry(values);

    const { formik } = useFormData(initialValues, handelSubmit);

    return (

        <PageContent title={'Country Form'} showActions={false}>

            <form onSubmit={formik.handleSubmit}>

                <div className='p-10'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Name</label>

                    <input type='text' className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' name='name' onChange={formik.handleChange} placeholder='Enter Country Name' />

                </div>

                <div className='flex items-center justify-end p-10 pb-5'>

                    <button className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>   Submit   </button>

                </div>

            </form>


        </PageContent>
    )
}
