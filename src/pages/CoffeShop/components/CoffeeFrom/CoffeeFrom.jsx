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

    const provinces = getSelectedOption(countries, 'id', formik?.values?.country_id)?.provinces;
    const cities = getSelectedOption(provinces, 'id', formik?.values?.province_id)?.cities;

    // Construct the address string
    const address = `${getSelectedOption(cities, 'id', formik?.values?.city_id)?.name}, ${getSelectedOption(provinces, 'id', formik?.values?.province_id)?.name}, ${getSelectedOption(countries, 'id', formik?.values?.country_id)?.name}`;

    return (

        <form onSubmit={formik.handleSubmit} autoComplete='off' className='px-3 sm:px-10'>

            <div className='flex-container'>

                <div className='w-full sm:w-[48%]'>

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

                <div className='w-full sm:w-[48%]'>

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

            <div className='flex-container'>

                <div className='w-full sm:w-[48%]'>

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

                <div className='w-full sm:w-[48%]'>

                    <label htmlFor={'options'} className='label'>Opciones de tienda</label>

                    <div className='flex items-center justify-between flex-wrap gap-y-5'>

                        <div className='flex items-center me-2 w-full lg:w-fit'>

                            <label htmlFor={'accepts_online_orders'} className='text-[13px] !mb-0 me-3 min-w-[185px] select-none text-[#252525] font-medium'>Acepta pedidos online</label>

                            <Checkbox
                                inputId='accepts_online_orders'
                                onChange={e => formik.setFieldValue('accepts_online_orders', e.checked)}
                                checked={formik.values?.accepts_online_orders ? true : false}
                            ></Checkbox>

                        </div>
                        <div className='flex items-center me-2 w-full lg:w-fit'>

                            <label htmlFor={'accepts_orders_pick_up'} className='text-[13px] me-3 !mb-0 select-none min-w-[185px] text-[#252525] font-medium'>Acepta recogidas de productos</label>

                            <Checkbox
                                inputId='accepts_orders_pick_up'
                                onChange={e => formik.setFieldValue('accepts_orders_pick_up', e.checked)}
                                checked={formik.values?.accepts_orders_pick_up ? true : false}
                            ></Checkbox>

                        </div>
                        <div className='flex items-center me-2 w-full lg:w-fit'>

                            <label htmlFor={'default_for_sending'} className='text-[13px] me-3 !mb-0 select-none min-w-[185px] text-[#252525] font-medium'>Tienda por defecto para envíos</label>

                            <Checkbox
                                inputId='default_for_sending'
                                onChange={e => {
                                    formik.setFieldValue('default_for_sending', e.checked);
                                    if (!formik.values?.accepts_online_orders) {

                                        formik.setFieldValue('accepts_online_orders', e.checked);

                                    }
                                }}
                                checked={formik.values?.default_for_sending ? true : false}
                            ></Checkbox>

                        </div>

                    </div>
                </div>

            </div>

            <div className='flex-container'>

                {
                    !isProvider?.id
                        ?
                        <div className='w-full sm:w-[48%]'>

                            <div className='flex items-center justify-between flex-wrap'>

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
                                emptyFilterMessage="No hay opciones disponibles"
                                emptyMessage="No hay opciones disponibles"
                                placeholder="Seleccionar Tostador" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                        </div>
                        :
                        null
                }

                <div className={`${isProvider ? "w-full" : "w-full sm:w-[48%]"}`}>

                    <label htmlFor={'Country'} className='label'>País</label>

                    <Dropdown
                        value={getSelectedOption(countries, 'id', formik?.values?.country_id)}
                        onChange={(e) => formik.setFieldValue('country_id', e.target.value?.id)}
                        options={countries} optionLabel="name"
                        emptyFilterMessage="No hay opciones disponibles"
                        emptyMessage="No hay opciones disponibles"
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
                    provinces={provinces}
                    province_Key={'province_id'}
                    city_Key={'city_id'}
                />

            </div>

            <iframe
                id="iframeId"
                loading='async'
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&hl=es;&output=embed&zoom=10`}
                height="400px"
                width="100%"
            ></iframe>

            <button type='submit' className='min-btn block ml-auto mt-10'>Enviar</button>

        </form>

    )
}
