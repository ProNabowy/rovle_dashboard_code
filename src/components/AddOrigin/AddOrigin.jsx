import { Chips } from 'primereact/chips';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import React, { useRef } from 'react';
import { useGetOriginData } from './data';
import Input from '../Input/Input';

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

        <div className={`w-full sm:w-[48%] relative ${classNames}`}>

            <div className='flex items-center justify-between'>

                <label htmlFor={'Origin'} className='label'>Origen</label>

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
                        className='w-[90%] sm:w-[50vw]'
                        headerClassName='origin'
                        onHide={() => setVisible(false)}
                    >

                        <Input
                            value={addOriginValue}
                            required
                            onChange={(e) => setAddOriginValue(e.target.value)}
                            classNames='!my-5 !w-full border border-[#b3b3b3] rounded-[8px]'
                        />

                        <div className='flex items-center justify-center'>
                            <Button className='!bg-[#45B8EA] !border-[#45B8EA] w-full sm:w-fit !px-10' label='Enviar' onClick={handelAddOrigin} />
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
                emptyFilterMessage="No hay opciones disponibles"
                emptyMessage="No hay opciones disponibles"
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