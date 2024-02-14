import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import React, { useEffect, useRef, useState } from 'react';
import { useGetShopData } from './data';
import { Dialog } from 'primereact/dialog';
import AddCoffee from '../../pages/CoffeShop/components/AddCoffee/AddCoffee';

function ChipsList({
    options,
    title,
    url,
    optionLabel,
    formik,
    dataKey,
    listOfState,
    stateList,
    pagePermissionKeyName
}) {
    const [visible, setVisible] = useState(false);

    const dropdownRef = useRef();

    const {
        selectedShop,
        handleDuplicatedValue,
        handleRemove,
        renderChipsItem,
        isHasPermissions
    } = useGetShopData(formik, dataKey, optionLabel);

    useEffect(() => {

        if (listOfState) {

            const itHasValues = Object.keys(listOfState);

            if (itHasValues?.length) {

                setVisible(false);

            }

        }


        return () => { };
    }, [listOfState]);

    return (
        <div className='relative mb-8'>

            <div className='flex items-center justify-between'>

                <label htmlFor={'Origin'} className='text-[18px] text-[#252525] font-medium'>
                    {title}
                </label>

                {
                    isHasPermissions(pagePermissionKeyName)
                        ?
                        <div onClick={_ => setVisible(true)} to={url} className='flex items-center cursor-pointer'>
                            <h2 className='font-medium underline text-[#45B8EA] me-3'>Añadir {title}</h2>
                        </div>
                        :
                        null
                }


            </div>

            {
                isHasPermissions(pagePermissionKeyName)
                    ?
                    <Dialog 
                        visible={visible}
                        onHide={() => setVisible(false)}
                        headerClassName='origin'
                        resizable={false}
                        className='w-[85vw]'
                    >

                        <AddCoffee stateList={stateList} />

                    </Dialog>
                    :
                    null
            }

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