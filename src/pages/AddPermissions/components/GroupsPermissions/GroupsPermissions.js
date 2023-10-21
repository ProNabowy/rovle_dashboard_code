import Options from "../Options";

export default function GroupsPermissions() {

    return (

        <div className='grid grid-cols-12 gap-10'>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>User</label>

                <Options id={['user1', 'user2', 'user3']} />

            </div>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Roasters</label>

                <Options id={['roasters1', 'roasters2', 'roasters3']} />

            </div>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Oroder</label>

                <Options id={['oroder1', 'oroder2', 'oroder3']} />

            </div>

        </div>
    )
}
