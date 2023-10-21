import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function Options({ id }) {

    const [options, setOptions] = useState([]);

    const onOptionChange = (e) => {
        let _ingredients = [...options];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setOptions(_ingredients);
    }

    return (
        <div className="card flex flex-wrap justify-content-center gap-10">

            <div className="flex items-center">
                <Checkbox inputId={id[0]} name={id[0]} value="See" onChange={onOptionChange} checked={options.includes('See')} />
                <label htmlFor={id[0]} className="ml-2">See</label>
            </div>
            <div className="flex items-center">
                <Checkbox inputId={id[1]} name={id[1]} value="Edit" onChange={onOptionChange} checked={options.includes('Edit')} />
                <label htmlFor={id[1]} className="ml-2">Edit</label>
            </div>
            <div className="flex items-center">
                <Checkbox inputId={id[2]} name={id[2]} value="Delete" onChange={onOptionChange} checked={options.includes('Delete')} />
                <label htmlFor={id[2]} className="ml-2">Delete</label>
            </div>

        </div>
    )
}
