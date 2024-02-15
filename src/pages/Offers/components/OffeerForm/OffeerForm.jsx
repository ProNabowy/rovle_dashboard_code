import { Dropdown } from 'primereact/dropdown';
import { faArrowUpRightFromSquare, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fisico, Recurren, Usuario, useDataGetter } from './data';
import { Date, OffeerInfo } from './components';
import { Link } from 'react-router-dom';
import { getSelectedOption } from '../../../../assets/utils/utils';
import { Input } from '../../../../components';


export default function OffeerForm({ formik, clickHandler }) {

    const { roasters, isProvider, isHasPermissions } = useDataGetter(formik);

    return (
        <form onSubmit={e => e.preventDefault()} className='px-10 add-offer-form'>

            <div className='flex-container'>

                <div className={`${isProvider ? "w-full" : "sm:w-[48%]"}`}>

                    <label htmlFor={'name'} className='label'>Nombre de la oferta</label>

                    <Input
                        type='text'
                        id={'name'}
                        name='name'
                        value={formik.values?.name}
                        onChange={formik.handleChange}
                        placeholder={'Ingresa el nombre de la oferta'}
                    />

                </div>

                {
                    !isProvider?.id
                        ?
                        <div className='sm:w-[48%]'>

                            <div className='flex items-center justify-between'>

                                <h2 className='label'>Tostadors</h2>

                                {
                                    isHasPermissions('dashboard.providers.store')
                                        ?
                                        <Link to={'/groups/roasters/add-roaster'} className='flex items-center'>

                                            <h2 className='font-medium underline text-[#45B8EA] me-3'>Agregar Tostador</h2>

                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#45B8EA]' />

                                        </Link>
                                        :
                                        null
                                }


                            </div>

                            <Dropdown filter value={getSelectedOption(roasters, 'id', formik?.values?.provider_id)} name='provider_id' onChange={(e) => formik.setFieldValue('provider_id', e.target.value?.id)} options={roasters} optionLabel="commercial_name"
                                className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Seleccionar Tostador' />

                        </div>
                        :
                        null
                }

            </div>

            <div className='mb-8'>

                <label htmlFor={'name'} className='label'>Nivel</label>

                <Dropdown filter value={getSelectedOption(Usuario, 'id', formik?.values?.level_id)} name='level_id' onChange={(e) => formik.setFieldValue('level_id', e.target.value?.id)} options={Usuario} optionLabel="name"
                    className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Seleccionar Nivel' />

            </div>

            <OffeerInfo formik={formik} />

            <div className='mb-8'>

                <label htmlFor={'duration'} className='label'>Recurrencia</label>

                <Dropdown filter value={getSelectedOption(Recurren, 'id', formik?.values?.duration)} name='duration' onChange={(e) => formik.setFieldValue('duration', e.target.value?.id)} options={Recurren} optionLabel="name"
                    inputId='duration' className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Seleccionar Recurrencia' />

            </div>

            <Date formik={formik} />

            <div className='mb-8'>

                <label htmlFor={'Fisico'} className='label'>Dónde canjearlo</label>

                <Dropdown filter value={getSelectedOption(Fisico, 'id', formik?.values?.offer_place)} name='offer_place' onChange={(e) => formik.setFieldValue('offer_place', e.target.value?.id)} options={Fisico} optionLabel="name"
                    className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Seleccionar dónde canjearlo' />

            </div>

            <div>

                <label htmlFor={'Description'} className='label'>Descripción</label>

                <textarea rows={5} type='text' value={formik.values?.description} onChange={formik.handleChange} name='description' id={'Description'}
                    className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Ingresar Descripción'} />

            </div>

            <div className='flex items-center justify-end mt-10'>

                <button onClick={clickHandler} type='submit' className='min-btn'>Enviar</button>

            </div>

        </form>
    )
}
