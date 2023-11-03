import { Fragment } from 'react';
import { useAddPackage } from '../../data';
import { Dropdown } from 'primereact/dropdown';
import RenderPackages from './RenderPackages';

export default function PackagesForm({ formik }) {

    const {
        inputWeightRef,
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        sizes,
        packages,
        setPackage,
        removePackage,
        selectedSize,
        setSelectedSize
    } = useAddPackage(formik);

    return (

        <Fragment>

            <form onSubmit={e => e.preventDefault()} className='col-span-6'>


                <div className='mb-6'>

                    <label className='text-[18px] text-[#252525] font-medium'>Sizes</label>

                    <Dropdown
                        ref={inputWeightRef}
                        value={selectedSize}
                        onChange={e => {
                            setAddNewPackage(prev => ({ ...prev, size_id: e.target.value?.id }));
                            setSelectedSize(e.value)
                        }}
                        options={sizes} optionLabel="name"
                        placeholder="Select Size" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <div className='mb-6'>

                    <label htmlFor={'PriceEuro'} className='text-[18px] text-[#252525] font-medium'>Price</label>

                    <input ref={inputPriceRef} onChange={e => setAddNewPackage(prev => ({ ...prev, price: e.target.value }))} type='number' id={'PriceEuro'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Price /Euro'} />

                </div>

                <button type='button' onClick={handelAddNewPackage} className='bg-[#58291E] text-[20px] text-center text-white font-medium w-full py-[16px] px-[24px] rounded-full'>Add Package</button>

            </form>

            <RenderPackages packages={packages} setPackage={setPackage} removePackage={removePackage} />

        </Fragment>

    )
}
