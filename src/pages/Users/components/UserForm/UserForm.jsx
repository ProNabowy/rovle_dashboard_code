import { Dropdown } from 'primereact/dropdown';
import { Input } from '../../../../components';
import { getSelectedOption } from '../../../../assets/utils/utils';
import { useDataGetter } from './data';


export default function UserForm({ formik, asEdit }) {

    const { roles, user, shops } = useDataGetter();

    return (

        <form onSubmit={formik.handleSubmit} autoComplete='off' className='px-3 sm:px-10'>

            <div className='flex-container'>

                <div className='w-full sm:w-[48%]'>

                    <label htmlFor={'user_name'} className='label'>Nombre</label>

                    <Input
                        value={formik?.values?.user_name}
                        name={'user_name'}
                        type={'text'}
                        required={true}
                        onChange={formik.handleChange}
                        id={'user_name'}
                        placeholder={'Ingresar Nombre'}
                    />

                </div>

                <div className='w-full sm:w-[48%]'>

                    <label htmlFor={'user_email'} className='label'>Correo electrónico</label>

                    <Input
                        value={formik?.values?.user_email}
                        name={'user_email'}
                        type={'email'}
                        required={true}
                        onChange={formik.handleChange}
                        id={'user_email'}
                        placeholder={'Ingresar Correo electrónico'}
                    />

                </div>

            </div>

            {
                asEdit
                    ?
                    null
                    :
                    <div className='flex-container'>

                        <div className='w-full sm:w-[48%]'>

                            <label htmlFor={'user_password'} className='label'>Contraseña</label>

                            <Input
                                value={formik?.values?.user_password}
                                name={'user_password'}
                                type={'password'}
                                required={true}
                                onChange={formik.handleChange}
                                id={'user_password'}
                                placeholder={'Ingresar Contraseña'}
                            />

                        </div>

                        <div className='w-full sm:w-[48%]'>

                            <label htmlFor={'user_password_confirmation'} className='label'>Confirmación de contraseña</label>

                            <Input
                                value={formik?.values?.user_password_confirmation}
                                name={'user_password_confirmation'}
                                type={'password'}
                                required={true}
                                onChange={formik.handleChange}
                                id={'user_password_confirmation'}
                                placeholder={'Ingresar Confirmación de contraseña'}
                            />

                        </div>

                    </div>
            }

            <div className='flex items-center gap-3'>

                <div className='mb-8 flex-1'>

                    <h2 className='label'>Permisos</h2>

                    <Dropdown
                        value={getSelectedOption(roles, 'id', formik?.values?.role_id)}
                        onChange={(e) => {
                            formik.setFieldValue('role_id', e.target.value?.id)
                            formik.setFieldValue('coffee_shop_id', undefined)
                        }}
                        options={roles} optionLabel="name"
                        filter
                        emptyFilterMessage="No hay opciones disponibles"
                        emptyMessage="No hay opciones disponibles"
                        placeholder="Seleccionar Permiso" className="w-full p-2 !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

            </div>


            {
                user?.provider?.id
                    ?
                    <div className="mb-8">

                        <h2 className='label'>Cafeterías</h2>

                        <Dropdown
                            value={getSelectedOption(user?.provider?.coffee_shops, 'id', formik?.values?.coffee_shop_id)}
                            onChange={(e) => formik.setFieldValue('coffee_shop_id', e.target.value?.id)}
                            options={user?.provider?.coffee_shops}
                            optionLabel="name"
                            filter
                            emptyFilterMessage="No hay opciones disponibles"
                            emptyMessage="No hay opciones disponibles"
                            placeholder="Seleccionar Cafeterías" className="w-full p-2 !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>
                    :
                    null
            }

            <button type='submit' className='min-btn block !mt-10 ml-auto'>Enviar</button>

        </form>

    )
}
