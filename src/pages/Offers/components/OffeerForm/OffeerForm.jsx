import { Dropdown } from 'primereact/dropdown';
import { faArrowUpRightFromSquare, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fisico, AppFisico, Recurren, Usuario, useDataGetter } from './data';
import { Date, OffeerInfo } from './components';
import { Link } from 'react-router-dom';
import { getSelectedOption } from '../../../../assets/utils/utils';
import { Input } from '../../../../components';


export default function OffeerForm({ formik }) {

    const { roasters, isProvider, isHasPermissions } = useDataGetter(formik);

    return (
        <form onSubmit={formik.handleSubmit} autoComplete='off' className='px-3 sm:px-10 add-offer-form'>

            <div className='flex-container'>

                <div className={`${isProvider ? "w-full" : "w-full sm:w-[48%]"}`}>

                    <label htmlFor={'name'} className='label'>Nombre de la oferta</label>

                    <Input
                        type='text'
                        id={'name'}
                        required={true}
                        name='name'
                        value={formik.values?.name}
                        onChange={formik.handleChange}
                        placeholder={'Ingresa el nombre de la oferta'}
                    />

                </div>

                {
                    !isProvider?.id
                        ?
                        <div className='w-full sm:w-[48%]'>

                            <div className='flex items-center justify-between'>

                                <h2 className='label'>Tostadores</h2>

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

                            <Dropdown emptyFilterMessage="No hay opciones disponibles"
                                emptyMessage="No hay opciones disponibles" filter value={getSelectedOption([{ provider_id: "all", id: "all", commercial_name: "Todos los tostadores." }, ...roasters], 'id', formik?.values?.provider_id)} name='provider_id' onChange={(e) => formik.setFieldValue('provider_id', e.target.value?.id)} options={[{ provider_id: "all", id: "all", commercial_name: "Todos los tostadores." }, ...roasters]} optionLabel="commercial_name"
                                className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Seleccionar Tostador' />

                        </div>
                        :
                        null
                }

            </div>

            <div className='mb-8'>

                <label htmlFor={'name'} className='label'>Nivel</label>

                <Dropdown
                    filter
                    value={getSelectedOption(Usuario, 'id', formik?.values?.level_id)}
                    name='level_id'
                    onChange={(e) => formik.setFieldValue('level_id', e.target.value?.id)}
                    options={Usuario}
                    optionLabel="name"
                    emptyFilterMessage="No hay opciones disponibles"
                    emptyMessage="No hay opciones disponibles"
                    className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"
                    placeholder='Seleccionar Nivel'
                />

            </div>

            <OffeerInfo formik={formik} />

            <div className='mb-8'>

                <label htmlFor={'duration'} className='label'>Recurrencia</label>

                <Dropdown
                    filter
                    value={getSelectedOption(Recurren, 'id', formik?.values?.duration)}
                    name='duration'
                    onChange={(e) => formik.setFieldValue('duration', e.target.value?.id)}
                    options={Recurren}
                    optionLabel="name"
                    inputId='duration'
                    emptyFilterMessage="No hay opciones disponibles"
                    emptyMessage="No hay opciones disponibles"
                    className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"
                    placeholder='Seleccionar Recurrencia'
                />

            </div>

            <Date formik={formik} />

            <div className='mb-8'>

                <label htmlFor={'Fisico'} className='label'>Dónde canjearlo</label>

                <Dropdown
                    filter
                    value={getSelectedOption(formik?.values?.discount_type === "percentage" ? AppFisico : Fisico, 'id', formik?.values?.offer_place)}
                    name='offer_place'
                    onChange={(e) => formik.setFieldValue('offer_place', e.target.value?.id)}
                    options={formik?.values?.discount_type === "percentage" ? AppFisico : Fisico}
                    optionLabel="name"
                    emptyFilterMessage="No hay opciones disponibles"
                    emptyMessage="No hay opciones disponibles"
                    className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"
                    placeholder='Seleccionar dónde canjearlo'
                />

            </div>

            <label htmlFor={'Description'} className='label'>Descripción</label>

            <textarea
                rows={5}
                type='text'
                value={formik.values?.description}
                onChange={formik.handleChange}
                required
                name='description'
                id={'Description'}
                className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]'
                placeholder={'Ingresar Descripción'}
            />

            <button type='submit' className='min-btn block ml-auto mt-10'>Enviar</button>

        </form>
    )
}
