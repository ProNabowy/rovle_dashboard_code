import React, { Fragment } from 'react'
import { Input } from '../../../../components'

export default function UserForm({ formik }) {
    return (
        <Fragment>

            <div className='flex-container'>

                <div className='sm:w-[48%]'>

                    <label htmlFor={'name'} className='label'>Nombre</label>

                    <Input
                        value={formik?.values?.name}
                        name={'name'}
                        type={'text'}
                        required={true}
                        onChange={formik.handleChange}
                        id={'name'}
                        placeholder={'Ingresar Nombre'}
                    />

                </div>

                <div className='sm:w-[48%]'>

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

            </div>

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

            <div className='w-[48%]'>

                <label htmlFor='Permissions' className='label block'>Permisos</label>

                <Input
                    disabled={true}
                    value={formik.values.roles && formik.values.roles[0]?.name}
                    type='text' id={'Permissions'}
                />

            </div>

        </Fragment>
    )
}
