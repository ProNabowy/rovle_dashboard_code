import React, { Fragment } from 'react'
import { CitiesDropdown, Input, ProvincesDropDown } from '../../../../components'
import { Dropdown } from 'primereact/dropdown'
import { getSelectedOption } from '../../../../assets/utils/utils'

export default function ProviderForm({ formik, counteris, handleBlur }) {
  return (
    <Fragment>

      <div className='flex-container'>

        <div className='w-full sm:w-[48%]'>

          <label htmlFor={'password'} className='label'>Contraseña</label>

          <Input
            value={formik?.values?.password}
            name={'password'}
            type={'password'}
            required={true}
            onChange={formik.handleChange}
            id={'password'}
            defaultValue="**********"
            placeholder={'Ingresar Contraseña'}
          />

        </div>

        <div className='w-full sm:w-[48%]'>

          <label htmlFor={'password_confirmation'} className='label'>Confirmación de contraseña</label>

          <Input
            value={formik?.values?.password_confirmation}
            name={'password_confirmation'}
            type={'password'}
            required={true}
            onChange={formik.handleChange}
            id={'password_confirmation'}
            defaultValue="**********"
            placeholder={'Ingresar Confirmación de contraseña'}
          />

        </div>

      </div>

      <div className='flex-container'>

        <div className='sm:w-[48%]'>

          <label htmlFor={'provider_nif'} className='label'>NIF</label>

          <Input
            value={formik?.values?.provider_nif}
            name={'provider_nif'}
            type={'text'}
            required={true}
            onChange={formik.handleChange}
            id={'provider_nif'}
            placeholder={'Ingresar NIF'}
          />

        </div>

        <div className='sm:w-[48%]'>

          <label htmlFor={'provider_commercial_name'} className='label'>Nombre comercial</label>

          <Input
            value={formik?.values?.provider_commercial_name}
            name={'provider_commercial_name'}
            type={'text'}
            required={true}
            onChange={formik.handleChange}
            id={'provider_commercial_name'}
            placeholder={'Ingresar nombre comercial'}
          />

        </div>

      </div>

      <div className='flex-container'>

        <div className='sm:w-[48%]'>

          <label htmlFor={'provider_official_name'} className='label'>Nombre oficial</label>

          <Input
            value={formik?.values?.provider_official_name}
            name={'provider_official_name'}
            type={'text'}
            required={true}
            onChange={formik.handleChange}
            id={'provider_official_name'}
            placeholder={'Ingresar nombre oficial'}
          />

        </div>

        <div className='sm:w-[48%]'>

          <label htmlFor={'address'} className='label'>Dirección</label>

          <Input
            value={formik?.values?.address}
            name={'address'}
            type={'text'}
            required={true}
            onChange={formik.handleChange}
            id={'address'}
            placeholder={'Ingresar dirección'}
          />

        </div>

      </div>

      <div className='flex-container'>

        <div className='sm:w-[48%]'>

          <label htmlFor={'zip'} className='label'>Código postal</label>

          <Input
            value={formik?.values?.zip}
            name={'zip'}
            onBlur={handleBlur}
            type={'text'}
            required={true}
            min={5}
            max={5}
            maxLength={5}
            minLength={5}
            onChange={formik.handleChange}
            id={'zip'}
            placeholder={'Ingresar código postal'}
          />

        </div>

        <div className='sm:w-[48%]'>

          <label htmlFor={'phone'} className='label'>Teléfono</label>

          <Input
            value={formik?.values?.phone}
            name={'phone'}
            type={'text'}
            required={true}
            onChange={formik.handleChange}
            id={'phone'}
            placeholder={'Ingresar teléfono'}
          />

        </div>

      </div>

      <div className='sm:w-[48%] mb-6'>

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

          <label htmlFor='Permissions' className='label block'>Permisos</label>

          <Input
            disabled={true}
            value={formik.values.roles && formik.values.roles[0]?.name}
            type='text' id={'Permissions'}
          />

        </div>

      </div>

    </Fragment>
  )
}
