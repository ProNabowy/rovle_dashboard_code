import React, { useEffect, useState } from 'react'
import { PageContent } from '../../components';
import { Dropdown } from 'primereact/dropdown';
import { renderFlexInputs } from '../../assets/js/utils';
import { useSelector } from 'react-redux';
import { useHandleAddUserLogic } from './data';
import { Roles } from '../../apis/apis';


export default function AddUser() {
    const store = useSelector(store => store);

    const { data, setData, handelSubmit, selectedCountry, setSelectedCountry, selectedCity, setSelectedCity, selectedProvince, setSelectedProvince } = useHandleAddUserLogic();

    const [selectedRole, setSelectedRole] = useState(null);

    const [roles, setRoles] = useState(null);

    const rolesUtailty = new Roles();

    useEffect(() => {

        rolesUtailty.fetchRoles(setRoles);

    }, []);

    return (

        <PageContent title={'User Form'} showActions={false}    >

            <form onSubmit={handelSubmit} className='px-10'>

                {renderFlexInputs(['Name', 'Email'], ['Enter Name', 'Enter Email'], setData, ['user_name', 'user_email'])}

                {renderFlexInputs(['Password', 'Password Confirmation'], ['Enter Password', 'Enter Password Confirmation'], setData, ['user_password', 'user_password_confirmation'], true)}

                {renderFlexInputs(['Address', 'Phone'], ['Enter Address', 'Enter Phone Number'], setData, ['user_address', 'user_phone'])}

                {renderFlexInputs(['Zip', 'Card ID'], ['Enter Zip', 'Enter Card ID'], setData, ['user_zip', 'user_card_id'])}

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%]'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>Country</h2>

                        <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={store?.countries} optionLabel="name"
                            placeholder="Select Country" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>
                    <div className='sm:w-[48%]'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>Province</h2>

                        <Dropdown value={selectedProvince} onChange={(e) => setSelectedProvince(e.value)} options={store?.province} optionLabel="name"
                            placeholder="Select Province" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                </div>

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%]'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>City</h2>

                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={store?.cities} optionLabel="name"
                            placeholder="Select City" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>
                    <div className='sm:w-[48%]'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>Permissions</h2>

                        <Dropdown disabled optionLabel="name"
                            placeholder="Under Prociccing" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                </div>


                <div className='flex items-center justify-end mt-10'>

                    <button className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

                </div>

            </form>

        </PageContent>
    )
}
