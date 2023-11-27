import { Dropdown } from 'primereact/dropdown';
import { InputsGroup } from '../../../../components';
import { getSelectedOption } from '../../../../assets/js/utils';
import { useSelector } from 'react-redux';
import RedioGroup from '../RedioGroup/RedioGroup';


export default function RoasterForm({ formik, clickHandler, isRenderPassword }) {

    const store = useSelector(store => store);

    return (

        <form onSubmit={e => e.preventDefault()} className='px-10'>

            <InputsGroup data={
                {
                    names: ['Name', 'Email'],
                    placeholders: ['Enter Name', 'Enter Email'],
                    values: [formik.values?.user_name, formik.values?.user_email],
                    onChange: formik.handleChange,
                    nameAttr: ['user_name', 'user_email']
                }
            } />

            {
                isRenderPassword
                    ?
                    <InputsGroup data={
                        {
                            names: ['Password', 'Password Confirmation'],
                            placeholders: ['Enter Password', 'Enter Password Confirmation'],
                            onChange: formik.handleChange,
                            nameAttr: ['user_password', 'user_password_confirmation'],
                            types: ["password", 'password']
                        }
                    } />
                    :
                    null
            }

            <InputsGroup data={
                {
                    names: ['NIF', 'Commercial Name'],
                    placeholders: ['Enter NIF', 'Enter Commercial Name'],
                    values: [formik.values?.provider_nif, formik.values?.provider_commercial_name],
                    onChange: formik.handleChange,
                    nameAttr: ['provider_nif', 'provider_commercial_name']
                }
            } />

            <InputsGroup data={
                {
                    names: ['Official Name', 'Address'],
                    placeholders: ['Enter Official Name', 'Enter Address'],
                    values: [formik.values?.provider_official_name, formik.values?.provider_address],
                    onChange: formik.handleChange,
                    nameAttr: ['provider_official_name', 'provider_address']
                }
            } />

            <InputsGroup data={
                {
                    names: ['Zip', 'Phone'],
                    placeholders: ['Enter Zip', 'Enter Phone'],
                    values: [formik.values?.provider_zip, formik.values?.provider_phone],
                    onChange: formik.handleChange,
                    nameAttr: ['provider_zip', 'provider_phone']
                }
            } />


            <div className='flex items-center justify-between mb-6'>

                <div className='sm:w-[48%]'>

                    <h2 className='text-[18px] text-[#252525] font-medium'>Country</h2>

                    <Dropdown
                        value={getSelectedOption(store?.countries, 'id', formik?.values?.provider_country_id)}
                        onChange={(e) => formik.setFieldValue('provider_country_id', e.target.value?.id)}
                        options={store?.countries} optionLabel="name"
                        placeholder="Select Country" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <div className='sm:w-[48%]'>

                    <h2 className='text-[18px] text-[#252525] font-medium'>City</h2>

                    <Dropdown
                        value={getSelectedOption(store?.cities, 'id', formik?.values?.provider_city_id)}
                        onChange={(e) => formik.setFieldValue('provider_city_id', e.target.value?.id)}
                        options={store?.cities} optionLabel="name"
                        placeholder="Select City" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

            </div>

            <div className='flex items-center justify-between mb-6'>


                <div className='sm:w-[48%]'>

                    <h2 className='text-[18px] text-[#252525] font-medium'>Province</h2>

                    <Dropdown
                        value={getSelectedOption(store?.province, 'id', formik?.values?.provider_province_id)}
                        onChange={(e) => formik.setFieldValue('provider_province_id', e.target.value?.id)}
                        options={store?.province} optionLabel="name"
                        placeholder="Select Permission" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <RedioGroup formik={formik} />

            </div>


            <div className='flex items-center justify-end mt-10'>

                <button onClick={clickHandler} type='submit' className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

            </div>

        </form>
    )
}
