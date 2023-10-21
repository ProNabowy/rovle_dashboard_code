import { useEffect, useState } from 'react';
import { PageContent } from '../../components';
import { Origins } from '../../apis/apis';
import { useSelector } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';

export default function AddOrigin() {

    const [data, setData] = useState({ name: "", provider_id: "" });

    const [selectedRoaster, setselectedRoaster] = useState(null);

    const roasters = useSelector(store => store.rosters);

    const OriginsUtailty = new Origins();

    const handelSubmit = (e) => {
        e.preventDefault();
        OriginsUtailty.addOrigin(data);
    }

    useEffect(() => {

        setData(perv => ({ ...perv, provider_id: selectedRoaster?.id }))

    }, [selectedRoaster?.id]);
    console.log(data);
    return (
        <PageContent title={'Origins Form'} showActions={false} >

            <form onSubmit={handelSubmit}>

                <div className='p-10 pb-4'>

                    <label className='mb-3 block text-[#234486]'>Roasters</label>

                    <Dropdown value={selectedRoaster} onChange={(e) => setselectedRoaster(e.value)} options={roasters} optionLabel="user.name"
                        placeholder="Select Roaster" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

                <div className='p-10 pt-4'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Name</label>

                    <input type='text' className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' onChange={e => setData({ name: e.target.value })} placeholder='Enter Origin Name' />

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
