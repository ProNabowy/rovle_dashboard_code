import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { useRef } from 'react';
import { useGetOriginData } from './data';
import { Link } from 'react-router-dom';

export default function AddProduct({ formik, list }) {
    const dropdownRef = useRef();

    const {
        value,
        setValue,
        selectedOrigin,
        setSelectedOrigin,
    } = useGetOriginData(formik);


    const handleRemove = (removedValue) => {
        const newValue = value.filter((val) => val !== removedValue);
        setValue(newValue);
    };

    const renderChipsItem = (item) => {
        return item.commercial_name; // Render the name property of the item
    };

    return (
        <div className='relative my-6'>

            <div className='flex items-center justify-between'>

                <label htmlFor={'Origin'} className='text-[18px] text-[#252525] font-medium'>Products</label>

                <Link to={'/products/list/add-product'} className='flex items-center cursor-pointer'>

                    <h2 className='font-medium underline text-[#45B8EA] me-3'>Add Product</h2>

                </Link>

            </div>

            <Chips
                allowDuplicate={false}
                removable={true}
                className='chips'
                onFocus={(e) => dropdownRef.current?.show()}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                onRemove={(e) => {
                    handleRemove(e.value); // Pass the removed value directly to the handleRemove function
                }}

                itemTemplate={renderChipsItem} // Use the renderChipsItem function as the itemTemplate
            />

            <Dropdown
                ref={dropdownRef}
                value={selectedOrigin}
                onChange={(e) => {
                    const isDuplicate = value.some((val) => val.id === e.value.id);
                    if (!isDuplicate) {
                        setSelectedOrigin(e.value);
                    }
                }}
                options={list}
                optionLabel='commercial_name'
                placeholder='Select an Origin'
                filter
                className='w-full chips'
            />
        </div>
    );
}