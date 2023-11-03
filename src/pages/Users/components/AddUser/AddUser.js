import { Dropdown } from 'primereact/dropdown';
import { useSelector } from 'react-redux';
import { useHandleAddUserLogic } from './data';
import { InputsGroup, PageContent } from '../../../../components';
import { getSelectedOption } from '../../../../assets/js/utils';


export default function AddUser() {

    const store = useSelector(store => store);

    const { formik } = useHandleAddUserLogic();

    return (

        <PageContent title={'User Form'} showActions={false} >

            <form onSubmit={formik.handleSubmit} className='px-10'>


                <InputsGroup data={
                    {
                        names: ['Name', 'Email'],
                        placeholders: ['Enter Name', 'Enter Email'],
                        disableChange: formik.handleChange,
                        nameAttr: ['user_name', 'user_email'],
                    }
                } />

                <InputsGroup data={
                    {
                        names: ['Password', 'Password Confirmation'],
                        placeholders: ['Enter Password', 'Enter Password Confirmation'],
                        disableChange: formik.handleChange,
                        nameAttr: ['user_password', 'user_password_confirmation'],
                        asPassword: true
                    }
                } />

                <InputsGroup data={
                    {
                        names: ['Address', 'Phone'],
                        placeholders: ['Enter Address', 'Enter Phone Number'],
                        disableChange: formik.handleChange,
                        nameAttr: ['user_address', 'user_phone']
                    }
                } />

                <InputsGroup data={
                    {
                        names: ['Zip', 'Card ID'],
                        placeholders: ['Enter Zip', 'Enter Card ID'],
                        disableChange: formik.handleChange,
                        nameAttr: ['user_zip', 'user_card_id']
                    }
                } />

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%]'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>Country</h2>

                        <Dropdown
                            value={getSelectedOption(store?.countries, 'id', formik?.values?.user_country_id)}
                            onChange={(e) => formik.setFieldValue('user_country_id', e.target.value?.id)}
                            options={store?.countries} optionLabel="name"
                            placeholder="Select Country" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>
                    <div className='sm:w-[48%]'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>Province</h2>

                        <Dropdown
                            value={getSelectedOption(store?.province, 'id', formik?.values?.user_province_id)}
                            onChange={(e) => formik.setFieldValue('user_province_id', e.target.value?.id)}
                            options={store?.province} optionLabel="name"
                            placeholder="Select Province" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                </div>

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%]'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>City</h2>

                        <Dropdown
                            value={getSelectedOption(store?.cities, 'id', formik?.values?.user_city_id)}
                            onChange={(e) => formik.setFieldValue('user_city_id', e.target.value?.id)}
                            options={store?.cities} optionLabel="name"
                            placeholder="Select City" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>
                    <div className='sm:w-[48%]'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>Permissions</h2>

                        <Dropdown
                            value={getSelectedOption(store?.roles, 'id', formik?.values?.role_id)}
                            onChange={(e) => formik.setFieldValue('role_id', e.target.value?.id)}
                            options={store?.roles} optionLabel="name"
                            placeholder="Select Permission" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                </div>


                <div className='flex items-center justify-end mt-10'>

                    <button className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

                </div>

            </form>

        </PageContent>
    )
}
