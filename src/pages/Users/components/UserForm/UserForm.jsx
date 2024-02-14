import { Dropdown } from 'primereact/dropdown';
import { InputsGroup } from '../../../../components';
import { getSelectedOption } from '../../../../assets/utils/utils';
import { useDataGetter } from './data';


export default function UserForm({ formik, clickHandler, asEdit }) {

    const { roles } = useDataGetter();

    return (

        <form onSubmit={formik.handleSubmit} className='px-10'>

            <InputsGroup data={
                {
                    names: ['Nombre', 'Correo electrónico'],
                    placeholders: ['Ingresar Nombre', 'Ingresar Correo electrónico'],
                    values: [formik.values?.user_name, formik.values?.user_email],
                    onChange: formik.handleChange,
                    required: [true, true],
                    nameAttr: ['user_name', 'user_email'],
                }
            } />

            {
                asEdit
                    ?
                    null
                    :
                    <InputsGroup data={
                        {
                            names: ['Contraseña', 'Confirmación de contraseña'],
                            placeholders: ['Ingresar Password', 'Ingresar Confirmación de contraseña'],
                            onChange: formik.handleChange,
                            required: [true, true],
                            nameAttr: ['user_password', 'user_password_confirmation'],
                            types: ["password", 'password']
                        }
                    } />
            }


            <div className='mb-8'>

                <h2 className='text-[18px] text-[#252525] font-medium'>Permisos</h2>

                <Dropdown
                    value={getSelectedOption(roles, 'id', formik?.values?.role_id)}
                    onChange={(e) => formik.setFieldValue('role_id', e.target.value?.id)}
                    options={roles} optionLabel="name"
                    filter
                    placeholder="Seleccionar Permiso" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

            </div>


            <div className='flex items-center justify-end mt-10'>

                <button type='submit' className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Enviar</button>

            </div>

        </form>

    )
}
