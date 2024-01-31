import { faKey, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { getSelectedOption } from '../../../../../../assets/js/utils'
import { Activa, Discount } from '../../data'
import { Dropdown } from 'primereact/dropdown';


export default function OffeerInfo({ formik }) {


  useEffect(() => {

    formik.setFieldValue('activation_amount', '');

    return () => { };

  }, [formik?.values?.activation_method]);

  useEffect(() => {

    formik.setFieldValue('discount', '');

    return () => { };

  }, [formik?.values?.discount_type]);

  return (
    <div className='flex items-center justify-between mb-8'>

      <div className='sm:w-[48%] border border-[#28C76F] p-3 py-8 rounded-[10px]'>

        <div className='mb-8'>

          <h1 className='flex items-center mb-3'>
            Activo
            <FontAwesomeIcon icon={faKey} className='ms-3 text-[#252525]' />
          </h1>

          <Dropdown value={getSelectedOption(Activa, 'id', formik?.values?.activation_method)} name='activation_method' onChange={(e) => formik.setFieldValue('activation_method', e.target.value?.id)} options={Activa} optionLabel="name"
            className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Elige el método de activación' />

        </div>

        {
          ['visit', 'points'].includes(formik?.values?.activation_method)
            ?
            <div>

              <label htmlFor='Can.ACT' className='flex items-center mb-3'>Can. ACT</label>

              <input type='text' id={'Can.ACT'} value={formik.values.activation_amount} name='activation_amount' onChange={formik.handleChange}
                className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Ingresar Can.ACT'} />

            </div>
            :
            null
        }

      </div>

      <div className='sm:w-[48%] border border-[#28C76F] p-3 py-8 rounded-[10px]'>

        <div className='mb-8'>

          <h1 className='flex items-center mb-3'>
            T.Promo
            <FontAwesomeIcon icon={faTag} className='ms-3 text-[#252525]' />
          </h1>

          <Dropdown value={getSelectedOption(Discount, 'id', formik?.values?.discount_type)} name='discount_type' onChange={(e) => formik.setFieldValue('discount_type', e.target.value?.id)} options={Discount} optionLabel="name"
            className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" placeholder='Seleccionar Discount' />

        </div>

        {
          formik?.values?.discount_type === 'percentage'
            ?
            <div>

              <label htmlFor='C.Oferta' className='flex items-center mb-3'>C. Oferta</label>

              <input type='number' id={'C.Oferta'} value={formik.values.discount} name='discount' onChange={formik.handleChange}
               className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Ingresar C. OFERTA'} />

            </div>
            :
            null
        }

      </div>


    </div>
  )

}
