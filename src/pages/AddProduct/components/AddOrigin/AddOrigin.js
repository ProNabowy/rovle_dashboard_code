import { Chips } from 'primereact/chips';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useRef } from 'react';
import { convertOriginToString, useGetOriginData } from './data';
import { handelChange } from '../../../../assets/js/utils';


export default function AddOrigin({ setData }) {

    const dropdownRef = useRef();

    const {
        value, setValue, selectedOrigin,
        setSelectedOrigin, visible, setVisible,
        addOriginValue, setAddOriginValue,
        origins,
        handelSubmit
    } = useGetOriginData();

    useEffect(() => {

        handelChange(setData, 'origins', convertOriginToString(value, 'id'));

    }, [value]);



    return (
        <div className='sm:w-[48%] relative'>

            <div className='flex items-center justify-between'>

                <label htmlFor={'Origin'} className='text-[18px] text-[#252525] font-medium'>Origin</label>

                <div className='flex items-center cursor-pointer' onClick={() => setVisible(true)}>

                    <h2 className='font-medium underline text-[#45B8EA] me-3'>Add Origin</h2>

                </div>

            </div>

            <Dialog header="Add Origin" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>

                <InputText className='!my-5 !w-full' placeholder='Add Origin' value={addOriginValue} onChange={(e) => setAddOriginValue(e.target.value)} />

                <div className='flex items-center justify-center'>

                    <Button className='!bg-[#45B8EA] !border-[#45B8EA] !px-10' label="Submit" onClick={handelSubmit} />

                </div>

            </Dialog>

            <Chips allowDuplicate={false} removable={true} className='chips' onFocus={e => dropdownRef.current?.show()} value={convertOriginToString(value, 'name')} onChange={(e) => {
                setValue(e.target.value);
            }} />

            <Dropdown ref={dropdownRef} value={selectedOrigin} onChange={(e) => setSelectedOrigin(e.value)} options={origins} optionLabel="name" placeholder="Select a Origin"
                filter className="w-full chips" />

        </div>
    )
}
