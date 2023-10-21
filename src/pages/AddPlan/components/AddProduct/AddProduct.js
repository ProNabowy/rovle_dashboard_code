import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useRef } from 'react';
import { convertOriginToString, useGetOriginData } from './data';
import { handelChange } from '../../../../assets/js/utils';
import { Link } from 'react-router-dom';


export default function AddProduct({ list, setData }) {

    const dropdownRef = useRef();

    const {
        value, setValue, selectedOrigin,
        setSelectedOrigin, setVisible,
    } = useGetOriginData();

    useEffect(() => {

        handelChange(setData, 'origins', convertOriginToString(value, 'id'));

    }, [value]);

    return (
        <div className='relative my-6'>

            <div className='flex items-center justify-between'>

                <label htmlFor={'Origin'} className='text-[18px] text-[#252525] font-medium'>Products</label>

                <Link to={'/products/list/add-product'} className='flex items-center cursor-pointer' onClick={() => setVisible(true)}>

                    <h2 className='font-medium underline text-[#45B8EA] me-3'>Add Products</h2>

                </Link>

            </div>

            <Chips allowDuplicate={false} removable={true} className='chips' onFocus={e => dropdownRef.current?.show()} value={convertOriginToString(value, 'name')} onChange={(e) => {
                setValue(e.target.value);
            }} />

            <Dropdown ref={dropdownRef} value={selectedOrigin} onChange={(e) => setSelectedOrigin(e.value)} options={list} optionLabel="commercial_name" placeholder="Select a Origin"
                filter className="w-full chips" />

        </div>
    )
}
