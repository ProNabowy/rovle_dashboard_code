import { Dropdown } from 'primereact/dropdown'
import { getSelectedOption } from '../../assets/js/utils';

export default function CitiesDropdown({ provinces, formik, province_Key, city_Key, classNames }) {

    return (

        <div className={`sm:w-[48%] ${classNames}`}>

            <label htmlFor={'cities'} className='text-[18px] text-[#252525] font-medium'>City</label>

            <Dropdown
                value={getSelectedOption(getSelectedOption(provinces, 'id', formik?.values[province_Key])?.cities, 'id', formik?.values[city_Key])}
                onChange={(e) => formik.setFieldValue(city_Key, e.target.value?.id)}
                options={getSelectedOption(provinces, 'id', formik?.values?.[province_Key])?.cities}
                optionLabel="name"
                inputId='cities'
                placeholder="Select City" className="w-full p-2 !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

        </div>

    )
}
