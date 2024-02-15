import { Dropdown } from 'primereact/dropdown';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CitiesDropdown, Input, ProvincesDropDown } from '../../../../components';
import { useDataGetter } from './data';
import { Link } from 'react-router-dom';
import { getSelectedOption } from '../../../../assets/utils/utils';
import { Checkbox } from 'primereact/checkbox';


export default function CoffeeFrom({ asEdit, stateList }) {

    const {
        formik,
        isProvider,
        roasters,
        countries,
        isHasPermissions,
        handleBlur
    } = useDataGetter(asEdit, stateList);

    return (

        <form onSubmit={formik.handleSubmit} className='px-10'>

            <div className='flex-container'>

                <div className='sm:w-[48%]'>

                    <label htmlFor={'name'} className='label'>Nombre</label>

                    <Input
                        onChange={formik.handleChange}
                        value={formik.values?.name}
                        name='name'
                        type='text'
                        required
                        id={'name'}
                        placeholder={'Ingresar Nombre'}
                    />

                </div>

                <div className='sm:w-[48%]'>

                    <label htmlFor={'post_code'} className='label'>Código postal</label>

                    <Input
                        onChange={formik.handleChange}
                        onBlur={handleBlur}
                        value={formik.values?.post_code}
                        name='post_code'
                        type='text'
                        required
                        min={5}
                        max={5}
                        maxLength={5}
                        minLength={5}
                        id={'post_code'}
                        placeholder={'Ingresar Código postal'}
                    />

                </div>

            </div>

            <div className='flex items-center justify-between '>

                <div className='mb-8 sm:w-[48%]'>

                    <label htmlFor={'Address'} className='label'>Dirección</label>

                    <Input
                        onChange={formik.handleChange}
                        value={formik.values?.address}
                        name='address' type='text'
                        required
                        id={'Address'}
                        placeholder={'Nombre Dirección'}
                    />

                </div>

                <div className='mb-8 sm:w-[48%]'>

                    <label htmlFor={'options'} className='label'>Opciones de tienda</label>

                    <div className='flex items-center justify-between'>

                        <div className='flex items-center me-5'>

                            <label htmlFor={'online'} className='text-[18px] !mb-0 me-3 select-none text-[#252525] font-medium'>Acepta pedidos online</label>

                            <Checkbox
                                inputId='online'
                                onChange={e => formik.setFieldValue('online', e.checked)}
                                checked={formik.values?.online}
                            ></Checkbox>

                        </div>
                        <div className='flex items-center me-5'>

                            <label htmlFor={'offline'} className='text-[18px] me-3 !mb-0 select-none text-[#252525] font-medium'>Acepta recogidas de productos</label>

                            <Checkbox
                                inputId='offline'
                                onChange={e => formik.setFieldValue('offline', e.checked)}
                                checked={formik.values?.offline}
                            ></Checkbox>

                        </div>

                    </div>
                </div>

            </div>

            <div className='flex-container'>

                {
                    !isProvider?.id
                        ?
                        <div className='sm:w-[48%]'>

                            <div className='flex items-center justify-between'>

                                <h2 className='label'>Tostadores</h2>

                                {
                                    isHasPermissions('dashboard.providers.store')
                                        ?

                                        <div className='flex items-center cursor-pointer'>

                                            <Link to={'/groups/roasters/add-roaster'} className='font-medium underline text-[#45B8EA] me-3'>Agregar tostador</Link>

                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#45B8EA]' />

                                        </div>
                                        :
                                        null
                                }
                            </div>

                            <Dropdown
                                value={getSelectedOption(roasters, 'id', formik?.values?.provider_id)}
                                onChange={(e) => formik.setFieldValue('provider_id', e.target.value?.id)}
                                options={roasters} optionLabel="commercial_name"
                                placeholder="Seleccionar Tostador" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                        </div>
                        :
                        null
                }

                <div className={`${isProvider ? "w-full" : "sm:w-[48%]"}`}>

                    <label htmlFor={'Country'} className='label'>País</label>

                    <Dropdown
                        value={getSelectedOption(countries, 'id', formik?.values?.country_id)}
                        onChange={(e) => formik.setFieldValue('country_id', e.target.value?.id)}
                        options={countries} optionLabel="name"
                        filter
                        placeholder="Seleccionar nombre del país" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

            </div>

            <div className='flex-container'>

                <ProvincesDropDown
                    formik={formik}
                    countries={countries}
                    country_Key={'country_id'}
                    province_Key={'province_id'}
                />

                <CitiesDropdown
                    formik={formik}
                    provinces={getSelectedOption(countries, 'id', formik?.values?.country_id)?.provinces}
                    province_Key={'province_id'}
                    city_Key={'city_id'}
                />

            </div>

            <div className='flex items-center justify-between'>

                <div className='mb-10 sm:w-[48%]'>

                    <label htmlFor={'Latitude'} className='label'>Seleccionar latitud</label>

                    <Input
                        id={'Latitude'}
                        value={formik.values.latitude}
                        name='latitude'
                        onChange={formik.handleChange}
                        placeholder={'Ingresar latitud'}
                    />

                </div>
                <div className='mb-10 sm:w-[48%]'>

                    <label htmlFor={'Longitude'} className='label'>Seleccionar longitud</label>

                    <Input
                        type='text'
                        id={'Longitude'}
                        value={formik.values?.longitude}
                        name='longitude'
                        onChange={formik.handleChange}
                        placeholder={'Ingresar longitud'}
                    />

                </div>

            </div>

            <iframe
                id="iframeId"
                loading='async'
                src={`https://maps.google.com/maps?q=${formik.values.latitude},${formik.values.longitude}&hl=es;&output=embed&zoom=10`}
                height="400px"
                width="100%"
            ></iframe>

            <button type='submit' className='min-btn block ml-auto'>Enviar</button>

        </form>

    )
}
