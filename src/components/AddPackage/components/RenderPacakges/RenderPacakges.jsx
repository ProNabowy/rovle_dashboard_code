import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function RenderPacakges({ formik, removePackage }) {

    return (
        <div className='col-span-12 md:col-span-6'>

            <div className='border border-[#252525] p-2 sm:p-[32px] rounded-md sm:rounded-[20px] h-full max-h-[270px] overflow-y-auto add-package'>
                {
                    formik?.values?.presentations?.map((item, index) => {

                        return (
                            <div key={index} id={item.id} className='flex items-center justify-between p-3 rounded-[5px] border border-[#252525] mb-3 sm:mb-5'>

                                <p className='font-medium text-[#252525] text-[14px] sm:text-base'>{item.price} Euro por {item.weight} gr</p>

                                <FontAwesomeIcon icon={faClose} onClick={_ => formik.setFieldValue('presentations', removePackage(item.id))} className='text-[#252525] text-[20px] cursor-pointer' />

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
