import { Dropdown } from 'primereact/dropdown'
import { getSelectedOption } from '../../assets/utils/utils';

export default function ProvincesDropDown({ formik, countries, country_Key, province_Key }) {

    return (
        <div className='sm:w-[48%]'>

            <label htmlFor='provinces' className='label'>Provincia</label>

            <Dropdown
                value={getSelectedOption(getSelectedOption(countries, 'id', formik?.values[country_Key])?.provinces, 'id', formik?.values[province_Key])}
                onChange={(e) => formik.setFieldValue(province_Key, e.target.value?.id)}
                options={getSelectedOption(countries, 'id', formik?.values?.[country_Key])?.provinces}
                optionLabel="name"
                filter
                inputId='provinces'
                placeholder="Seleccionar Provincia" className="w-full p-2 !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

        </div>
    )
}
