import { useAddPackage } from './data';
import { RenderPacakges } from './components';
import { getSelectedOption } from '../../assets/js/utils';

export default function AddPackage({ formik, provider_id }) {

    const {
        inputWeightRef,
        inputQuntiyRef,
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        roasters,
        removePackage
    } = useAddPackage(formik, provider_id);

    return (

        <div className='rounded-[20px] mt-20 border border-[#252525] p-[32px] grid grid-cols-12 gap-10'>

            <form onSubmit={e => e.preventDefault()} className='col-span-6'>


                <div className='mb-6'>

                    <label htmlFor={'Weight /gm'} className='text-[18px] text-[#252525] font-medium'>Weight</label>

                    <input ref={inputWeightRef} onChange={e => setAddNewPackage(prev => ({ ...prev, weight: e.target.value }))} type='number' id={'Weight /gm'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Weight /gm'} />

                </div>

                <div className='mb-6'>

                    <label htmlFor={'PriceEuro'} className='text-[18px] text-[#252525] font-medium'>Price</label>

                    <input ref={inputPriceRef} onChange={e => setAddNewPackage(prev => ({ ...prev, price: e.target.value }))} type='number' id={'PriceEuro'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Price /Euro'} />

                </div>

                {
                    getSelectedOption(roasters, 'id', provider_id)?.manage_stock
                        ?
                        <div className='mb-6'>

                            <label htmlFor={'Units'} className='text-[18px] text-[#252525] font-medium'>Quantity</label>

                            <input ref={inputQuntiyRef} onChange={e => setAddNewPackage(prev => ({ ...prev, units: e.target.value }))} type='number' id={'Units'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Quantity'} />

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
