import { Dropdown } from 'primereact/dropdown';
import { CitiesDropdown, InputsGroup, ProvincesDropDown } from '../../../../components';
import RedioGroup from '../RedioGroup/RedioGroup';
import { getSelectedOption } from '../../../../assets/utils/utils';
import { useDataGetter } from './data';


export default function RoasterForm({ formik, isRenderPassword }) {

    const { countries, handleBlur } = useDataGetter(formik);

    return (

        <form onSubmit={formik.handleSubmit} className='px-10'>

            <InputsGroup data={
                {
                    names: ['Nombre', 'Correo electrónico'],
                    placeholders: ['Ingresar Nombre', 'Ingresar Correo electrónico'],
                    values: [formik.values?.user_name, formik.values?.user_email],
                    onChange: formik.handleChange,
                    required: [true, true],
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
                            required: [true, true],
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
                    required: [true, true],
                    nameAttr: ['provider_nif', 'provider_commercial_name']
                }
            } />

            <InputsGroup data={
                {
                    names: ['Nombre oficial', 'Dirección'],
                    placeholders: ['Ingresar Nombre oficial', 'Ingresar Dirección'],
                    values: [formik.values?.provider_official_name, formik.values?.provider_address],
                    onChange: formik.handleChange,
                    required: [true, true],
                    nameAttr: ['provider_official_name', 'provider_address']
                }
            } />

            <div className='flex items-center justify-between mb-8'>

                <div className='sm:w-[48%]'>

                    <label htmlFor={'provider_zip'} className='text-[18px] text-[#252525] font-medium'>Código postal</label>

                    <input
                        onChange={formik.handleChange}
                        onBlur={handleBlur}
                        value={formik.values?.provider_zip}
                        name='provider_zip'
                        type='text'
                        required
                        min={5}
                        max={5}
                        maxLength={5}
                        minLength={5}
                        id={'provider_zip'}
                        className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                        placeholder={'Ingresar Código postal'}
                    />

                </div>

                <div className='sm:w-[48%]'>

                    <label htmlFor={'provider_phone'} className='text-[18px] text-[#252525] font-medium'>Teléfono</label>

                    <input
                        onChange={formik.handleChange}
                        value={formik.values?.provider_phone}
                        name='provider_phone'
                        type='text'
                        required
                        id={'provider_phone'}
                        className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]'
                        placeholder={'Ingresar Teléfono'}
                    />

                </div>

            </div>

            <div className='flex items-center justify-between mb-8'>

                <div className='sm:w-[48%]'>

                    <h2 className='text-[18px] text-[#252525] font-medium'>País</h2>

                    <Dropdown
                        value={getSelectedOption(countries, 'id', formik?.values?.provider_country_id)}
                        onChange={(e) => formik.setFieldValue('provider_country_id', e.target.value?.id)}
                        options={countries} optionLabel="name"
                        filter
                        placeholder="Seleccionar País" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <ProvincesDropDown
                    formik={formik}
                    countries={countries}
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

                <button type='submit' className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Enviar</button>

            </div>

        </form>
    )
}
