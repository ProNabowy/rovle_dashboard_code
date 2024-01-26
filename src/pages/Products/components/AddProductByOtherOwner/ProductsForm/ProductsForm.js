import React, { Fragment } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { useFormDataGetter } from './data';
import { getSelectedOption } from '../../../../../assets/js/utils';
import { ChipsList } from '../../../../../components';

export default function ProductsForm() {

    const {
        rosters,
        formik,
        clickHandler,
        selectedProduct,
        setSelectedProduct,
        productInfo,
        selectedProvider,
        currentRoaster,
        setCurrentRoaster,
        setSelectedProvider,
        roasterFrom,
        roasterTo
    } = useFormDataGetter();

    return (

        <form onSubmit={e => e.preventDefault()} className='px-10 add-product'>

            <div className='mb-8 flex items-center justify-between'>

                <div className='w-[48%]'>

                    <label htmlFor={'owner'} className='text-[18px] text-[#252525] font-medium'>Roaster From</label>

                    <Dropdown
                        value={selectedProvider}
                        onChange={(e) => setSelectedProvider(getSelectedOption(rosters, 'id', e.target.value?.id))}
                        options={roasterFrom} optionLabel="commercial_name"
                        inputId='owner'
                        placeholder="Select Roaster" className="w-full p-2  !shadow-none !rounded-none border-[#b3b3b3] !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <div className='w-[48%]'>

                    <label htmlFor={'owner'} className='text-[18px] text-[#252525] font-medium'>Roaster To</label>

                    <Dropdown
                        value={currentRoaster}
                        onChange={(e) => setCurrentRoaster(getSelectedOption(rosters, 'id', e.target.value?.id))}
                        options={roasterTo} optionLabel="commercial_name"
                        inputId='owner'
                        placeholder="Select Roaster" className="w-full p-2  !shadow-none !rounded-none border-[#b3b3b3] !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

            </div>

            <div className='mb-8'>

                <label htmlFor={'name'} className='text-[18px] text-[#252525] font-medium'>Product Name</label>

                <Dropdown
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(getSelectedOption(selectedProvider?.products, 'id', e.target.value.id))}
                    options={selectedProvider?.products} optionLabel="commercial_name"
                    inputId='name'
                    placeholder="Select Product Name" className="w-full p-2  !shadow-none !rounded-none border-[#b3b3b3] !border-t-transparent !border-l-transparent !border-r-transparent" />

            </div>

            {
                productInfo?.id
                    ?
                    <Fragment>
                        <div className='flex items-center justify-between mb-8'>

                            <div className='w-[48%]'>

                                <label htmlFor={'Code'} className='text-[18px] text-[#252525] font-medium'>Code</label>

                                <input
                                    value={productInfo?.code}
                                    disabled type={'text'}
                                    id={'Code'}
                                    className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                                    placeholder={'Enter Code'}
                                />

                            </div>

                            <div className='w-[48%]'>

                                <label htmlFor={'Region'} className='text-[18px] text-[#252525] font-medium'>Region</label>

                                <input
                                    value={productInfo?.region}
                                    disabled type={'text'}
                                    id={'Region'}
                                    className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                                    placeholder={'Enter Region'}
                                />

                            </div>

                        </div>

                        <div className='mb-8'>

                            <label htmlFor={'Origin'} className='text-[18px] text-[#252525] font-medium'>Origin</label>

                            <input
                                value={productInfo?.origin}
                                disabled
                                type={'text'}
                                id={'Origin'}
                                className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                                placeholder={'Enter Origin'}
                            />

                        </div>

                        <div className='flex items-center justify-between mb-8'>

                            <div className='w-[48%]'>

                                <label htmlFor={'Finca'} className='text-[18px] text-[#252525] font-medium'>Finca</label>

                                <input
                                    value={productInfo?.farm}
                                    disabled
                                    type={'text'}
                                    id={'Finca'}
                                    className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                                    placeholder={'Enter Finca'}
                                />

                            </div>

                            <div className='w-[48%]'>

                                <label htmlFor={'Nombre'} className='text-[18px] text-[#252525] font-medium'>Nombre Comercial</label>

                                <input
                                    value={productInfo?.commercial_name}
                                    disabled
                                    type={'text'}
                                    id={'Nombre'}
                                    className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                                    placeholder={'Enter Nombre Comercial'}
                                />

                            </div>

                        </div>

                        <div className='flex items-center justify-between mb-8'>

                            <div className='w-[48%]'>

                                <label htmlFor={'Sca'} className='text-[18px] text-[#252525] font-medium'>Puntuación Sca s</label>

                                <input
                                    value={productInfo?.sca_score}
                                    disabled
                                    type={'text'}
                                    id={'Sca'}
                                    className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                                    placeholder={'Enter Puntuación Sca s'}
                                />

                            </div>

                            <div className='w-[48%]'>

                                <label htmlFor={'Altitud'} className='text-[18px] text-[#252525] font-medium'>Altitude</label>

                                <input
                                    value={productInfo?.altitude}
                                    disabled
                                    type={'text'}
                                    id={'Altitud'}
                                    className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                                    placeholder={'Enter Altitud'}
                                />

                            </div>

                        </div>

                        <div className='flex items-center justify-between mb-8'>

                            <div className='w-[48%]'>

                                <label htmlFor={'Variedad'} className='text-[18px] text-[#252525] font-medium'>Variedad</label>

                                <input
                                    value={productInfo?.grades}
                                    disabled
                                    type={'text'}
                                    id={'Variedad'}
                                    className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                                    placeholder={'Enter Variedad'}
                                />

                            </div>

                            <div className='w-[48%]'>

                                <label htmlFor={'Proceso'} className='text-[18px] text-[#252525] font-medium'>Proceso</label>

                                <input
                                    value={productInfo?.process}
                                    disabled
                                    type={'text'}
                                    id={'Proceso'}
                                    className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                                    placeholder={'Enter Proceso'}
                                />

                            </div>

                        </div>

                        <div className='mb-8'>

                            <label htmlFor={'Description'} className='text-[18px] text-[#252525] font-medium'>Description</label>

                            <textarea
                                rows={5}
                                type='text'
                                value={productInfo?.description}
                                disabled
                                id={'Description'}
                                className='p-3 w-full border-b bg-white mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]'
                                placeholder={'Enter Description'}
                            />

                        </div>

                        <div className='w-full mb-8'>

                            <label htmlFor={'Presentation'} className='text-[18px] mb-2 text-[#252525] font-medium'>Presentation</label>

                            <div className='border border-[b3b3b3] p-10 px-20 rounded-[20px] grid grid-cols-12 gap-5'>

                                {
                                    productInfo?.presentations?.map((item, index) => {

                                        return (
                                            <div className='col-span-6 border border-[#58291E] text-center rounded-[5px] p-2'>
                                                {item?.price} Euro per {item?.weight} gm
                                            </div>
                                        )

                                    })
                                }

                            </div>

                        </div>

                        {/* For Add CoffeShop */}
                        <ChipsList
                            formik={formik}
                            dataKey={'coffeeShops'}
                            url={'/setups/coffee-shop/add-coffee'}
                            title={'Your Shop'}
                            options={currentRoaster?.coffee_shops}
                        />

                        <div className='flex items-center justify-end mt-10'>

                            <button
                                onClick={clickHandler}
                                type='submit'
                                className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>
                                Submit
                            </button>

                        </div>
                    </Fragment>
                    :
                    null
            }

        </form>
    )
}