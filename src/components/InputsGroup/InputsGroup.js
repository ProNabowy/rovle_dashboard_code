export default function InputsGroup({ data }) {
    const keys = { names: [], placeholders: [], state: 'Function', key: 'string', onChange: "", values: [] }
    return (
        <div className='flex items-center justify-between mb-8'>

            <div className='sm:w-[48%]'>

                <label htmlFor={data?.names[0]} className='text-[18px] text-[#252525] font-medium'>{data?.names[0]}</label>

                <input
                    value={data?.values && data?.values[0]}
                    name={data?.nameAttr && data?.nameAttr[0]}
                    type={data.types && data?.types[0] || 'text'}
                    onChange={data?.onChange}
                    id={data?.names && data?.names[0]} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                    placeholder={data?.placeholders[0]}
                />

            </div>

            <div className='sm:w-[48%]'>

                <label htmlFor={data?.names[1]} className='text-[18px] text-[#252525] font-medium'>{data?.names[1]}</label>

                <input
                    disabled={data?.disabledSecondInput}
                    value={data?.values && data?.values[1]}
                    name={data?.nameAttr && data?.nameAttr[1]}
                    type={data?.types && data?.types[1] || 'text'}
                    onChange={data?.onChange}
                    id={data?.names && data?.names[1]} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                    placeholder={data?.placeholders[1]}
                />

            </div>

        </div>
    )
}
