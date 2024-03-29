import { useEffect, useRef, useState } from "react";

const useDataGetter = (setUpdatePasswordData) => {
    const first_inputRef = useRef();
    const second_inputRef = useRef();
    const thired_inputRef = useRef();
    const fourth_inputRef = useRef();
    const fifth_inputRef = useRef();
    const sixth_inputRef = useRef();
    const [value, setValue] = useState({
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
    });

    const handleChange = (e, next_sepling) => {

        const inputValue = e.target.value;

        if (inputValue.length) {

            setValue(perv => ({ ...perv, [e.target.name]: inputValue }));

            if (next_sepling) {

                next_sepling.current.focus();

            }

        }

        return null;

    }

    useEffect(() => {

        setUpdatePasswordData(perv => ({ ...perv, code: Object.values(value).join('') }));

    }, [value]);

    return {
        first_inputRef,
        second_inputRef,
        thired_inputRef,
        fourth_inputRef,
        fifth_inputRef,
        sixth_inputRef,
        handleChange,
        value,
    };
}

export {
    useDataGetter
}