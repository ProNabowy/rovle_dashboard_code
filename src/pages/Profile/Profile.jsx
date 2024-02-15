import { CitiesDropdown, Input, PageContent, ProvincesDropDown } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { useDataGetter } from './data'
import { Dropdown } from 'primereact/dropdown'
import { getSelectedOption } from '../../assets/utils/utils'
import default_user from '../../assets/images/default_user.png';


export default function Profile() {

    const {
        formik,
        clickHandler,
        data,
        counteris,
    } = useDataGetter();

    return (

        <PageContent title={'Mi perfil'} showActions={false}>

            <form onSubmit={e => e.preventDefault()} className='px-10'>

                <div className='w-[250px] h-[250px] shadow-lg mb-20 m-auto rounded-full flex items-center justify-center relative profile-image overflow-hidden'>

                    <img
                        src={
                            typeof
                                formik.values.image === "object"
                                ?
                                URL.createObjectURL(formik.values?.image)
                                :
                                `${data?.image}`
                        }
                        alt=''
                        onError={e => {

                            e.target.src = default_user;
                            e.target.classList.add('!w-[150px]');
                            e.target.classList.add('!object-contain');

                        }}

                        className='w-full h-full object-cover rounded-full'
                    />

                    <div className='w-[250px] h-[250px] flex items-start justify-center rounded-full bg-[#45b9eae1] absolute left-0 z-20 transition bottom-[-250px] uploade-image'>

                        <Input
                            type='file'
                            accept="image/png, image/gif, image/jpeg"
                            onChange={e => formik.setFieldValue('image', e.target.files[0])}
                            id='uploade-img'
                            classNames='!w-0 !h-0 appearance-none !opacity-0 !scale-0' />

                        <label htmlFor='uploade-img'>

                            <FontAwesomeIcon icon={faImage} className='text-[40px] mt-8 cursor-pointer text-white' />

                        </label>

                    </div>

                </div>

                <div className='flex-container'>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'name'} className='label'>Nombre</label>

                        <Input
                            value={formik?.values?.name}
                            name={'name'}
                            type={'text'}
                            required={true}
                            onChange={formik.handleChange}
                            id={'name'}
                            placeholder={'Ingresar Nombre'}
                        />

                    </div>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'email'} className='label'>Correo electrónico</label>

                        <Input
                            value={formik?.values?.email}
                            name={'email'}
                            type={'email'}
                            disabled
                            required={true}
                            onChange={formik.handleChange}
                            id={'email'}
                            placeholder={'example@gmail.com'}
                        />

                    </div>

                </div>

                <div className='flex-container'>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'address'} className='label'>Dirección</label>

                        <Input
                            value={formik?.values?.address}
                            name={'address'}
                            type={'text'}
                            required={true}
                            onChange={formik.handleChange}
                            id={'address'}
                            placeholder={'Ingresar Dirección'}
                        />

                    </div>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'phone'} className='label'>Teléfono</label>

                        <Input
                            value={formik?.values?.phone}
                            name={'phone'}
                            type={'text'}
                            disabled
                            required={true}
                            onChange={formik.handleChange}
                            id={'phone'}
                            placeholder={'Ingresar Teléfono'}
                        />

                    </div>

                </div>

                <div className='flex-container'>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'zip'} className='label'>Código postal</label>

                        <Input
                            value={formik?.values?.zip}
                            name={'zip'}
                            type={'number'}
                            required={true}
                            onChange={formik.handleChange}
                            id={'zip'}
                            placeholder={'Ingresar Código postal'}
                        />

                    </div>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'card_id'} className='label'>Identificación de tarjeta</label>

                        <Input
                            value={formik?.values?.card_id}
                            name={'card_id'}
                            type={'text'}
                            disabled
                            required={true}
                            onChange={formik.handleChange}
                            id={'card_id'}
                            placeholder={'Ingresar Identificación de tarjeta'}
                        />

                    </div>

                </div>

                <div className='flex-container'>

                    <div className='w-[48%]'>

                        <label className='label block'>País</label>

                        <Dropdown
                            value={getSelectedOption(counteris, 'id', formik?.values?.country_id)}
                            onChange={(e) => formik.setFieldValue('country_id', e.target.value?.id)}
                            options={counteris} optionLabel="name"
                            filter
                            placeholder="Seleccionar nombre de país" className="p-2 w-full !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />


                    </div>

                    <ProvincesDropDown
                        formik={formik}
                        countries={counteris}
                        country_Key={'country_id'}
                        province_Key={'province_id'}
                    />

                </div>

                <div className='flex-container'>

                    <CitiesDropdown
                        formik={formik}
                        provinces={getSelectedOption(counteris, 'id', formik?.values?.country_id)?.provinces}
                        province_Key={'province_id'}
                        city_Key={'city_id'}
                    />

                    <div className='w-[48%]'>

                        <label htmlFor='Permissions' className='label block'>Permisos</label>

                        <Input
                            disabled={true}
                            value={formik.values.roles && formik.values.roles[0]?.name}
                            type='text' id={'Permissions'}
                        />

                    </div>

                </div>

                <button onClick={clickHandler} className='min-btn block mt-10 ml-auto'>Guardar cambios</button>

            </form>

        </PageContent>
    )
}
