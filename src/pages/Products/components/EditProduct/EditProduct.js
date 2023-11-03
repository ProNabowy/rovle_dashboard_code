import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { AddCoffeeShop, AddOrigin, AddPackage } from './components';
import { InputsGroup, PageContent } from '../../../../components';
import { getSelectedOption } from '../../../../assets/js/utils';
import { useEditProduct } from './data';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';


export default function EditProduct() {

    const { formik, rosters, product, inputsData } = useEditProduct();

    return (

        <PageContent title={'Product Form'} showActions={false}>

            <form onSubmit={formik.handleSubmit} className='px-10 add-product'>

                <InputsGroup data={inputsData[0]} />

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%]'>

                        <div className='flex items-center justify-between'>

                            <h2 className='text-[18px] text-[#252525] font-medium'>Roasters</h2>

                            <Link to={'/groups/roasters/add-roaster'} className='flex items-center cursor-pointer'>

                                <h2 className='font-medium underline text-[#45B8EA] me-3'>Add Roster</h2>

                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#45B8EA]' />

                            </Link>

                        </div>

                        <Dropdown value={getSelectedOption(rosters, 'id', formik?.values?.provider_id)} name='provider_id' onChange={(e) => formik.setFieldValue('provider_id', e.target.value?.id)} options={rosters} optionLabel="commercial_name"
                            className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                    <AddOrigin formik={formik} product={product} />

                </div>

                <InputsGroup data={inputsData[1]} />

                <InputsGroup data={inputsData[2]} />

                <InputsGroup data={inputsData[3]} />

                <div className='mb-6'>

                    <label htmlFor={'Variedad'} className='text-[18px] text-[#252525] font-medium'>Variedad</label>

                    <input value={formik?.values?.grades} name={'grades'} type={'text'} onChange={formik.handleChange} id={'Variedad'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Variedad'} />

                </div>

                <AddCoffeeShop formik={formik} product={product} />

                <div>

                    <label htmlFor={'Description'} className='text-[18px] text-[#252525] font-medium'>Description</label>

                    <textarea rows={5} onChange={formik.handleChange} type='text' value={formik?.values?.description} name='description' id={'Description'} className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Description'} />

                </div>

                <AddPackage formik={formik} product={product} />

                <div className='flex items-center justify-end mt-10'>

                    <button className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

                </div>

            </form>

        </PageContent>
    )
}
