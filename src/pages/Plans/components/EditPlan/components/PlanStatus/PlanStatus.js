import { RadioButton } from 'primereact/radiobutton'
import React, { useEffect, useState } from 'react'

export default function PlanStatus({ formik }) {

    const [ingredient, setIngredient] = useState('');


    useEffect(() => {

        formik.setFieldValue('status', ingredient)

    }, [ingredient]);

    return (
        <div className="w-[48%]">

            <label className='text-[18px] text-[#252525] font-medium block mb-4'>Status</label>

            <div className='flex items-center'>

                <div className="flex items-center cursor-pointer me-5">

                    <RadioButton inputId="ingredient1" name="active" value="active" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'active'} />

                    <label htmlFor="ingredient1" className={`ms-2 font-medium ${ingredient === "active" ? "text-[#28C76F]" : "text-[#2525256d]"}`}>Active</label>

                </div>

                <div className="flex items-center cursor-pointer">

                    <RadioButton inputId="inactive" name="inactive" value="inactive" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'inactive'} />

                    <label htmlFor="inactive" className={`ms-2 font-medium ${ingredient === "inactive" ? "text-[#28C76F]" : "text-[#2525256d]"}`}>In Active</label>

                </div>

            </div>

        </div>
    )
}
