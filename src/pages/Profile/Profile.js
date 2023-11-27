import { InputsGroup, PageContent } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { useDataGetter } from './data'
import { useSelector } from 'react-redux'
import { getSelectedOption } from '../../assets/js/utils'
import { Dropdown } from 'primereact/dropdown'

export default function Profile() {

    const { formik, clickHandler, data } = useDataGetter();
    const store = useSelector(store => store);

    return (

        <PageContent title={'My Profile'} showActions={false}>

            <form onSubmit={e => e.preventDefault()} className='px-10'>

                <div className='w-[250px] h-[250px] shadow-lg mb-20 m-auto rounded-full flex items-center justify-center relative profile-image overflow-hidden'>

                    <img src={typeof formik.values.image === "object" ? URL.createObjectURL(formik.values?.image) : `https://rovle.eslamghazy.net/public/${data?.image}`} alt='' className='w-full h-full object-cover rounded-full' />

                    <div className='w-[250px] h-[250px] flex items-start justify-center rounded-full bg-[#45b9eae1] absolute left-0 z-20 transition bottom-[-250px] uploade-image'>

                        <input type='file' accept="image/png, image/gif, image/jpeg" onChange={e => formik.setFieldValue('image', e.target.files[0])} id='uploade-img' className='w-0 h-0 appearance-none opacity-0 scale-0' />

                        <label htmlFor='uploade-img'>

                            <FontAwesomeIcon icon={faImage} className='text-[40px] mt-8 cursor-pointer text-white' />

                        </label>

                    </div>

                </div>

                <InputsGroup data={
                    {
                        names: ['Name', 'Email'],
                        placeholders: ['Enter Your Name', 'example@gmail.com'],
                        values: [formik.values?.name, formik.values?.email],
                        onChange: formik.handleChange,
                        nameAttr: ['name', 'emil'],
                        disabledSecondInput: true

                    }
                } />

                <InputsGroup data={
                    {
                        names: ['Address', 'Phone'],
                        placeholders: ['Enter Your Address', 'Enter Your Phone'],
                        values: [formik.values?.address, formik.values?.phone],
                        onChange: formik.handleChange,
                        nameAttr: ['address', 'phone'],
                    }
                } />
                <InputsGroup data={
                    {
                        names: ['zip', 'card_id'],
                        placeholders: ['Enter Your Zip Code', 'Enter Your Card ID'],
                        values: [formik.values?.zip, formik.values?.card_id],
                        onChange: formik.handleChange,
                        nameAttr: ['zip', 'card_id'],
                    }
                } />

                <div className='flex items-center justify-between mb-6'>

                    <div className='w-[48%]'>

                        <label className='text-[18px] text-[#252525] font-medium block'>Country</label>

                        <Dropdown
                            value={getSelectedOption(store.countries, 'id', formik?.values?.country_id)}
                            onChange={(e) => formik.setFieldValue('country_id', e.target.value?.id)}
                            options={store.countries} optionLabel="name"
                            placeholder="Select Country Name" className="p-2 w-full !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />


                    </div>

                    <div className='w-[48%]'>

                        <label className='text-[18px] text-[#252525] font-medium block'>Province</label>

                        <Dropdown
                            value={getSelectedOption(store.province, 'id', formik?.values?.province_id)}
                            onChange={(e) => formik.setFieldValue('province_id', e.target.value?.id)}
                            options={store.province} optionLabel="name"
                            placeholder="Select Province Name" className="p-2 w-full !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                </div>

                <div className='flex items-center justify-between mb-6'>

                    <div className='w-[48%]'>

                        <label className='text-[18px] text-[#252525] font-medium block'>City</label>

                        <Dropdown
                            value={getSelectedOption(store.cities, 'id', formik?.values?.city_id)}
                            onChange={(e) => formik.setFieldValue('city_id', e.target.value?.id)}
                            options={store.cities} optionLabel="name"
                            placeholder="Select City Name" className="w-full p-2 !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                    <div className='w-[48%]'>

                        <label htmlFor='Permissions' className='text-[18px] text-[#252525] font-medium block'>Permissions</label>

                        <input disabled={true} value={formik.values.roles && formik.values.roles[0]?.name} type='text' id={'Permissions'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' />

                    </div>

                </div>

                <div className='flex items-center justify-end mt-10'>

                    <button onClick={clickHandler} className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Save Changes</button>

                </div>

            </form>

        </PageContent>
    )
}
