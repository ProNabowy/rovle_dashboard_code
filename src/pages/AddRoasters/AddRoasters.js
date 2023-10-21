import { PageContent } from '../../components';
import { Dropdown } from 'primereact/dropdown';
import { renderFlexInputs } from '../../assets/js/utils';
import { handelSubmit, useDataGetter } from './data';
import { RadioButton } from "primereact/radiobutton";
import { useState } from 'react';


export default function AddRoasters() {

    const [ingredient, setIngredient] = useState();

    const { selectedCountry, setSelectedCountry, selectedCity, setSelectedCity, selectedProvince, setSelectedProvince, store, data, setData } = useDataGetter();

    return (

        <PageContent title={'Roasters Form'} showActions={false} >

            <form onSubmit={e => e.preventDefault()} className='px-10'>

                {renderFlexInputs(['Name', 'Email'], ['Enter Name', 'Enter Email'], setData, ['user_name', 'user_email'])}

                {renderFlexInputs(['Password', 'Password Confirmation'], ['Enter Password', 'Enter Password Confirmation'], setData, ['user_password', 'user_password_confirmation'], true)}

                {renderFlexInputs(['NIF', 'Commercial Name'], ['Enter NIF', 'Enter Commercial Name'], setData, ['provider_nif', 'provider_commercial_name'])}

                {renderFlexInputs(['Official Name', 'Address'], ['Enter Official Name', 'Enter Address'], setData, ['provider_official_name', 'provider_address'])}

                {renderFlexInputs(['Zip', 'Phone'], ['Enter Zip', 'Enter Phone'], setData, ['provider_zip', 'provider_phone'])}

                <div className='flex items-center justify-between mb-6'>


                    <div className='sm:w-[48%]'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>Country</h2>

                        <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={store.countries} optionLabel="name"
                            placeholder="Select Country" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                    <div className='sm:w-[48%]'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>City</h2>

                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={store.cities} optionLabel="name"
                            placeholder="Select Country" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                </div>

                <div className='flex items-center justify-between mb-6'>


                    <div className='sm:w-[48%]'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>Province</h2>

                        <Dropdown value={selectedProvince} onChange={(e) => setSelectedProvince(e.value)} options={store.province} optionLabel="name"
                            placeholder="Select Province" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                    <div className="sm:w-[48%]">

                        <label className='text-[18px] text-[#252525] font-medium block mb-4'>Control of stock</label>

                        <div className='flex items-center'>

                            <div className="flex items-center cursor-pointer me-5">
                                <RadioButton inputId="ingredient1" name="Yes" value="Yes" onChange={(e) => {
                                    setIngredient(e.value);
                                    setData(prev => ({ ...prev, provider_manage_stock: 1 }));
                                }} checked={ingredient === 'Yes'} />
                                <label htmlFor="ingredient1" className={`ms-2 font-medium ${ingredient === "Yes" ? "text-[#28C76F]" : "text-[#2525256d]"}`}>Yes</label>
                            </div>
                            <div className="flex items-center cursor-pointer">
                                <RadioButton inputId="ingredient2" name="No" value="No" onChange={(e) => {
                                    setIngredient(e.value);
                                    setData(prev => ({ ...prev, provider_manage_stock: 0 }));
                                }} checked={ingredient === 'No'} />
                                <label htmlFor="ingredient2" className={`ms-2 font-medium ${ingredient === "No" ? "text-[#28C76F]" : "text-[#2525256d]"}`}>No</label>
                            </div>

                        </div>

                    </div>

                </div>


                <div className='flex items-center justify-end mt-10'>

                    <button onClick={_ => handelSubmit(data)} className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

                </div>

            </form>

        </PageContent>
    )
}
