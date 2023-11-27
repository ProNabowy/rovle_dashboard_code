import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import { useAddPlan } from './data';
import { getSelectedOption } from '../../../../assets/js/utils';
import { AddPackageByDropdown, ChipsList } from '../../../../components';
import PlanStatus from '../PlanStatus/PlanStatus';


export default function PlanForm({ formik, clickHandler }) {

    const {
        roaster,
        coffee,
        sizes,
        handleChangeProvider
    } = useAddPlan(formik);



    return (

        <form onSubmit={e => e.preventDefault()} className='px-10'>

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
                    onChange={handleChangeProvider}
                    options={roaster} optionLabel="commercial_name"
                    placeholder="Select Roaster Name" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

            </div>

            <div className='mb-6'>

                <label htmlFor={'Description'} className='text-[18px] text-[#252525] font-medium'>Description</label>

                <textarea onChange={formik.handleChange} value={formik.values.description} name='description' rows={5} type='text' id={'Description'} className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Description'} />

            </div>

            {/* For Add Product */}
            <ChipsList
                formik={formik}
                dataKey={'products'}
                url={'/products/list/add-product'}
                optionLabel="commercial_name"
                title={'Products'}
                options={getSelectedOption(roaster, 'id', formik?.values?.provider_id)?.products}
            />

            {/* For Add CoffeShop */}
            <ChipsList
                formik={formik}
                dataKey={'coffee_shops'}
                url={'/setups/coffee-shop/add-coffee'}
                title={'Coffees'}
                options={coffee}
            />

            <AddPackageByDropdown
                formik={formik}
                options={sizes}
                optionLabel={'name'}
                hasAddButton={true}
            />

            <div className='flex items-center justify-end mt-10'>

                <button onClick={clickHandler} type='submit' className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

            </div>

        </form>

    )
}
