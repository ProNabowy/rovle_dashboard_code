import { Fragment } from 'react';
import RenderPacakges from '../RenderPacakges/RenderPacakges';
import { useAddPackage } from '../data';
import { Dropdown } from 'primereact/dropdown';

export default function PackagesForm({ formik }) {

    const {
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        removePackage,
        selectedProduct
    } = useAddPackage(formik);

    return (

        <Fragment>

            <form onSubmit={e => e.preventDefault()} className='col-span-6'>


                <div className='mb-6'>

                    <label htmlFor={'Weight /gm'} className='text-[18px] text-[#252525] font-medium'>Product Name</label>

                    <Dropdown options={[]} optionLabel=""
                        placeholder="Select Product" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

                <div className='mb-6'>

                    <label htmlFor={'PriceEuro'} className='text-[18px] text-[#252525] font-medium'>Wight / gm </label>

                    <input ref={inputPriceRef} onChange={e => setAddNewPackage(prev => ({ ...prev, price: e.target.value }))} type='number' id={'PriceEuro'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Price /Euro'} />

                </div>

                <button type='button' onClick={handelAddNewPackage} className='bg-[#58291E] text-[20px] text-center text-white font-medium w-full py-[16px] px-[24px] rounded-full'>Add Package</button>

            </form>

            <RenderPacakges formik={formik} removePackage={removePackage} />



        </Fragment>

    )
}
