import { Dropdown } from 'primereact/dropdown';
import { CitiesDropdown, InputsGroup, ProvincesDropDown } from '../../../../components';
import { getSelectedOption } from '../../../../assets/js/utils';
import { useSelector } from 'react-redux';


export default function UserForm({ formik, clickHandler }) {

    const countries = useSelector(store => store.countries);
    const roles = useSelector(store => store.roles);

    return (

        <form onSubmit={e => e.preventDefault()} className='px-10'>

            <InputsGroup data={
                {
                    names: ['Name', 'Email'],
                    placeholders: ['Enter Name', 'Enter Email'],
                    values: [formik.values?.user_name, formik.values?.user_email],
                    onChange: formik.handleChange,
                    nameAttr: ['user_name', 'user_email'],
                }
            } />


            <InputsGroup data={
                {
                    names: ['Password', 'Password Confirmation'],
                    placeholders: ['Enter Password', 'Enter Password Confirmation'],
                    onChange: formik.handleChange,
                    nameAttr: ['user_password', 'user_password_confirmation'],
                    types: ["password", 'password']
                }
            } />

            <InputsGroup data={
                {
                    names: ['Address', 'Phone'],
                    placeholders: ['Enter Address', 'Enter Phone Number'],
                    values: [formik.values?.user_address, formik.values?.user_phone],
                    onChange: formik.handleChange,
                    nameAttr: ['user_address', 'user_phone']
                }
            } />

            <InputsGroup data={
                {
                    names: ['Zip', 'Card ID'],
                    placeholders: ['Enter Zip', 'Enter Card ID'],
                    values: [formik.values?.user_zip, formik.values?.user_card_id],
                    onChange: formik.handleChange,
                    nameAttr: ['user_zip', 'user_card_id']
                }
            } />

            <div className='flex items-center justify-between mb-8'>

                <div className='sm:w-[48%]'>

                    <h2 className='text-[18px] text-[#252525] font-medium'>Country</h2>

                    <Dropdown
                        value={getSelectedOption(countries, 'id', formik?.values?.user_country_id)}
                        onChange={(e) => formik.setFieldValue('user_country_id', e.target.value?.id)}
                        options={countries} optionLabel="name"
                        placeholder="Select Country" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <ProvincesDropDown
                    formik={formik}
                    country_Key={'user_country_id'}
                    province_Key={'user_province_id'}
                />

            </div>

            <div className='flex items-center justify-between mb-8'>

                <CitiesDropdown
                    formik={formik}
                    provinces={getSelectedOption(countries, 'id', formik?.values?.user_country_id)?.provinces}
                    province_Key={'user_province_id'}
                    city_Key={'user_city_id'}
                />

                <div className='sm:w-[48%]'>

                    <h2 className='text-[18px] text-[#252525] font-medium'>Permissions</h2>

                    <Dropdown
                        value={getSelectedOption(roles, 'id', formik?.values?.role_id)}
                        onChange={(e) => formik.setFieldValue('role_id', e.target.value?.id)}
                        options={roles} optionLabel="name"
                        placeholder="Select Permission" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

            </div>


            <div className='flex items-center justify-end mt-10'>

                <button onClick={clickHandler} type='submit' className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

            </div>

        </form>

    )
}
