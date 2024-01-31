import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import React, { useRef } from 'react';
import { useGetShopData } from './data';
import { Link } from 'react-router-dom';

function ChipsList({ options, title, url, optionLabel, formik, dataKey }) {

    const dropdownRef = useRef();

    const { selectedShop, handleDuplicatedValue, handleRemove, renderChipsItem } = useGetShopData(formik, dataKey, optionLabel);

    return (
        <div className='relative mb-8'>

            <div className='flex items-center justify-between'>

                <label htmlFor={'Origin'} className='text-[18px] text-[#252525] font-medium'>
                    {title}
                </label>

                <Link to={url} className='flex items-center cursor-pointer'>
                    <h2 className='font-medium underline text-[#45B8EA] me-3'>Añadir {title}</h2>
                </Link>

            </div>

            <Chips
                allowDuplicate={false}
                removable={true}
                className='chips'
                onFocus={(e) => dropdownRef.current?.show()}
                value={formik.values[dataKey]}
                onChange={(e) => formik.setFieldValue(dataKey, e.target.value)}
                onRemove={(e) => handleRemove(e.value)}
                itemTemplate={renderChipsItem}
            />

            <Dropdown
                ref={dropdownRef}
                value={selectedShop}
                onChange={(e) => handleDuplicatedValue(e.value)}
                options={options}
                optionLabel={optionLabel || 'name'}
                filter
                className='w-full chips'
            />
        </div>
    );
}

export default React.memo(ChipsList);