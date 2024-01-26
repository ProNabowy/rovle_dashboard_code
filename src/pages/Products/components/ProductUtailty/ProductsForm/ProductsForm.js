import { Dropdown } from 'primereact/dropdown';
import { ChipsList, AddOrigin, InputsGroup, AddPackage } from '../../../../../components';
import { useFormDataGetter } from './data';
import { getSelectedOption } from '../../../../../assets/js/utils';

export default function ProductsForm({ formik, clickHandler, originsList, packagesList }) {

    const {
        inputsData,
        coffee,
        isByNewOWner,
        selectedProvider,
        setSelectedProvider,
        rosters
    } = useFormDataGetter(formik, originsList, packagesList);

    return (

        <form onSubmit={e => e.preventDefault()} className='px-10 add-product'>

            <div className='flex items-center justify-between mb-8'>

                {
                    isByNewOWner
                        ?
                        <div className='w-[48%]'>

                            <label htmlFor={'factor'} className='text-[18px] text-[#252525] font-medium'>Mini factor name</label>

                            <input value={formik?.values?.owner_name} name={'owner_name'} type={'text'} onChange={formik.handleChange} id={'factor'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter factor name'} />

                        </div>
                        :
                        null
                }

                <div className={`w-[48%] ${!isByNewOWner ? "flex-1" : ""}`}>

                    <label htmlFor={'owner'} className='text-[18px] text-[#252525] font-medium'>Roaster To</label>

                    <Dropdown
                        value={selectedProvider}
                        onChange={(e) => setSelectedProvider(getSelectedOption(rosters, 'id', e.target.value?.id))}
                        options={rosters} optionLabel="commercial_name"
                        inputId='owner'
                        placeholder="Select Roaster" className="w-full p-2  !shadow-none !rounded-none border-[#b3b3b3] !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

            </div>

            <InputsGroup data={inputsData[0]} />

            <AddOrigin classNames={'!w-full mb-8'} formik={formik} provider_id={formik.values?.provider_id} />

            <InputsGroup data={inputsData[1]} />

            <InputsGroup data={inputsData[2]} />

            <InputsGroup data={inputsData[3]} />

            <div className='mb-8'>

                <label htmlFor={'Variedad'} className='text-[18px] text-[#252525] font-medium'>Variedad</label>

                <input value={formik?.values?.grades} name={'grades'} type={'text'} onChange={formik.handleChange} id={'Variedad'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Variedad'} />

            </div>

            {/* For Add CoffeShop */}
            <ChipsList
                formik={formik}
                dataKey={'coffeeShops'}
                url={'/setups/coffee-shop/add-coffee'}
                title={'Coffees'}
                options={coffee}
            />

            <div>

                <label htmlFor={'Description'} className='text-[18px] text-[#252525] font-medium'>Description</label>

                <textarea rows={5} onChange={formik.handleChange} type='text' value={formik?.values?.description} name='description' id={'Description'} className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Description'} />

            </div>

            <AddPackage formik={formik} provider_id={formik.values.provider_id} />

            <div className='flex items-center justify-end mt-10'>

                <button onClick={clickHandler} type='submit' className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

            </div>

        </form>
    )
}