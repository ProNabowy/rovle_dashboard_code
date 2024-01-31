import React from 'react'

export default function CountryForm({ formik, clickHandler }) {

    return (
        <form onSubmit={e => e.preventDefault()}>

            <div className='p-10'>

                <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Nombre</label>

                <input type='text' className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full'
                    name='name' value={formik.values?.name} onChange={formik.handleChange} placeholder='Ingrese el nombre del país' />

            </div>

            <div className='flex items-center justify-end p-10 pb-5'>

                <button onClick={clickHandler} type='submit' className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>   Enviar   </button>

            </div>

        </form>

    )
}
