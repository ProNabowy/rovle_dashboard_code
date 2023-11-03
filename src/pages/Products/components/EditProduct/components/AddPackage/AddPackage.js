import { useAddPackage } from './data';
import { getSelectedOption } from '../../../../../../assets/js/utils';
import { RenderPacakges } from './components';

export default function AddPackage({ formik }) {

    const {
        inputWeightRef,
        inputQuntiyRef,
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        roasters,
        removePackage
    } = useAddPackage(formik);

    return (

        <div className='rounded-[20px] mt-20 border border-[#252525] p-[32px] grid grid-cols-12 gap-10'>

            <form onSubmit={e => e.preventDefault()} className='col-span-6'>


                <div className='mb-6'>

                    <label htmlFor={'Weight /gm'} className='text-[18px] text-[#252525] font-medium'>Weight</label>

                    <input ref={inputWeightRef} onChange={e => setAddNewPackage(prev => ({ ...prev, weight: e.target.value }))} type='text' id={'Weight /gm'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Weight /gm'} />

                </div>

                <div className='mb-6'>

                    <label htmlFor={'PriceEuro'} className='text-[18px] text-[#252525] font-medium'>Price</label>

                    <input ref={inputPriceRef} onChange={e => setAddNewPackage(prev => ({ ...prev, price: e.target.value }))} type='number' id={'PriceEuro'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Price /Euro'} />

                </div>

                {
                    getSelectedOption(roasters, 'id', formik?.values?.provider_id)?.manage_stock
                        ?
                        <div className='mb-6'>

                            <label htmlFor={'Quantity'} className='text-[18px] text-[#252525] font-medium'>Quantity</label>

                            <input ref={inputQuntiyRef} onChange={e => setAddNewPackage(prev => ({ ...prev, quantity: e.target.value }))} type='number' id={'Quantity'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Quantity'} />

                        </div>
                        :
                        null
                }

                <button type='button' onClick={handelAddNewPackage} className='bg-[#58291E] text-[20px] text-center text-white font-medium w-full py-[16px] px-[24px] rounded-full'>Add Package</button>

            </form>

            <RenderPacakges formik={formik} removePackage={removePackage} />

        </div >
    )
}
