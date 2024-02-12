import { CitiesDropdown, InputsGroup, PageContent, ProvincesDropDown } from '../../components'
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

                        <input type='file' accept="image/png, image/gif, image/jpeg" onChange={e => formik.setFieldValue('image', e.target.files[0])} id='uploade-img' className='w-0 h-0 appearance-none opacity-0 scale-0' />

                        <label htmlFor='uploade-img'>

                            <FontAwesomeIcon icon={faImage} className='text-[40px] mt-8 cursor-pointer text-white' />

                        </label>

                    </div>

                </div>

                <InputsGroup data={
                    {
                        names: ['Nombre', 'Correo electrónico'],
                        placeholders: ['Ingresar Nombre', 'example@gmail.com'],
                        values: [formik.values?.name, formik.values?.email],
                        onChange: formik.handleChange,
                        nameAttr: ['name', 'emil'],
                        disabledSecondInput: true

                    }
                } />

                <InputsGroup data={
                    {
                        names: ['Dirección', 'Teléfono'],
                        placeholders: ['Ingresar Dirección', 'Ingresar Teléfono'],
                        values: [formik.values?.address, formik.values?.phone],
                        onChange: formik.handleChange,
                        nameAttr: ['address', 'phone'],
                    }
                } />
                <InputsGroup data={
                    {
                        names: ['Código postal', 'Identificación de tarjeta'],
                        placeholders: ['Ingresar Código postal', 'Ingresar Identificación de tarjeta'],
                        values: [formik.values?.zip, formik.values?.card_id],
                        onChange: formik.handleChange,
                        nameAttr: ['zip', 'card_id'],
                    }
                } />

                <div className='flex items-center justify-between mb-8'>

                    <div className='w-[48%]'>

                        <label className='text-[18px] text-[#252525] font-medium block'>País</label>

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

                <div className='flex items-center justify-between mb-8'>

                    <CitiesDropdown
                        formik={formik}
                        provinces={getSelectedOption(counteris, 'id', formik?.values?.country_id)?.provinces}
                        province_Key={'province_id'}
                        city_Key={'city_id'}
                    />

                    <div className='w-[48%]'>

                        <label htmlFor='Permissions' className='text-[18px] text-[#252525] font-medium block'>Permisos</label>

                        <input disabled={true} value={formik.values.roles && formik.values.roles[0]?.name} type='text' id={'Permissions'}
                            className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' />

                    </div>

                </div>

                <div className='flex items-center justify-end mt-10'>

                    <button onClick={clickHandler} className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Guardar cambios</button>

                </div>

            </form>

        </PageContent>
    )
}
