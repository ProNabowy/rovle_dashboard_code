import { RadioButton } from 'primereact/radiobutton';

export default function RedioGroup({ formik }) {
    return (

        <div className="sm:w-[48%]">

            <label className='label block mb-4'>Control de inventario</label>

            <div className='flex items-center'>

                <div className="flex items-center cursor-pointer me-5">

                    <RadioButton
                        inputId="ingredient1" name="Yes" value="Yes"
                        onChange={_ => formik.setFieldValue('provider_manage_stock', 1)} checked={formik.values?.provider_manage_stock == 1} />


                    <label htmlFor="ingredient1" className={`ms-2 !mb-0 font-medium ${formik.values?.provider_manage_stock == 1 ? "text-[#28C76F]" : "text-[#2525256d]"}`}>Sí</label>

                </div>

                <div className="flex items-center cursor-pointer">

                    <RadioButton
                        inputId="ingredient2" name="No" value="No" onChange={_ => formik.setFieldValue('provider_manage_stock', 0)} checked={formik.values?.provider_manage_stock == 0} />


                    <label htmlFor="ingredient2" className={`ms-2 !mb-0 font-medium ${formik.values?.provider_manage_stock == 0 ? "text-[#28C76F]" : "text-[#2525256d]"}`}>No</label>

                </div>

            </div>

        </div>

    )
}
