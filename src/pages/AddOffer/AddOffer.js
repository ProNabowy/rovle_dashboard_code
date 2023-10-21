import React, { useState } from 'react'
import { PageContent } from '../../components';
import { Dropdown } from 'primereact/dropdown';
import { faArrowUpRightFromSquare, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from 'primereact/checkbox';
import { Calendar } from 'primereact/calendar';

const renderFlexInputs = (names, placeholders) => {
    return (
        <div className='flex items-center justify-between mb-6'>

            <div className='sm:w-[48%]'>

                <label htmlFor={names[0]} className='text-[18px] text-[#252525] font-medium'>{names[0]}</label>

                <input type='text' id={names[0]} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={placeholders[0]} />

            </div>

            <div className='sm:w-[48%]'>

                <label htmlFor={names[1]} className='text-[18px] text-[#252525] font-medium'>{names[1]}</label>

                <input type='text' id={names[1]} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={placeholders[1]} />

            </div>

        </div>
    )
}


export default function AddOffer() {
    const [checked, setChecked] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [date, setDate] = useState(null);

    const countries = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <PageContent
            title={'Offer Form'}
            showActions={false}
        >
            <form onSubmit={e => e.preventDefault()} className='px-10 add-offer-form'>

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'name'} className='text-[18px] text-[#252525] font-medium'>Offer Name</label>

                        <input type='text' id={'name'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Offer Name'} />

                    </div>

                    <div className='sm:w-[48%]'>

                        <div className='flex items-center justify-between'>

                            <h2 className='text-[18px] text-[#252525] font-medium'>Roasters</h2>

                            <div className='flex items-center cursor-pointer'>

                                <h2 className='font-medium underline text-[#45B8EA] me-3'>Add Roster</h2>

                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#45B8EA]' />

                            </div>

                        </div>

                        <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name"
                            placeholder="Select Roaster" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                </div>

                <div className='mb-6'>

                    <label htmlFor={'name'} className='text-[18px] text-[#252525] font-medium'>Usuario</label>

                    <input type='text' id={'name'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Select Nivel'} />

                </div>

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%] border border-[#28C76F] p-3 py-8 rounded-[10px]'>

                        <div className='mb-6'>

                            <h1 className='flex items-center mb-3'>
                                Active
                                <FontAwesomeIcon icon={faKey} className='ms-3 text-[#252525]' />
                            </h1>

                            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name"
                                placeholder="Choose the activation method" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                        </div>

                        <div className='mb-6'>

                            <h1 className='flex items-center mb-3'>
                                Can. ACT
                                <FontAwesomeIcon icon={faKey} className='ms-3 text-[#252525]' />
                            </h1>

                            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name"
                                placeholder="Enter Can.ACT" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                        </div>

                    </div>

                    <div className='sm:w-[48%] border border-[#28C76F] p-3 py-8 rounded-[10px]'>

                        <div className='mb-6'>

                            <h1 className='flex items-center mb-3'>
                                T.Promo
                                <FontAwesomeIcon icon={faKey} className='ms-3 text-[#252525]' />
                            </h1>

                            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name"
                                placeholder="Select Discount" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                        </div>

                        <div className='mb-6'>

                            <h1 className='flex items-center mb-3'>
                                C. Oferta
                                <FontAwesomeIcon icon={faKey} className='ms-3 text-[#252525]' />
                            </h1>

                            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name"
                                placeholder="Enter C. OFERTA" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                        </div>

                    </div>


                </div>

                <div className='mb-6'>

                    <label htmlFor={'name'} className='text-[18px] text-[#252525] font-medium'>Recurren</label>

                    <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name"
                        placeholder="Select Recurren " className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <div className='flex items-center justify-between mb-6'>

                    <div className='w-[48%]'>

                        <label htmlFor={'name'} className='text-[18px] text-[#252525] font-medium flex items-center justify-between'>

                            <h3>Fecha INI</h3>

                            <div className='flex items-center'>

                                <label className='me-4' htmlFor='checkbox-1' >Auto</label>

                                <Checkbox inputId='checkbox-1' onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>

                            </div>

                        </label>

                        <Calendar value={date} onChange={(e) => setDate(e.value)} className='w-full my-2' showIcon />

                    </div>

                    <div className='w-[48%]'>

                        <label htmlFor={'name'} className='text-[18px] text-[#252525] font-medium flex items-center justify-between'>

                            <h3>Fecha INI</h3>

                            <div className='flex items-center'>

                                <label className='me-4' htmlFor='checkbox-1' >Auto</label>

                                <Checkbox inputId='checkbox-1' onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>

                            </div>

                        </label>

                        <Calendar value={date} onChange={(e) => setDate(e.value)} className='w-full my-2' showIcon />

                    </div>

                </div>
                <div className='mb-6'>

                    <label htmlFor={'Fisico'} className='text-[18px] text-[#252525] font-medium'>Fisico</label>

                    <input type='text' id={'Fisico'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Select Fisico'} />

                </div>

                <div>

                    <label htmlFor={'Description'} className='text-[18px] text-[#252525] font-medium'>Description</label>

                    <textarea rows={5} type='text' id={'Description'} className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Description'} />

                </div>

                <div className='flex items-center justify-end mt-10'>

                    <button className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

                </div>

            </form>
        </PageContent>
    )
}
