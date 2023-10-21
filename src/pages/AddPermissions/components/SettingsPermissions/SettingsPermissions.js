import Options from "../Options";

export default function SettingsPermissions() {

    return (

        <div className='grid grid-cols-12 gap-10'>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Country</label>

                <Options id={['country1', 'country2', 'country3']} />

            </div>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Province</label>

                <Options id={['province1', 'province2', 'province3']} />

            </div>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>City</label>

                <Options id={['city1', 'city2', 'city3']} />

            </div>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Permissions</label>

                <Options id={['permissions1', 'permissions2', 'permissions3']} />

            </div>

        </div>
    )
}
