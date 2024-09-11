import { Dialog } from 'primereact/dialog';
import { useDataGetter } from './data';
import { Fragment } from 'react';
import { numberFormat } from '../../../../assets/utils/utils';

export default function OrderDetails({ visible, setVisible, row }) {

    const { handleCancelPlan, handleAcspetPlan } = useDataGetter(row, setVisible);

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

                                                        <h5 className='text-[#58291E] text-[16px] font-medium'>{order?.presentation?.weight}</h5>

                                                    </div>

                                                    <div className='col-span-4 mb-1'>

                                                        <h5 className='text-[#58291E] text-[16px] font-medium'>{order?.units} Paquete</h5>

                                                    </div>

                                                    <div className='col-span-4 mb-1'>

                                                        <h5 className='text-[#58291E] text-[16px] font-medium'>{numberFormat(order?.total)} €</h5>

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

                    Precio total:
                    <span className='text-[#58291E] ms-3 font-medium'>{numberFormat(row?.total)} €</span>

                </h2>

                <h2 className='col-span-12 '>

                    Portes:
                    <span className='text-[#58291E] ms-3 font-medium'>{row?.shipping}</span>

                </h2>

                <h2 className='col-span-12'>

                    Tienda asignada:
                    <span className='text-[#58291E] ms-3 font-medium'>{row?.coffee_shop?.name}</span>

                </h2>

                {
                    row?.notes
                        ?
                        <Fragment>

                            <h2 className='col-span-12 mt-3'>Nota:</h2>

                            <p className='p-3 border border-[#252525ac] col-span-12 rounded-[5px]'>{row?.notes}</p>

                        </Fragment>
                        :
                        null
                }

                <div className='col-span-12 mt-12' >

                    <h1 className='text-[#252525] mb-4 font-medium text-[18px]'>Dirección de envío</h1>

                    <div className='grid grid-cols-12 gap-5'>

                        <div className='col-span-6 flex items-center'>

                            <h3 className='text-[#252525] font-medium me-4'>Dirección</h3>
                            <h3 className='text-[#252525] font-medium'>{row?.address}</h3>

                        </div>

                        <div className='col-span-6 flex items-center'>

                            <h3 className='text-[#252525] font-medium me-4'>C.P.</h3>
                            <h3 className='text-[#252525] font-medium'>{row?.zip_code}</h3>

                        </div>
                        <div className='col-span-6 flex items-center'>

                            <h3 className='text-[#252525] font-medium me-4'>Nombre</h3>
                            <h3 className='text-[#252525] font-medium'>{row?.name}</h3>

                        </div>
                        <div className='col-span-6 flex items-center'>

                            <h3 className='text-[#252525] font-medium me-4'>Email</h3>
                            <h3 className='text-[#252525] font-medium'>{row?.email}</h3>

                        </div>
                        <div className='col-span-6 flex items-center'>

                            <h3 className='text-[#252525] font-medium me-4'>Teléfono</h3>
                            <h3 className='text-[#252525] font-medium'>{row?.phone}</h3>

                        </div>

                    </div>

                </div>

                <div className='col-span-12 flex items-center justify-between mt-10'>

                    {
                        row?.status === "Pending"
                            ?
                            <Fragment>

                                <button onClick={handleAcspetPlan} className='bg-[#45B8EA] text-white py-4 px-6 text-[20px] rounded-full w-[48%]'>Servir y enviar</button>
                                <button onClick={_ => setVisible(false)} className='bg-[#FF5C34] text-white py-4 px-6 text-[20px] rounded-full w-[48%]'>No servir ni enviar por ahora</button>

                            </Fragment>

                            :
                            <button onClick={_ => setVisible(false)} className='bg-[#45B8EA] text-white py-4 px-6 text-[20px] rounded-full w-[48%] m-auto'>Aceptar</button>
                    }
                </div>

            </div>

        </Dialog>

    )
}
