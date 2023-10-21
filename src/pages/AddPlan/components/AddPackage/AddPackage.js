import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Toast } from 'primereact/toast';
import { useAddPackage } from './data';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';

export default function AddPackage({ setData }) {

    const {
        setAddNewPackage,
        inputPriceRef, handelAddNewPackage,
        packages, setPackage, toast, removePackage
    } = useAddPackage(setData);

    const [sizesList, setSizesList] = useState(['XL', 'L', 'M', 'SM']);
    const [selectedSize, setSelectedSize] = useState();

    useEffect(() => {

        setAddNewPackage(prev => ({ ...prev, size: selectedSize }))

    }, [selectedSize]);

    return (
        <div className='rounded-[20px] mt-20 border border-[#252525] p-[32px] grid grid-cols-12 gap-10'>

            <div className='col-span-6'>

                <div className='mb-6'>

                    <label htmlFor={'Size'} className='text-[18px] text-[#252525] font-medium'>Size</label>

                    <Dropdown value={selectedSize} inputId='Size' onChange={(e) => setSelectedSize(e.value)} options={sizesList} optionLabel=""
                        placeholder="Enter Country Name" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <div className='mb-6'>

                    <label htmlFor={'Price'} className='text-[18px] text-[#252525] font-medium'>Price</label>

                    <input ref={inputPriceRef} onChange={e => setAddNewPackage(prev => ({ ...prev, price: e.target.value }))} type='number' id={'Price'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Price'} />

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
