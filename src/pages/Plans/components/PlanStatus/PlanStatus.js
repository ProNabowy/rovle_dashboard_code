import { RadioButton } from 'primereact/radiobutton'

export default function PlanStatus({ formik }) {

    return (
        <div className="w-[48%]">

            <label className='text-[18px] text-[#252525] font-medium block mb-4'>Estado</label>

            <div className='flex items-center'>

                <div className="flex items-center cursor-pointer me-5">

                    <RadioButton inputId="ingredient1" name="active" value="active" onChange={(e) => formik.setFieldValue('status', e.value)} checked={formik.values?.status === 'active'} />

                    <label htmlFor="ingredient1" className={`ms-2 font-medium ${formik.values?.status === "active" ? "text-[#28C76F]" : "text-[#2525256d]"}`}>Activo</label>

                </div>

                <div className="flex items-center cursor-pointer">

                    <RadioButton inputId="inactive" name="inactive" value="inactive" onChange={(e) => formik.setFieldValue('status', e.value)} checked={formik.values?.status === 'inactive'} />

                    <label htmlFor="inactive" className={`ms-2 font-medium ${formik.values?.status === "inactive" ? "text-[#28C76F]" : "text-[#2525256d]"}`}>Inactivo</label>

                </div>

            </div>

        </div>
    )
}
