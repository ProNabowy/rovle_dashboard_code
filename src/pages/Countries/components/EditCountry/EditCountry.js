import { useEffect, useState } from 'react';
import { PageContent } from '../../../../components';
import { Countries } from '../../../../apis/apis';
import { Formik } from '../../../../hooks';
import { useLocation } from 'react-router-dom';

export default function EditCountry() {

    const countries = new Countries();

    const { useFormData } = Formik();

    const [data, setDate] = useState({});

    const location = useLocation().search;

    const countryId = +location.slice(4);

    const [initialValues, setInitialValues] = useState(data);

    const handelSubmit = (values) => countries.editCountry(values, countryId);

    const { formik } = useFormData(initialValues, handelSubmit);

    useEffect(() => {

        countries.getCountry(setDate, countryId);

    }, []);

    useEffect(() => {

        setInitialValues(data);

    }, [data]);


    return (

        <PageContent title={'Country Form'} showActions={false}>

            <form onSubmit={formik.handleSubmit}>

                <div className='p-10'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Name</label>

                    <input type='text' className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' name='name' value={formik?.values?.name} onChange={formik.handleChange} placeholder='Enter Country Name' />

                </div>

                <div className='flex items-center justify-end p-10 pb-5'>

                    <button className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>   Submit   </button>

                </div>

            </form>


        </PageContent>
    )
}
