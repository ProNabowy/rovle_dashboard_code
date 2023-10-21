import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { PageContent } from '../../components'
import { useEffect } from "react";
import { Cities } from "../../apis/apis";
import { useSelector } from "react-redux";

export default function AddCity() {

    const [selectedProvince, setselectedProvince] = useState(null);

    const [data, setData] = useState({
        name: "",
        province_id: '',
    });

    const citiesUtility = new Cities();

    const province = useSelector(store => store.province);

    useEffect(() => {

        setData(perv => ({ ...perv, province_id: selectedProvince?.id }))

    }, [selectedProvince]);

    const handelSubmit = e => {

        e.preventDefault();

        if (selectedProvince) {

            citiesUtility.addCity(data);

        }

    }

    return (

        <PageContent title={'City Form'} showActions={false}>

            <form onSubmit={handelSubmit}>

                <div className='p-10 pb-2'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Name</label>

                    <input type='text' onChange={(e) => setData(perv => ({ ...perv, name: e.target.value }))} className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' placeholder='Enter City Name' />

                </div>
                <div className='p-10 pt-2'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Province</label>

                    <Dropdown value={selectedProvince} onChange={(e) => setselectedProvince(e.value)} options={province} optionLabel="name"
                        placeholder="Select Province" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

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
