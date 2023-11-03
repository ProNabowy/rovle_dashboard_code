import React, { useState } from 'react'
import { InputsGroup, PageContent } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

export default function Profile() {

    const [data, setData] = useState({});

    return (
        <PageContent title={'My Profile'} showActions={false}>

            <form className='px-10'>

                <div className='w-[250px] h-[250px] shadow-lg mb-20 m-auto rounded-full flex items-center justify-center relative profile-image overflow-hidden'>

                    <img src={data?.image ? URL.createObjectURL(data.image) : require('../../assets/images/nabowy.jpg')} alt='' className='w-full h-full object-cover rounded-full' />

                    <div className='w-[250px] h-[250px] flex items-start justify-center rounded-full bg-[#45b9eae1] absolute left-0 z-20 transition bottom-[-250px] uploade-image'>

                        <input type='file' accept="image/png, image/gif, image/jpeg" onChange={e => setData(perv => ({ ...perv, image: e.target.files[0] }))} id='uploade-img' className='w-0 h-0 appearance-none opacity-0 scale-0' />

                        <label htmlFor='uploade-img'>

                            <FontAwesomeIcon icon={faImage} className='text-[40px] mt-8 cursor-pointer text-white' />

                        </label>

                    </div>

                </div>

                <InputsGroup
                    data={{
                        names: ['Name', 'Email'],
                        placeholders: ['Mahmoud Nabowy', 'nabowy.work@gmail.com'],
                        // Don't Forget To Set Keys To handle change
                        key: ['', ''],
                        state: setData
                    }} />

                <InputsGroup
                    data={{
                        names: ['Address', 'Phone'],
                        placeholders: ['Enter Your Address', 'Enter Your Phone'],
                        // Don't Forget To Set Keys To handle change
                        key: ['', ''],
                        state: setData
                    }} />

                <InputsGroup
                    data={{
                        names: ['Zip', 'Card ID'],
                        placeholders: ['Enter Your Zip', 'Enter Your Card ID'],
                        // Don't Forget To Set Keys To handle change
                        key: ['', ''],
                        state: setData
                    }} />

                <InputsGroup
                    data={{
                        names: ['Country', 'Province'],
                        placeholders: ['Enter Your Country', 'Enter Your Province'],
                        // Don't Forget To Set Keys To handle change
                        key: ['', ''],
                        state: setData
                    }} />

                <InputsGroup
                    data={{
                        names: ['City', 'Permissions'],
                        placeholders: ['Enter Your City', 'Enter Your Permissions'],
                        // Don't Forget To Set Keys To handle change
                        key: ['', ''],
                        state: setData
                    }} />

                <div className='flex items-center justify-end mt-10'>

                    <button className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Save Changes</button>

                </div>

            </form>

        </PageContent>
    )
}
