import { Dialog } from 'primereact/dialog';
import { Fragment } from 'react';

export default function OrderDetails({ visible, setVisible, row }) {

    return (

        <Dialog header={`Order details (${row?.name})`} headerClassName='text-center !bg-[#58291E] !text-white' visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>

            <div className='grid grid-cols-12 gap-5 mt-5'>

                <div className='col-span-12 grid grid-cols-12 gap-5'>

                    <div className='col-span-6'>

                        <h3 className='text-[#252525] opacity-70 mb-[32px]'>Product name</h3>

                    </div>

                    <div className='col-span-2'>

                        <h3 className='text-[#252525] opacity-70 mb-[32px]'>Weight</h3>

                    </div>

                    <div className='col-span-2'>

                        <h3 className='text-[#252525] opacity-70 mb-[32px]'>Amount</h3>

                    </div>


                    <div className='col-span-2'>

                        <h3 className='text-[#252525] opacity-70 mb-[32px]'>Price</h3>

                    </div>

                </div>

                {
                    row?.items.map((item, index) => {

                        return (
                            <Fragment key={index}>

                                <div className='col-span-6'>

                                    <h5 className='text-[#58291E] text-[16px] font-medium'>{item?.presentation?.product?.commercial_name}</h5>

                                </div>

                                <div className='col-span-2'>

                                    <h5 className='text-[#58291E] text-[16px] font-medium'>500g</h5>

                                </div>

                                <div className='col-span-2'>

                                    <h5 className='text-[#58291E] text-[16px] font-medium'>{item?.units} package</h5>

                                </div>

                                <div className='col-span-2'>

                                    <h5 className='text-[#58291E] text-[16px] font-medium'>{item?.price}$</h5>

                                </div>

                            </Fragment>
                        )

                    })
                }

                <h2 className='col-span-12 mt-5'>

                    Totals Price
                    <span className='text-[#58291E] ms-3 font-medium'>12.95 Eouro</span>

                </h2>

                <h2 className='col-span-12 mt-3'>Note:</h2>

                <p className='p-3 border border-[#252525ac] col-span-12 rounded-[5px]'>Necessitatibus eum necessitatibus quia et ducimus necessitatibus ipsam neque ut. Consequatur quia doloribus quaerat veniam. Et harum maxime laboriosam consequatur iure voluptate quo. Omnis autem nam odit quos fugit ratione voluptatem.</p>

            </div>

        </Dialog>

    )
}
