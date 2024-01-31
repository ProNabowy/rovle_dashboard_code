import { Dropdown } from 'primereact/dropdown';
import { faArrowUpRightFromSquare, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSelectedOption } from '../../../../assets/js/utils';
import { Fisico, Recurren, Usuario, useDataGetter } from './data';
import { Date, OffeerInfo } from './components';


export default function OffeerForm({ formik, clickHandler }) {

    const { roasters } = useDataGetter(formik);

    return (
        <form onSubmit={e => e.preventDefault()} className='px-10 add-offer-form'>

            <div className='flex items-center justify-between mb-8'>

                <div className='sm:w-[48%]'>

                    <label htmlFor={'name'} className='text-[18px] text-[#252525] font-medium'>Nombre de la oferta</label>

                    <input type='text' id={'name'} name='name' value={formik.values?.name} onChange={formik.handleChange}
                        className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Ingresa el nombre de la oferta'} />

                </div>

                <div className='sm:w-[48%]'>

                    <div className='flex items-center justify-between'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>Tostadors</h2>

                        <div className='flex items-center cursor-pointer'>

                            <h2 className='font-medium underline text-[#45B8EA] me-3'>Agregar Tostador</h2>

                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#45B8EA]' />

                        </div>

                    </div>

                    <Dropdown value={getSelectedOption(roasters, 'id', formik?.values?.provider_id)} name='provider_id' onChange={(e) => formik.setFieldValue('provider_id', e.target.value?.id)} options={roasters} optionLabel="commercial_name"
                        className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Seleccionar Tostador' />


                </div>

            </div>

            <div className='mb-8'>

                <label htmlFor={'name'} className='text-[18px] text-[#252525] font-medium'>Usuario</label>

                <Dropdown value={getSelectedOption(Usuario, 'id', formik?.values?.level_id)} name='level_id' onChange={(e) => formik.setFieldValue('level_id', e.target.value?.id)} options={Usuario} optionLabel="name"
                    className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Seleccionar Nivel' />

            </div>

            <OffeerInfo formik={formik} />

            <div className='mb-8'>

                <label htmlFor={'duration'} className='text-[18px] text-[#252525] font-medium'>Recurren</label>

                <Dropdown value={getSelectedOption(Recurren, 'id', formik?.values?.duration)} name='duration' onChange={(e) => formik.setFieldValue('duration', e.target.value?.id)} options={Recurren} optionLabel="name"
                    inputId='duration' className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Seleccionar Recurren' />

            </div>

            <Date formik={formik} />

            <div className='mb-8'>

                <label htmlFor={'Fisico'} className='text-[18px] text-[#252525] font-medium'>Fisico</label>

                <Dropdown value={getSelectedOption(Fisico, 'id', formik?.values?.offer_place)} name='offer_place' onChange={(e) => formik.setFieldValue('offer_place', e.target.value?.id)} options={Fisico} optionLabel="name"
                    className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Seleccionar Fisico' />

            </div>

            <div>

                <label htmlFor={'Description'} className='text-[18px] text-[#252525] font-medium'>Descripción</label>

                <textarea rows={5} type='text' value={formik.values?.description} onChange={formik.handleChange} name='description' id={'Description'}
                    className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Ingresar Descripción'} />

            </div>

            <div className='flex items-center justify-end mt-10'>

                <button onClick={clickHandler} type='submit' className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Enviar</button>

            </div>

        </form>
    )
}
