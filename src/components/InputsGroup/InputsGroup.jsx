export default function InputsGroup({ data }) {

    const keysEamxple = {
        names: [],
        placeholders: [],
        state: 'Function',
        key: 'string',
        onChange: "Function",
        onBlur: [],
        values: [],
    }

    return (
        <div className='flex items-center justify-between mb-8'>

            <div className='sm:w-[48%]'>

                <label htmlFor={data?.names[0]} className='text-[18px] text-[#252525] font-medium'>{data?.names[0]}</label>

                <input
                    required={data?.required?.[0]}
                    value={data?.values && data?.values[0]}
                    name={data?.nameAttr && data?.nameAttr[0]}
                    type={data.types && data?.types[0] || 'text'}
                    onChange={data?.onChange}
                    min={data?.min?.[0]}
                    onBlur={data?.onBlur?.[0]}
                    max={data?.max?.[0]}
                    id={data?.names && data?.names[0]} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                    placeholder={data?.placeholders[0]}
                />

            </div>

            <div className='sm:w-[48%]'>

                <label htmlFor={data?.names[1]} className='text-[18px] text-[#252525] font-medium'>{data?.names[1]}</label>

                <input
                    required={data?.required?.[1]}
                    min={data?.min?.[1]}
                    max={data?.max?.[1]}
                    disabled={data?.disabledSecondInput}
                    value={data?.values && data?.values[1]}
                    name={data?.nameAttr && data?.nameAttr[1]}
                    type={data?.types && data?.types[1] || 'text'}
                    onBlur={data?.onBlur?.[1]}
                    onChange={data?.onChange}
                    id={data?.names && data?.names[1]} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                    placeholder={data?.placeholders[1]}
                />

            </div>

        </div>
    )
}
