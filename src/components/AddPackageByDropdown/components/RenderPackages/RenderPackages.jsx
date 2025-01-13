import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { getSelectedOption } from '../../../../assets/utils/utils'

function RenderPackages({ formik, removePackage, formikKey, options }) {

    return (
        <div className='col-span-12 md:col-span-6'>

            <div className='border border-[#252525] p-2 sm:p-[32px] rounded-md sm:rounded-[20px] h-full max-h-[270px] overflow-y-auto add-package'>
                {
                    formik?.values?.[formikKey || 'sizes']?.map((item, index) => {

                        return (
                            <div key={index} id={item.id} className='flex items-center justify-between p-2 sm:p-3 rounded-[5px] border border-[#252525] mb-2 sm:mb-5'>

                                <p className='font-medium text-[#252525] line-clamp-1 text-[14px] sm:text-base'>{item.price} Euro por {item.weight || getSelectedOption(options, 'id', item?.size_id)?.weight} gm</p>

                                <FontAwesomeIcon icon={faClose} onClick={_ => formik.setFieldValue(formikKey || 'sizes', removePackage(item.id))} className='text-[#252525] text-[20px] cursor-pointer' />

                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default React.memo(RenderPackages);