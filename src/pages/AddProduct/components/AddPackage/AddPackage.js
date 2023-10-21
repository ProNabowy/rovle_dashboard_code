import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Toast } from 'primereact/toast';
import { useAddPackage } from './data';

export default function AddPackage({ setData }) {

    const {
        inputWeightRef, setAddNewPackage,
        inputPriceRef, handelAddNewPackage,
        packages, setPackage, toast, removePackage
    } = useAddPackage(setData)

    return (
        <div className='rounded-[20px] mt-20 border border-[#252525] p-[32px] grid grid-cols-12 gap-10'>


            <div className='col-span-6'>


                <div className='mb-6'>

                    <label htmlFor={'Weight /gm'} className='text-[18px] text-[#252525] font-medium'>Weight</label>

                    <input ref={inputWeightRef} onChange={e => setAddNewPackage(prev => ({ ...prev, weight: e.target.value }))} type='text' id={'Weight /gm'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Weight /gm'} />

                </div>

                <div className='mb-6'>

                    <label htmlFor={'PriceEuro'} className='text-[18px] text-[#252525] font-medium'>Price</label>

                    <input ref={inputPriceRef} onChange={e => setAddNewPackage(prev => ({ ...prev, price: e.target.value }))} type='number' id={'PriceEuro'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Price /Euro'} />

                </div>

                <div className='mb-6'>

                    <label htmlFor={'Quantity'} className='text-[18px] text-[#252525] font-medium'>Quantity</label>

                    <input ref={inputPriceRef} onChange={e => setAddNewPackage(prev => ({ ...prev, quantity: e.target.value }))} type='number' id={'Quantity'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Quantity'} />

                </div>

                <button type='button' onClick={handelAddNewPackage} className='bg-[#58291E] text-[20px] text-center text-white font-medium w-full py-[16px] px-[24px] rounded-full'>Add Package</button>

            </div>

            <div className='col-span-6'>

                <div className='border border-[#252525] p-[32px] rounded-[20px] h-full max-h-[270px] overflow-y-auto add-package'>

                    {
                        packages.map((item, index) => {
                            return (
                                <div key={index} id={item.id} className='flex items-center justify-between p-3 rounded-[5px] border border-[#252525] mb-5'>

                                    <p className='font-medium text-[#252525]'>{item.price} Euro per {item.weight} gm</p>

                                    <FontAwesomeIcon icon={faClose} onClick={_ => setPackage(removePackage(item.id))} className='text-[#252525] text-[20px] cursor-pointer' />

                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <Toast ref={toast} />
        </div>
    )
}
