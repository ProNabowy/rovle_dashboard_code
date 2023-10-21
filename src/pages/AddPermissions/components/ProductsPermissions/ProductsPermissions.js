import Options from "../Options";

export default function ProductsPermissions() {

    return (

        <div className='grid grid-cols-12 gap-10'>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Products</label>

                <Options id={['product1', 'product2', 'product3']} />

            </div>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Plans</label>

                <Options id={['plan1', 'plan2', 'plan3']} />

            </div>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Passport</label>

                <Options id={['passport1', 'passport2', 'passport3']} />

            </div>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Subscriptions</label>

                <Options id={['subscription1', 'subscription2', 'subscription3']} />

            </div>

            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Size managemment</label>

                <Options id={['size1', 'size2', 'size3']} />

            </div>
            
            <div className='col-span-6 flex items-center'>

                <label className='text-[#252525] text-[20px] min-w-[200px]'>Origin</label>

                <Options id={['origin1', 'origin2', 'origin3']} />

            </div>


        </div>
    )
}
