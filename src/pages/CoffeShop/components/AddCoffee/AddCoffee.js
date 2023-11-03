import { Dropdown } from 'primereact/dropdown';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { handelSubmit, useDataGetter } from './data';
import { GoogleMap, InputsGroup, PageContent } from '../../../../components';


export default function AddCoffee() {

    const store = useSelector(store => store);

    const { selectedCountry, setSelectedCountry, setSelectedCity, setSelectedProvince, setSelectedRoaster, data, setData }
        = useDataGetter();

    return (
        <PageContent title={'Coffee Form'} showActions={false}  >
            <form onSubmit={e => e.preventDefault()} className='px-10'>

                <InputsGroup data={
                    {
                        names: ['Name', 'Post Code'],
                        placeholders: ['Enter Name', 'Enter Post Code'],
                        state: setData,
                        key: ['name', 'post_code']
                    }
                } />

                <div className='mb-6'>

                    <label htmlFor={'Address'} className='text-[18px] text-[#252525] font-medium'>Address</label>

                    <input onChange={e => setData(perv => ({ ...perv, address: e.target.value }))} type='text' id={'Address'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Address'} />

                </div>

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%]'>

                        <div className='flex items-center justify-between'>

                            <h2 className='text-[18px] text-[#252525] font-medium'>Roasters</h2>

                            <div className='flex items-center cursor-pointer'>

                                <h2 className='font-medium underline text-[#45B8EA] me-3'>Add Roster</h2>

                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#45B8EA]' />

                            </div>

                        </div>

                        <Dropdown value={selectedCountry} onChange={(e) => setSelectedRoaster(e.value)} options={store.rosters} optionLabel="user.name"
                            placeholder="Select Roaster" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'Country'} className='text-[18px] text-[#252525] font-medium'>Country</label>

                        <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={store.countries} optionLabel="name"
                            placeholder="Enter Country Name" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                </div>

                <div className='flex items-center justify-between mb-6'>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'Province'} className='text-[18px] text-[#252525] font-medium'>Province</label>

                        <Dropdown value={selectedCountry} onChange={(e) => setSelectedProvince(e.value)} options={store.province} optionLabel="name"
                            placeholder="Enter Province" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                    <div className='sm:w-[48%]'>

                        <label htmlFor={'City'} className='text-[18px] text-[#252525] font-medium'>City</label>

                        <Dropdown value={selectedCountry} onChange={(e) => setSelectedCity(e.value)} options={store.cities} optionLabel="name"
                            placeholder="Enter City" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                </div>

                <div className='mb-10'>

                    <label htmlFor={'Address'} className='text-[18px] text-[#252525] font-medium'>Select Location</label>

                    <input type='text' id={'Address'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Enter Latitude / Longitude'} />

                </div>

                <div id="map"></div>


                <div className='flex items-center justify-end mt-10'>

                    <button onClick={_ => handelSubmit(data)} className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Submit</button>

                </div>

            </form>
        </PageContent>
    )
}

