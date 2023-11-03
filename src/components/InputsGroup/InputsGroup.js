import React from 'react'
import { handelChange } from '../../assets/js/utils'


export default function InputsGroup({ data }) {
    const datsd = { names: [], placeholders: [], state: 'Function', key: 'string', asPassword: "boolean", disableChange: "", values: [] }
    return (
        <div className='flex items-center justify-between mb-6'>

            <div className='sm:w-[48%]'>

                <label htmlFor={data?.names[0]} className='text-[18px] text-[#252525] font-medium'>{data?.names[0]}</label>

                <input value={data?.values && data?.values[0]} name={data?.nameAttr && data?.nameAttr[0]} onChange={data?.disableChange ? data?.disableChange : e => handelChange(data?.state, data?.key[0], e.target.value)} type={data?.asPassword ? "password" : 'text'} id={data?.names[0]} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={data?.placeholders[0]} />

            </div>

            <div className='sm:w-[48%]'>

                <label htmlFor={data?.names[1]} className='text-[18px] text-[#252525] font-medium'>{data?.names[1]}</label>

                <input value={data?.values && data?.values[1]} name={data?.nameAttr && data?.nameAttr[1]} type={data?.asPassword ? "password" : 'text'} onChange={data?.disableChange ? data?.disableChange : e => handelChange(data?.state, data?.key[1], e.target.value)} id={data?.names[1]} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={data?.placeholders[1]} />

            </div>

        </div>
    )
}
