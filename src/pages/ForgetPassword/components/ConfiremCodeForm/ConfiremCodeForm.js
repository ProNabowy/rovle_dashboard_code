import { useDataGetter } from "./data";

export default function ConfiremCodeForm({ data, setUpdatePasswordData }) {

    const {
        first_inputRef,
        second_inputRef,
        thired_inputRef,
        fourth_inputRef,
        handleChange,
    } = useDataGetter(data, setUpdatePasswordData);

    const invalid = data?.invalid;

    const inputClass = `rounded-[8px] border border-[rgba(255,_255,_255,_0.40)] w-[82px] h-[94px] transition px-4 ${invalid ? "!border-[red] !text-[red]" : ""} text-center text-[30px] me-6 flex items-center justify-center`

    return (

        <div>

            <div className="flex items-center justify-center mb-[48px] ">

                <input
                    type="text"
                    name='1'
                    ref={first_inputRef}
                    onChange={e => handleChange(e, second_inputRef)}
                    maxLength={1}
                    autoFocus
                    style={{ background: 'linear-gradient(120deg, #FFF -45.57%, rgba(217, 217, 217, 0.00) 134.89%)', backdropFilter: 'blur(12.343469619750977px)' }}
                    className={`${inputClass}`}
                />
                <input
                    type="text"
                    name='2'
                    ref={second_inputRef}
                    onChange={e => handleChange(e, thired_inputRef)}
                    maxLength={1}
                    style={{ background: 'linear-gradient(120deg, #FFF -45.57%, rgba(217, 217, 217, 0.00) 134.89%)', backdropFilter: 'blur(12.343469619750977px)' }}
                    className={`${inputClass}`}
                />
                <input
                    type="text"
                    name='3'
                    ref={thired_inputRef}
                    onChange={e => handleChange(e, fourth_inputRef)}
                    maxLength={1}
                    style={{ background: 'linear-gradient(120deg, #FFF -45.57%, rgba(217, 217, 217, 0.00) 134.89%)', backdropFilter: 'blur(12.343469619750977px)' }}
                    className={`${inputClass}`}
                />
                <input
                    type="text"
                    name='4'
                    ref={fourth_inputRef}
                    onChange={e => handleChange(e)}
                    maxLength={1}
                    style={{ background: 'linear-gradient(120deg, #FFF -45.57%, rgba(217, 217, 217, 0.00) 134.89%)', backdropFilter: 'blur(12.343469619750977px)' }}
                    className={`${inputClass}`}
                />

            </div>

        </div>

    )
}
