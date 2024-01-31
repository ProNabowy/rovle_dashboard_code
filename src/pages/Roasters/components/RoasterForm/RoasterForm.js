import { Dropdown } from 'primereact/dropdown';
import { CitiesDropdown, InputsGroup, ProvincesDropDown } from '../../../../components';
import { getSelectedOption } from '../../../../assets/js/utils';
import { useSelector } from 'react-redux';
import RedioGroup from '../RedioGroup/RedioGroup';


export default function RoasterForm({ formik, clickHandler, isRenderPassword }) {

    const countries = useSelector(store => store.countries);

    return (

        <form onSubmit={e => e.preventDefault()} className='px-10'>

            <InputsGroup data={
                {
                    names: ['Nombre', 'Correo electrónico'],
                    placeholders: ['Ingresar Nombre', 'Ingresar Correo electrónico'],
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
                            names: ['Contraseña', 'Confirmación de contraseña'],
                            placeholders: ['Ingresar Contraseña', 'Ingresar Confirmación de contraseña'],
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
                    placeholders: ['Ingresar NIF', 'Ingresar Commercial Name'],
                    values: [formik.values?.provider_nif, formik.values?.provider_commercial_name],
                    onChange: formik.handleChange,
                    nameAttr: ['provider_nif', 'provider_commercial_name']
                }
            } />

            <InputsGroup data={
                {
                    names: ['Nombre oficial', 'Dirección'],
                    placeholders: ['Ingresar Nombre oficial', 'Ingresar Dirección'],
                    values: [formik.values?.provider_official_name, formik.values?.provider_address],
                    onChange: formik.handleChange,
                    nameAttr: ['provider_official_name', 'provider_address']
                }
            } />

            <InputsGroup data={
                {
                    names: ['Código postal', 'Teléfono'],
                    placeholders: ['Ingresar Código postal', 'Ingresar Teléfono'],
                    values: [formik.values?.provider_zip, formik.values?.provider_phone],
                    onChange: formik.handleChange,
                    nameAttr: ['provider_zip', 'provider_phone']
                }
            } />


            <div className='flex items-center justify-between mb-8'>

                <div className='sm:w-[48%]'>

                    <h2 className='text-[18px] text-[#252525] font-medium'>País</h2>

                    <Dropdown
                        value={getSelectedOption(countries, 'id', formik?.values?.provider_country_id)}
                        onChange={(e) => formik.setFieldValue('provider_country_id', e.target.value?.id)}
                        options={countries} optionLabel="name"
                        placeholder="Seleccionar País" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <ProvincesDropDown
                    formik={formik}
                    country_Key={'provider_country_id'}
                    province_Key={'provider_province_id'}
                />

            </div>

            <div className='flex items-center justify-between mb-8'>


                <CitiesDropdown
                    formik={formik}
                    provinces={getSelectedOption(countries, 'id', formik?.values?.provider_country_id)?.provinces}
                    province_Key={'provider_province_id'}
                    city_Key={'provider_city_id'}
                />

                <RedioGroup formik={formik} />

            </div>


            <div className='flex items-center justify-end mt-10'>

                <button onClick={clickHandler} type='submit' className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Enviar</button>

            </div>

        </form>
    )
}
