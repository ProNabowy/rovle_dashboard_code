import { Dropdown } from 'primereact/dropdown'
import React from 'react'
import { useSelector } from 'react-redux'
import { getSelectedOption } from '../../assets/js/utils';

export default function ProvincesDropDown({ formik, country_Key, province_Key }) {

    const countries = useSelector(store => store?.countries);

    return (
        <div className='sm:w-[48%]'>

            <label htmlFor='provinces' className='text-[18px] text-[#252525] font-medium'>Province</label>

            <Dropdown
                value={getSelectedOption(getSelectedOption(countries, 'id', formik?.values[country_Key])?.provinces, 'id', formik?.values[province_Key])}
                onChange={(e) => formik.setFieldValue(province_Key, e.target.value?.id)}
                options={getSelectedOption(countries, 'id', formik?.values?.[country_Key])?.provinces}
                optionLabel="name"
                inputId='provinces'
                placeholder="Select Province" className="w-full p-2 !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

        </div>
    )
}
