import { Dropdown } from 'primereact/dropdown';
import { getSelectedOption } from "../../../../assets/js/utils";
import { useDataGetter } from "./data";


export default function CityForm({ formik, clickHandler }) {

    const { province } = useDataGetter();
 
    return (

        <form onSubmit={e => e.preventDefault()}>

            <div className='p-10 pb-2'>

                <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Name</label>

                <input type='text' name="name" value={formik.values?.name} onChange={formik.handleChange} className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' placeholder='Enter City Name' />

            </div>

            <div className='p-10 pt-2'>

                <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Province</label>

                <Dropdown value={getSelectedOption(province, 'id', formik?.values?.province_id)} name='province_id' onChange={(e) => formik.setFieldValue('province_id', e.target.value?.id)} options={province} optionLabel="name"
                    className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Select Province' />


            </div>

            <div className='flex items-center justify-end p-10 pb-5'>

                <button type='submit' onClick={clickHandler} className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>
                    Submit
                </button>

            </div>

        </form>

    )
}
