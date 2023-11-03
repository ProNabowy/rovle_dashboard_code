import Options from "../Options/Options";

export default function PermissionsList({ optionKey, permissions, options, onOptionChange }) {


    return (
        <div className='col-span-6 flex items-center'>

            <label className='text-[#252525] text-[20px] min-w-[200px]'>{optionKey}</label>

            <Options
                onOptionChange={onOptionChange}
                options={options}
                items={permissions[optionKey]}
            />

        </div>
    )
}
