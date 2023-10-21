import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useRef } from 'react';
import { useGetShopData } from './data';
import { Link } from 'react-router-dom';
import { handelChange } from '../../../../assets/js/utils';
import { convertOriginToString } from '../AddOrigin/data';


export default function AddCoffeeShop({ setData }) {

    const dropdownRef = useRef();

    const { value, setValue, selectedShop, handleDuplicatedValue, coffee } = useGetShopData();

    useEffect(() => {

        handelChange(setData, 'coffee', convertOriginToString(value, 'id'));

    }, [value]);

    return (
        <div className='relative mb-6'>

            <div className='flex items-center justify-between'>

                <label htmlFor={'Origin'} className='text-[18px] text-[#252525] font-medium'>Shop</label>

                <Link to={'/setups/coffee-shop/add-coffee'} className='flex items-center cursor-pointer'>

                    <h2 className='font-medium underline text-[#45B8EA] me-3'>Add Shop</h2>

                </Link>

            </div>

            <Chips allowDuplicate={false} removable={true} className='chips' onFocus={e => dropdownRef.current?.show()} value={value.map(item => item?.name)} onChange={(e) => setValue(e.target.value)} />

            <Dropdown ref={dropdownRef} value={selectedShop} onChange={(e) => handleDuplicatedValue(e.value)} options={coffee} optionLabel="name"
                filter className="w-full chips" />

        </div>
    )
}
