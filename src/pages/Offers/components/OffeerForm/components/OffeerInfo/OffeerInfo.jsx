import { faKey, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Activa, Discount } from '../../data'
import { Dropdown } from 'primereact/dropdown';
import { getSelectedOption } from '../../../../../../assets/utils/utils';
import { Input } from '../../../../../../components';


export default function OffeerInfo({ formik }) {

  useEffect(() => {

    if (!['visit', 'points'].includes(formik?.values?.activation_method)) formik.setFieldValue('activation_amount', '');

    return () => { };

  }, [formik?.values?.activation_method]);

  useEffect(() => {

    if (formik?.values?.discount_type !== 'percentage') formik.setFieldValue('discount', '');

    return () => { };

  }, [formik?.values?.discount_type]);

  return (
    <div className='flex-container'>

      <div className='w-full sm:w-[48%] border border-[#28C76F] p-3 py-8 rounded-[10px]'>

        <div className='mb-8'>

          <h1 className='flex items-center mb-3'>
            Activo
            <FontAwesomeIcon icon={faKey} className='ms-3 text-[#252525]' />
          </h1>

          <Dropdown filter value={getSelectedOption(Activa, 'id', formik?.values?.activation_method)} name='activation_method' onChange={(e) => formik.setFieldValue('activation_method', e.target.value?.id)} options={Activa} optionLabel="name"
            className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Elige el método de activación' />

        </div>

        {
          ['visit', 'points'].includes(formik?.values?.activation_method)
            ?
            <div>

              <label htmlFor='Can.ACT' className='flex items-center mb-3'>Can. ACT</label>

              <Input
                type='text'
                id={'Can.ACT'}
                value={formik.values.activation_amount}
                name='activation_amount'
                onChange={formik.handleChange}
                placeholder={'Ingresar Can.ACT'}
              />

            </div>
            :
            null
        }

      </div>

      <div className='w-full sm:w-[48%] border border-[#28C76F] p-3 py-8 rounded-[10px]'>

        <div className='mb-8'>

          <h1 className='flex items-center mb-3'>
            T.Promo
            <FontAwesomeIcon icon={faTag} className='ms-3 text-[#252525]' />
          </h1>

          <Dropdown filter value={getSelectedOption(Discount, 'id', formik?.values?.discount_type)} name='discount_type' onChange={(e) => formik.setFieldValue('discount_type', e.target.value?.id)} options={Discount} optionLabel="name"
            className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Seleccionar Discount' />

        </div>

        {
          formik?.values?.discount_type === 'percentage'
            ?
            <div>

              <label htmlFor='C.Oferta' className='flex items-center mb-3'>C. Oferta</label>

              <Input
                type='number'
                id={'C.Oferta'}
                required={true}
                value={parseInt(formik.values.discount)}
                name='discount'
                onChange={formik.handleChange}
                placeholder={'Ingresar C. OFERTA'}
              />

            </div>
            :
            null
        }

      </div>


    </div>
  )

}
