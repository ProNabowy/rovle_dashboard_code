import { Calendar } from 'primereact/calendar'
import { Checkbox } from 'primereact/checkbox'
import React from 'react'
import { useDataGetter } from '../../data';

export default function Date({ formik }) {

    const {
        handleStartDate,
        autoSelectStartData,
        autoSelectEndData,
        handleEndDate,
    } = useDataGetter(formik);

    return (
        <div className='flex-container'>

            <div className='w-full sm:w-[48%]'>

                <label htmlFor={'checkbox-1'} className='label flex items-center justify-between'>

                    <h3>Fecha INI</h3>

                    <div className='flex items-center'>

                        <label className='me-4' htmlFor='checkbox-1' >Auto</label>

                        <Checkbox inputId='checkbox-1' onChange={handleStartDate} checked={autoSelectStartData}></Checkbox>

                    </div>

                </label>

                <Calendar value={formik.values.start_date} disabled={autoSelectStartData} onChange={formik.handleChange} name='start_date' placeholder={formik.values.start_date || 'Ingresar Fecha INI'} className='w-full my-2' showIcon />

            </div>

            <div className='w-full sm:w-[48%]'>

                <label htmlFor={'checkbox-2'} className='label flex items-center justify-between'>

                    <h3>Fecha FIN</h3>

                    <div className='flex items-center'>

                        <label className='me-4' htmlFor='checkbox-2' >Auto</label>

                        <Checkbox inputId='checkbox-2' onChange={handleEndDate} checked={autoSelectEndData}></Checkbox>

                    </div>

                </label>

                <Calendar value={formik.values.end_date} disabled={autoSelectEndData} onChange={formik.handleChange} name='end_date' placeholder={formik.values.end_date || 'Ingresar Fecha FIN'} className='w-full my-2' showIcon />

            </div>

        </div>
    )
}
