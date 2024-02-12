import { Chips } from 'primereact/chips';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import React, { useRef } from 'react';
import { useGetOriginData } from './data';

function AddOrigin({ formik, provider_id, classNames }) {

    const dropdownRef = useRef();

    const {
        selectedOrigin,
        setSelectedOrigin,
        visible,
        setVisible,
        addOriginValue,
        setAddOriginValue,
        origins,
        isHasPermissions,
        handelAddOrigin
    } = useGetOriginData(formik, provider_id);

    const handleRemove = (removedValue) => {

        const newValue = formik.values.origins?.filter((val) => val !== removedValue);

        formik.setFieldValue('origins', newValue);

    };

    const renderChipsItem = (item) => {
        return item.name; // Render the name property of the item
    };

    return (

        <div className={`sm:w-[48%] relative ${classNames}`}>

            <div className='flex items-center justify-between'>

                <label htmlFor={'Origin'} className='text-[18px] text-[#252525] font-medium'>      Origen   </label>

                {
                    isHasPermissions('dashboard.origins.store')
                        ?
                        <div className='flex items-center cursor-pointer' onClick={() => setVisible(true)}>
                            <h2 className='font-medium underline text-[#45B8EA] me-3'>Añadir Origen</h2>
                        </div>
                        :
                        null
                }

            </div>

            {
                isHasPermissions('dashboard.origins.store')
                    ?
                    <Dialog
                        header='Añadir Origen'
                        visible={visible}
                        style={{ width: '50vw' }}
                        headerClassName='origin'
                        onHide={() => setVisible(false)}
                    >

                        <InputText
                            className='!my-5 !w-full'
                            placeholder='Añadir Origen'
                            value={addOriginValue}
                            required
                            onChange={(e) => setAddOriginValue(e.target.value)}
                        />

                        <div className='flex items-center justify-center'>
                            <Button className='!bg-[#45B8EA] !border-[#45B8EA] !px-10' label='Enviar' onClick={handelAddOrigin} />
                        </div>

                    </Dialog>
                    :
                    null
            }



            <Chips
                allowDuplicate={false}
                removable={true}
                className='chips'
                onFocus={(e) => dropdownRef.current?.show()}
                value={formik.values.origins}
                onChange={(e) => formik.setFieldValue('origins', e.target.value)}
                onRemove={(e) => {
                    handleRemove(e.value); // Pass the removed value directly to the handleRemove function
                }}

                itemTemplate={renderChipsItem} // Use the renderChipsItem function as the itemTemplate
            />

            <Dropdown
                ref={dropdownRef}
                value={selectedOrigin}
                onChange={(e) => {
                    const isDuplicate = formik.values.origins.some((val) => val.id === e.value.id);
                    if (!isDuplicate) setSelectedOrigin(e.value);
                }}
                options={origins}
                optionLabel='name'
                placeholder='Select an Origin'
                filter
                className='w-full chips'
            />
        </div>
    );
}

export default React.memo(AddOrigin);