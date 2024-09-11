import { Checkbox } from "primereact/checkbox";
import { useEffect } from "react";

export default function Options({ items, options, formik, onOptionChange, isDisabled }) {

    useEffect(() => {

        if (options?.includes(466) && !options.includes(517)) formik.setFieldValue('permissions', [...options, 517]);
        if (options?.includes(467) && !options.includes(518)) formik.setFieldValue('permissions', [...options, 518]);
        if (options?.includes(469) && !options.includes(520)) formik.setFieldValue('permissions', [...options, 520]);

        if (!options?.includes(466) && options.includes(517)) formik.setFieldValue('permissions', options?.filter(item => item != 517));
        if (!options?.includes(467) && options.includes(518)) formik.setFieldValue('permissions', options?.filter(item => item != 518));
        if (!options?.includes(469) && options.includes(520)) formik.setFieldValue('permissions', options?.filter(item => item != 520));

        return () => { };
    }, [options]);

    return (
        <div className="card flex flex-wrap justify-content-center gap-3 sm:gap-10">

            {
                items?.map((item, index) => {

                    return (

                        <div key={index} className="flex items-center">

                            <Checkbox disabled={item?.id === 517 || item?.id === 518 || item?.id === 520 || isDisabled} inputId={item?.id} name={item?.id} value={item?.title} onChange={e => onOptionChange(e, item)} checked={options?.includes(item?.id)} />

                            <label htmlFor={item?.id} className={`ms-2 !mb-0 select-none ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}>{item?.title}</label>

                        </div>

                    )

                })
            }

        </div>
    )
}
