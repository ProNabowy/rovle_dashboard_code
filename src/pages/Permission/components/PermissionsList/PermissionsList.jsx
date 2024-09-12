import Options from "../Options";

export default function PermissionsList({ optionKey, permissions, options, formik, onOptionChange, isDisabled }) {


    return (
        <div className='col-span-6 flex items-center flex-wrap'>

            <label className='text-[#252525] text-[20px] me-5 sm:me-0 sm:min-w-[200px]'>{optionKey}</label>

            <Options
                onOptionChange={onOptionChange}
                options={options}
                isDisabled={isDisabled}
                formik={formik}
                items={permissions[optionKey]}
            />

        </div>
    )
}
