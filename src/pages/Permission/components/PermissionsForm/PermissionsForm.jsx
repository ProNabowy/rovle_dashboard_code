import { Accordion, AccordionTab } from 'primereact/accordion'
import PermissionsList from '../PermissionsList'
import { useDataGetter } from './data'
import { Input } from '../../../../components';

export default function PermissionsForm({ asEdit }) {

    const {
        permissionsKeys,
        permissions,
        formik,
        onOptionChange,
        isDisabled
    } = useDataGetter(asEdit);

    return (

        <form onSubmit={formik.handleSubmit} autoComplete='off' className='permission-form'>

            <div className='p-3 sm:p-10 pb-2'>

                <label
                    htmlFor='name-input'
                    className='mb-3 block text-[20px] text-[#234486]' >
                    Nombre del Rol
                </label>

                <Input
                    type='text'
                    required
                    name='name'
                    value={formik?.values?.name}
                    onChange={formik.handleChange}
                    placeholder='Ingresar Nombre del Rol'
                />

            </div>


            <label className='block text-[24px] text-[#252525] opacity-70 p-3 sm:p-10 pb-2'>Páginas</label>

            <Accordion multiple className='p-3 sm:p-10' activeIndex={0}>

                {
                    permissionsKeys.map((item, index) => {

                        return (
                            <AccordionTab key={index} header={item}>

                                <PermissionsList
                                    options={formik.values?.permissions}
                                    onOptionChange={onOptionChange}
                                    optionKey={item}
                                    formik={formik}
                                    permissions={permissions}
                                    isDisabled={isDisabled}
                                />

                            </AccordionTab>
                        )

                    })

                }

            </Accordion>

            {
                isDisabled
                    ?
                    null
                    :
                    <div className='flex-end'>

                        <button type='submit' className='min-btn'>Actualizar</button>

                    </div>
            }

        </form>

    )
}
