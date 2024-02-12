import { Dropdown } from 'primereact/dropdown';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CitiesDropdown, InputsGroup, ProvincesDropDown } from '../../../../components';
import { useDataGetter } from './data';
import { Link } from 'react-router-dom';
import { getSelectedOption } from '../../../../assets/utils/utils';

export default function CoffeeFrom({ asEdit }) {

    const {
        formik,
        clickHandler,
        isProvider,
        roasters,
        countries
    } = useDataGetter(asEdit);

    return (

        <form onSubmit={e => e.preventDefault()} className='px-10'>

            <InputsGroup data={
                {
                    names: ['Nombre', 'Código postal'],
                    placeholders: ['Ingresar Nombre', 'Ingresar Código postal'],
                    values: [formik.values?.name, formik.values?.post_code],
                    onChange: formik.handleChange,
                    nameAttr: ['name', 'post_code'],
                }
            } />

            <div className='mb-8'>

                <label htmlFor={'Address'} className='text-[18px] text-[#252525] font-medium'>Dirección</label>

                <input onChange={formik.handleChange} value={formik.values?.address} name='address' type='text' id={'Address'}
                    className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Nombre Dirección'} />

            </div>

            <div className='flex items-center justify-between mb-8'>

                {
                    !isProvider?.id
                        ?
                        <div className='sm:w-[48%]'>

                            <div className='flex items-center justify-between'>

                                <h2 className='text-[18px] text-[#252525] font-medium'>Tostadores</h2>

                                <div className='flex items-center cursor-pointer'>

                                    <Link to={'/groups/roasters'} className='font-medium underline text-[#45B8EA] me-3'>Agregar tostador</Link>

                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#45B8EA]' />

                                </div>

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

                    <label htmlFor={'Country'} className='text-[18px] text-[#252525] font-medium'>País</label>

                    <Dropdown
                        value={getSelectedOption(countries, 'id', formik?.values?.country_id)}
                        onChange={(e) => formik.setFieldValue('country_id', e.target.value?.id)}
                        options={countries} optionLabel="name"
                        filter
                        placeholder="Seleccionar nombre del país" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

            </div>

            <div className='flex items-center justify-between mb-8'>

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

                    <label htmlFor={'Latitude'} className='text-[18px] text-[#252525] font-medium'>Seleccionar latitud</label>

                    <input type='text' id={'Latitude'} value={formik.values.latitude} name='latitude' onChange={formik.handleChange}
                        className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Ingresar latitud'} />

                </div>
                <div className='mb-10 sm:w-[48%]'>

                    <label htmlFor={'Longitude'} className='text-[18px] text-[#252525] font-medium'>Seleccionar longitud</label>

                    <input type='text' id={'Longitude'} value={formik.values?.longitude} name='longitude' onChange={formik.handleChange}
                        className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Ingresar longitud'} />

                </div>

            </div>

            <iframe id="iframeId" src={`https://maps.google.com/maps?q=${formik.values.latitude},${formik.values.longitude}&hl=es;&output=embed&zoom=10`} height="400px" width="100%"></iframe>

            <div className='flex items-center justify-end mt-10'>

                <button onClick={clickHandler} type='submit' className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Enviar</button>

            </div>

        </form>

    )
}
