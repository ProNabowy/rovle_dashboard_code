import { Dropdown } from 'primereact/dropdown'
import { getSelectedOption } from '../../../../assets/js/utils'
import { useDataGetter } from './data'

export default function ProvinceForm({ formik, clickHandler }) {

    const { countries } = useDataGetter();

    return (

        <form onSubmit={e => e.preventDefault()}>

            <div className='p-10 pb-2'>

                <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Name</label>

                <input type='text' name="name" value={formik?.values?.name} onChange={formik.handleChange} className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' placeholder='Enter Country Name' />

            </div>

            <div className='p-10 pt-2 my-6'>

                <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Country</label>

                <Dropdown value={getSelectedOption(countries, 'id', formik?.values?.country_id)} name='country_id' onChange={(e) => formik.setFieldValue('country_id', e.target.value?.id)} options={countries} optionLabel="name"
                    placeholder='Select Country' className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

            </div>

            <div className='flex items-center justify-end p-10 pb-5'>

                <button onClick={clickHandler} type='submit' className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>
                    Submit
                </button>

            </div>

        </form>

    )
}
