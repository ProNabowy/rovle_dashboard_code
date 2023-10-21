import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { PageContent } from '../../components'
import { useEffect } from "react";
import { Cities, Size } from "../../apis/apis";
import { useSelector } from "react-redux";

export default function AddSize() {

    const [selectedRoaster, setselectedRoaster] = useState(null);

    const [data, setData] = useState({
        name: "",
        weight: "",
        provider_id: '',
    });

    const roasters = useSelector(store => store.rosters);

    useEffect(() => {

        setData(perv => ({ ...perv, provider_id: selectedRoaster?.id }))

    }, [selectedRoaster]);

    const handleSubmit = (e) => {

        e.preventDefault();

        const sizeUtility = new Size();

        sizeUtility.addSize(data);

    }


    return (

        <PageContent title={'Size Form'} showActions={false}>

            <form onSubmit={handleSubmit}>

                <div className='p-10 pb-4'>

                    <label className='mb-3 block text-[#234486]'>Roasters</label>

                    <Dropdown value={selectedRoaster} onChange={(e) => setselectedRoaster(e.value)} options={roasters} optionLabel="user.name"
                        placeholder="Select Roaster" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

                <div className='p-10 py-4'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Character</label>

                    <input type='text' id="name-input" onChange={(e) => setData(perv => ({ ...perv, name: e.target.value }))} className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' placeholder='Enter Character' />

                </div>

                <div className='p-10 pt-4'>

                    <label htmlFor='weight' className='mb-3 block text-[#234486]'>Weight</label>

                    <input type='text' id="weight" onChange={(e) => setData(perv => ({ ...perv, weight: e.target.value }))} className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' placeholder='Enter Weight' />

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
