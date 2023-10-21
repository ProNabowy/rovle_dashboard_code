import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { PageContent } from '../../components'
import { useSelector } from "react-redux";
import { Province } from "../../apis/apis";
import { useEffect } from "react";

export default function AddProvince() {

    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = useSelector(store => store.countries);

    const [data, setData] = useState({
        name: "",
        country_id: ""
    });

    const provinceUtility = new Province();


    // Update Data
    useEffect(() => {

        setData(perv => ({ ...perv, country_id: selectedCountry?.id }))

    }, [selectedCountry]);

    const handelSubmit = e => {

        e.preventDefault();

        provinceUtility.addProvinces(data);
    }

    return (
        <PageContent title={'Add Province'} showActions={false}   >

            <form onSubmit={handelSubmit}>

                <div className='p-10 pb-2'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Name</label>

                    <input type='text' onChange={e => setData(prev => ({ ...prev, name: e.target.value }))} className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' placeholder='Enter Country Name' />

                </div>
                <div className='p-10 pt-2'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Country</label>

                    <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name"
                        placeholder="Select a Country" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

                <div className='flex items-center justify-end p-10 pb-5'>

                    <button className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>
                        Submit
                    </button>

                </div>

            </form>


        </PageContent>
    )
}
