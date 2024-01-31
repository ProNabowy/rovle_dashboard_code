import { Accordion, AccordionTab } from 'primereact/accordion'
import PermissionsList from '../PermissionsList'
import { useDataGetter } from './data'

export default function PermissionsForm({ asEdit }) {

    const {
        permissionsKeys,
        permissions,
        formik,
        onOptionChange,
        clickHandler
    } = useDataGetter(asEdit);

    return (

        <form onSubmit={e => e.preventDefault()} className='permission-form'>

            <div className='p-10 pb-2'>

                <label htmlFor='name-input' className='mb-3 block text-[20px] text-[#234486]'>Nombre del Rol</label>

                <input type='text' name='name' value={formik?.values?.name} onChange={formik.handleChange}
                    className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' placeholder='Ingresar Nombre del Rol' />

            </div>


            <label className='block text-[24px] text-[#252525] opacity-70 p-10 pb-2'>Páginas</label>

            <Accordion multiple className='p-10' activeIndex={0}>

                {
                    permissionsKeys.map((item, index) => {

                        return (
                            <AccordionTab key={index} header={item}>

                                <PermissionsList
                                    options={formik.values?.permissions}
                                    onOptionChange={onOptionChange}
                                    optionKey={item}
                                    permissions={permissions}
                                />

                            </AccordionTab>
                        )

                    })

                }

            </Accordion>

            <div className='flex items-center justify-end p-10 pb-5'>

                <button onClick={clickHandler} type='submit' className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>Actualizar</button>

            </div>

        </form>

    )
}
