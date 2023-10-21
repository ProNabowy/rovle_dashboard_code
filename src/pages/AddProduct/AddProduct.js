import React, { useState } from 'react'
import { PageContent } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useDataGetter, useSubmittedData } from './components/AddOrigin/data';
import { handelChange, renderFlexInputs } from '../../assets/js/utils';
import { AddCoffeeShop, AddOrigin, AddPackage } from './components';
import { Dropdown } from 'primereact/dropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function AddProduct() {

    const [selectedRoster, setSelectedRoster] = useState(null);
    const rosters = useSelector(store => store?.rosters);
    const { data, setData } = useDataGetter(selectedRoster);
    const { handelSubmit } = useSubmittedData(data);

    return (

        <PageContent title={'Product Form'} showActions={false}>

            <form onSubmit={handelSubmit} className='px-10 add-product'>

                {renderFlexInputs(['Product Name', 'Code'], ['Enter Name', 'Enter Code'], setData, ['trade_name', 'code'])}

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%]'>

                        <div className='flex items-center justify-between'>

                            <h2 className='text-[18px] text-[#252525] font-medium'>Roasters</h2>

                            <Link to={'/groups/roasters/add-roaster'} className='flex items-center cursor-pointer'>

                                <h2 className='font-medium underline text-[#45B8EA] me-3'>Add Roster</h2>

                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#45B8EA]' />

                            </Link>

                        </div>

                        <Dropdown value={selectedRoster} onChange={(e) => setSelectedRoster(e.value)} options={rosters} optionLabel="user.name"
                            placeholder="Enter Country Name" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                    <AddOrigin setData={setData} />

                </div>

                {renderFlexInputs(['Nombre Comercial', 'Region'], ['Enter Nombre Comercial', 'Enter Region'], setData, ['commercial_name', 'region'])}

                {renderFlexInputs(['Finca', 'Puntunaction Sca s'], ['Enter Finca', 'Enter Puntunaction Sca s'], setData, ['farm', 'sca_score'])}

                {renderFlexInputs(['Altitude', 'Process'], ['Enter Altitude', 'Enter Process'], setData, ['altitude', 'process'])}

                {/* Ask For Variedad And Grades */}
                {renderFlexInputs(['Variedad', 'Process'], ['Enter Variedad', 'Enter Process'], setData, ['grades', 'process'])}

                <AddCoffeeShop setData={setData} />

                <div>

                    <label htmlFor={'Description'} className='text-[18px] text-[#252525] font-medium'>Description</label>

                    <textarea rows={5} onChange={e => handelChange(setData, 'description', e.target.value)} type='text' id={'Description'} className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Description'} />

                </div>

                <AddPackage setData={setData} />

                <div className='flex items-center justify-end mt-10'>

                    <button className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

                </div>

            </form>

        </PageContent>
    )
}
