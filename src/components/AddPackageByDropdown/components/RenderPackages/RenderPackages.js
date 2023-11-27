import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getSelectedOption } from '../../../../assets/js/utils'
import { useSelector } from 'react-redux'
import React from 'react'

function RenderPackages({ formik, removePackage }) {

    const sizes = useSelector(store => store.sizes);

    return (
        <div className='col-span-6'>

            <div className='border border-[#252525] p-[32px] rounded-[20px] h-full max-h-[270px] overflow-y-auto add-package'>
                {
                    formik?.values?.sizes?.map((item, index) => {

                        return (
                            <div key={index} id={item.id} className='flex items-center justify-between p-3 rounded-[5px] border border-[#252525] mb-5'>

                                <p className='font-medium text-[#252525]'>{item.price} Euro per {item.weight || getSelectedOption(sizes, 'id', item?.size_id)?.weight} gm</p>

                                <FontAwesomeIcon icon={faClose} onClick={_ => formik.setFieldValue('sizes', removePackage(item.id))} className='text-[#252525] text-[20px] cursor-pointer' />

                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default React.memo(RenderPackages);