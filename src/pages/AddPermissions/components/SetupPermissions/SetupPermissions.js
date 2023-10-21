import Options from "../Options";

export default function SetupPermissions() {

    return (

        <div className='grid grid-cols-12 gap-10'>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Coffee shop</label>

                <Options id={['coffee1', 'coffee2', 'coffee3']} />

            </div>


        </div>
    )
}
