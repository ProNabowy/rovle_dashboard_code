import { Dropdown } from 'primereact/dropdown';
import { PageContent } from '../../../../components';
import { useDataGetter } from './data';
import { getSelectedOption } from '../../../../assets/js/utils';


export default function AddOrigin() {

    const { formik, roasters, clickHandler } = useDataGetter();

    return (

        <PageContent
            title={'Origins Form'}
            showActions={false}
            PermissionsKey={'Origins'}
            roleKey={'Add'}    >

            <form onSubmit={e => e.preventDefault()}>

                <div className='p-10 pb-4'>

                    <label className='mb-3 block text-[#234486]'>Roasters</label>

                    <Dropdown value={getSelectedOption(roasters, 'id', formik?.values?.provider_id)} name='provider_id' onChange={(e) => formik.setFieldValue('provider_id', e.target.value?.id)} options={roasters} optionLabel="commercial_name"
                        placeholder="Select Roaster" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

                <div className='p-10 pt-4'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Name</label>

                    <input type='text' name='name' value={formik.values?.name} className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' onChange={formik.handleChange} placeholder='Enter Origin Name' />

                </div>

                <div className='flex items-center justify-end p-10 pb-5'>

                    <button type='submit' onClick={clickHandler} className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>
                        Submit
                    </button>

                </div>

            </form>


        </PageContent>
    )
}
