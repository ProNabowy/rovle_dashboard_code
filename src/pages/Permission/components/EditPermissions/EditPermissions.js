
import { Accordion, AccordionTab } from 'primereact/accordion';
import { PageContent } from '../../../../components';
import { useDataGetter } from './data';
import PermissionsList from '../PermissionsList';


export default function AddPermissions() {

    const {
        permissionsKeys,
        onOptionChange,
        permissions,
        formik
    } = useDataGetter();

    return (
        <PageContent title={'Permission Form'} showActions={false}>

            <form onSubmit={formik.handleSubmit} className='permission-form'>

                <div className='p-10 pb-2'>

                    <label htmlFor='name-input' className='mb-3 block text-[20px] text-[#234486]'>Role Name</label>

                    <input type='text' name='name' value={formik?.values?.name} onChange={formik.handleChange} className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' placeholder='Enter Country Name' />

                </div>


                <label className='block text-[24px] text-[#252525] opacity-70 p-10 pb-2'>Pages</label>

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

                    <button type='submit' className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>Update</button>

                </div>

            </form>


        </PageContent>
    )
}
