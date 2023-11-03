import { Dropdown } from 'primereact/dropdown';
import { PageContent } from '../../../../components'
import { handleDropdownChange } from "../../../../assets/js/utils";
import { useDataGetter } from "./data";


export default function AddCity() {

    const { formik, selectedProvince, setselectedProvince, province } = useDataGetter();

    return (

        <PageContent title={'City Form'} showActions={false}>

            <form onSubmit={formik.handleSubmit}>

                <div className='p-10 pb-2'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Name</label>

                    <input type='text' name="name" onChange={formik.handleChange} className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' placeholder='Enter City Name' />

                </div>
                <div className='p-10 pt-2'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Province</label>

                    <Dropdown value={selectedProvince} name="province_id" onChange={(e) => handleDropdownChange(e, setselectedProvince, formik, 'province_id')} options={province} optionLabel="name"
                        placeholder="Select Province" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

                <div className='flex items-center justify-end p-10 pb-5'>

                    <button type='submit' className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>
                        Submit
                    </button>

                </div>

            </form>


        </PageContent>
    )
}
