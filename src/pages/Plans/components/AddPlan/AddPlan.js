import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import { useAddPlan } from './data';
import { AddProduct, AddPackage, PlanStatus } from './components';
import { getSelectedOption } from '../../../../assets/js/utils';
import { PageContent } from '../../../../components';
import AddCoffeeShop from '../AddCoffeeShop';


export default function AddPlan() {

    const { roaster, formik } = useAddPlan();


    return (

        <PageContent title={'Plan Form'} showActions={false}  >

            <form onSubmit={formik.handleSubmit} className='px-10'>

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'plan-name'} className='text-[18px] text-[#252525] font-medium'>Plan Name</label>

                        <input type='text' id={'plan-name'} name='name' value={formik.values?.name} onChange={formik.handleChange} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Plan Name'} />

                    </div>

                    <PlanStatus formik={formik} />

                </div>


                <div className='mb-6'>

                    <div className='flex items-center justify-between'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>Roaster Name</h2>

                        <Link to={'/groups/roasters/add-roaster'} className='flex items-center cursor-pointer'>

                            <h2 className='font-medium underline text-[#45B8EA] me-3'>Add Roaster</h2>

                        </Link>

                    </div>

                    <Dropdown
                        value={getSelectedOption(roaster, 'id', formik?.values?.provider_id)}
                        onChange={(e) => formik.setFieldValue('provider_id', e.target.value?.id)}
                        options={roaster} optionLabel="user.name"
                        placeholder="Select Roaster Name" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <div>

                    <label htmlFor={'Description'} className='text-[18px] text-[#252525] font-medium'>Description</label>

                    <textarea onChange={formik.handleChange} value={formik.values.description} name='description' rows={5} type='text' id={'Description'} className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Description'} />

                </div>

                <AddProduct list={getSelectedOption(roaster, 'id', formik?.values?.provider_id)?.products} formik={formik} />

                <AddCoffeeShop formik={formik} />

                <AddPackage formik={formik} />

                <div className='flex items-center justify-end mt-10'>

                    <button className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

                </div>

            </form>

        </PageContent >
    )
}
