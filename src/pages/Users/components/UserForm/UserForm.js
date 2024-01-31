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
                    names: ['Nombre', 'Correo electrónico'],
                    placeholders: ['Ingresar Nombre', 'Ingresar Correo electrónico'],
                    values: [formik.values?.user_name, formik.values?.user_email],
                    onChange: formik.handleChange,
                    nameAttr: ['user_name', 'user_email'],
                }
            } />


            <InputsGroup data={
                {
                    names: ['Contraseña', 'Confirmación de contraseña'],
                    placeholders: ['Ingresar Password', 'Ingresar Confirmación de contraseña'],
                    onChange: formik.handleChange,
                    nameAttr: ['user_password', 'user_password_confirmation'],
                    types: ["password", 'password']
                }
            } />

            <InputsGroup data={
                {
                    names: ['Dirección', 'Teléfono'],
                    placeholders: ['Ingresar Address', 'Ingresar Teléfono'],
                    values: [formik.values?.user_address, formik.values?.user_phone],
                    onChange: formik.handleChange,
                    nameAttr: ['user_address', 'user_phone']
                }
            } />

            <InputsGroup data={
                {
                    names: ['Código postal', 'Identificación de tarjeta'],
                    placeholders: ['Ingresar Código postal', 'Ingresar Identificación de tarjeta'],
                    values: [formik.values?.user_zip, formik.values?.user_card_id],
                    onChange: formik.handleChange,
                    nameAttr: ['user_zip', 'user_card_id']
                }
            } />

            <div className='flex items-center justify-between mb-8'>

                <div className='sm:w-[48%]'>

                    <h2 className='text-[18px] text-[#252525] font-medium'>País</h2>

                    <Dropdown
                        value={getSelectedOption(countries, 'id', formik?.values?.user_country_id)}
                        onChange={(e) => formik.setFieldValue('user_country_id', e.target.value?.id)}
                        options={countries} optionLabel="name"
                        placeholder="Seleccionar País" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

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

                    <h2 className='text-[18px] text-[#252525] font-medium'>Permisos</h2>

                    <Dropdown
                        value={getSelectedOption(roles, 'id', formik?.values?.role_id)}
                        onChange={(e) => formik.setFieldValue('role_id', e.target.value?.id)}
                        options={roles} optionLabel="name"
                        placeholder="Seleccionar Permiso" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

            </div>


            <div className='flex items-center justify-end mt-10'>

                <button onClick={clickHandler} type='submit' className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Enviar</button>

            </div>

        </form>

    )
}
