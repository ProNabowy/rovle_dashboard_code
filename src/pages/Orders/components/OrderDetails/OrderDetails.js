import { Dialog } from 'primereact/dialog';

export default function OrderDetails({ visible, setVisible, row }) {

    return (

        <Dialog header={`Detalles del pedido (${row?.name})`} headerClassName='text-center !bg-[#58291E] !text-white' visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>

            <div className='grid grid-cols-12 gap-5 mt-5'>

                <div className='col-span-12 grid grid-cols-12 gap-5'>

                    <div className='col-span-6'>

                        <h3 className='text-[#252525] opacity-70 mb-[32px]'>Nombre del Producto</h3>

                    </div>

                    <div className='col-span-2'>

                        <h3 className='text-[#252525] opacity-70 mb-[32px]'>Peso</h3>

                    </div>

                    <div className='col-span-2'>

                        <h3 className='text-[#252525] opacity-70 mb-[32px]'>Cantidad</h3>

                    </div>


                    <div className='col-span-2'>

                        <h3 className='text-[#252525] opacity-70 mb-[32px]'>Precio</h3>

                    </div>

                </div>

                {
                    row?.products?.map((item, index) => {

                        return (
                            <div key={index} className='grid grid-cols-12 gap-5 col-span-12'>

                                <div className='col-span-6'>

                                    <h5 className='text-[#58291E] text-[16px] font-medium'>{item?.product_name}</h5>

                                </div>

                                <div className='col-span-6'>
                                    {
                                        row?.products?.[index]?.items?.map((order, i) => {
                                            return (
                                                <div key={i} className='grid grid-cols-12 gap-5'>

                                                    <div className='col-span-4 mb-1'>

                                                        <h5 className='text-[#58291E] text-[16px] font-medium'>500g</h5>

                                                    </div>

                                                    <div className='col-span-4 mb-1'>

                                                        <h5 className='text-[#58291E] text-[16px] font-medium'>{order?.units} Paquete</h5>

                                                    </div>

                                                    <div className='col-span-4 mb-1'>

                                                        <h5 className='text-[#58291E] text-[16px] font-medium'>{order?.price_per_unit}$</h5>

                                                    </div>

                                                </div>
                                            )

                                        })
                                    }

                                </div>


                            </div>
                        )

                    })
                }

                <h2 className='col-span-12 mt-5'>

                    Totals Price
                    <span className='text-[#58291E] ms-3 font-medium'>12.95 Eouro</span>

                </h2>

                <h2 className='col-span-12 mt-3'>Nota:</h2>

                <p className='p-3 border border-[#252525ac] col-span-12 rounded-[5px]'>Tu mensaje parece ser un texto en latín o una combinación de palabras que no forman una oración coherente en español. Si puedes proporcionar más contexto o aclarar tu solicitud, estaré encantado de ayudarte.</p>

            </div>

        </Dialog>

    )
}
