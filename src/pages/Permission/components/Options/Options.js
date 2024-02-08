import { Checkbox } from "primereact/checkbox";

export default function Options({ items, options, onOptionChange }) {

    return (
        <div className="card flex flex-wrap justify-content-center gap-10">

            {
                items?.map((item, index) => {

                    return (

                        <div key={index} className="flex items-center">

                            <Checkbox inputId={item?.id} name={item?.id} value={item?.title} onChange={e => onOptionChange(e, item)} checked={options.includes(item?.id)} />

                            <label htmlFor={item?.id} className="ms-2 !mb-0 cursor-pointer select-none">{item?.title}</label>

                        </div>

                    )

                })
            }

        </div>
    )
}
