import { PageContent } from '../../components';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from "primereact/radiobutton";
import { handelChange } from '../../assets/js/utils';
import { Link } from 'react-router-dom';
import { useAddPlan } from './data';
import { useEffect, useState } from 'react';
import { AddProduct, AddPackage } from './components';


export default function AddPlan() {

    const {
        setData, setIngredient, ingredient,
        selectedRoster, setSelectedRoster, roaster
    } = useAddPlan();

    const [packages, setPackages] = useState([]);

    useEffect(() => {

        ingredient === "Active" ? handelChange(setData, 'status', 1) : handelChange(setData, 'status', 0)

    }, [ingredient]);

    useEffect(() => {

        handelChange(setData, 'provider_id', selectedRoster?.id);

    }, [selectedRoster]);


    return (

        <PageContent title={'Plan Form'} showActions={false}  >

            <form onSubmit={e => e.preventDefault()} className='px-10'>

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'plan-name'} className='text-[18px] text-[#252525] font-medium'>Plan Name</label>

                        <input type='text' id={'plan-name'} onChange={e => handelChange(setData, 'name', e.target.value)} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Plan Name'} />

                    </div>

                    <div className="w-[48%]">

                        <label className='text-[18px] text-[#252525] font-medium block mb-4'>Status</label>

                        <div className='flex items-center'>

                            <div className="flex items-center cursor-pointer me-5">
                                <RadioButton inputId="ingredient1" name="Active" value="Active" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Active'} />
                                <label htmlFor="ingredient1" className={`ms-2 font-medium ${ingredient === "Active" ? "text-[#28C76F]" : "text-[#2525256d]"}`}>Active</label>
                            </div>
                            <div className="flex items-center cursor-pointer">
                                <RadioButton inputId="ingredient2" name="Disactive" value="Disactive" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Disactive'} />
                                <label htmlFor="ingredient2" className={`ms-2 font-medium ${ingredient === "Disactive" ? "text-[#28C76F]" : "text-[#2525256d]"}`}>Disactive</label>
                            </div>

                        </div>

                    </div>

                </div>


                <div className='mb-6'>

                    <div className='flex items-center justify-between'>

                        <h2 className='text-[18px] text-[#252525] font-medium'>Roaster Name</h2>

                        <Link to={'/groups/roasters/add-roaster'} className='flex items-center cursor-pointer'>

                            <h2 className='font-medium underline text-[#45B8EA] me-3'>Add Roaster</h2>

                        </Link>

                    </div>

                    <Dropdown value={selectedRoster} onChange={(e) => setSelectedRoster(e.value)} options={roaster} optionLabel="user.name"
                        placeholder="Enter Roaster Name" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <div>

                    <label htmlFor={'Description'} className='text-[18px] text-[#252525] font-medium'>Description</label>

                    <textarea onChange={e => handelChange(setData, 'description', e.target.value)} rows={5} type='text' id={'Description'} className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Description'} />

                </div>

                {
                    selectedRoster?.manage_stock ?

                        <AddProduct list={selectedRoster?.products} setData={setData} />

                        : null
                }

                <AddPackage setData={setPackages} />

                <div className='flex items-center justify-end mt-10'>

                    <button className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

                </div>

            </form>

        </PageContent >
    )
}
