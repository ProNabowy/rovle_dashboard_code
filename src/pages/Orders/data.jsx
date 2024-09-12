import OrderDetails from './components/OrderDetails/OrderDetails';
import { Fragment, useContext, useEffect, useState } from 'react';
import { Delete, Get } from '../../apis/apis';
import Table from '../../assets/utils/table';
import { AppContext } from '../../context/AppContext';
import { TableActions } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { getCookie, numberFormat } from '../../assets/utils/utils';


const tableService = new Table();

const useDataGetter = () => {

    const getUtailty = new Get();

    const [orders, setOrders] = useState([]);

    const { setIsLoading, user } = useContext(AppContext);

    const deleteUtailty = new Delete();

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getOrders()
            .then(response => {
                setOrders(response?.sort((a, b) => {

                    if (a?.status === 'pending' && b?.status !== 'pending') {
                        return -1;
                    } else if (a?.status !== 'pending' && b?.status === 'pending') {
                        return 1;
                    } else {
                        return b?.created_at.localeCompare(a?.created_at);
                    }
                }));
            })
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);


    const nameBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.user?.name}</p>
    };
    const addressBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.delivery_type}</p>
    };

    const useStatusBodyTemplate = (rowData) => {

        const [visible, setVisible] = useState(false);

        const status = {
            received: ' Recibido por el cliente',
            pending: 'pendiente',
            cancelled: "cancelado",
            sending: 'Enviando',
            pending_payment: 'Pendiente de pago',
        }

        return (
            <Fragment>

                <p onClick={_ => setVisible(true)} className={`mb-1 capitalize text-[13px] cursor-pointer underline font-medium ${rowData?.status == 'completed' ? "text-[#28C76F]" : rowData?.status === 'canceld' ? 'text-[red]' : "text-[#C9CC3A]"}`}>{status?.[rowData?.status?.toLowerCase()] || rowData?.status}</p>

                <OrderDetails row={rowData} visible={visible} setVisible={setVisible} />

            </Fragment>
        )
    };

    const priceBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{numberFormat(rowData?.total)}€</p>
    };

    const shop_name_body_template = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.coffee_shop?.name}</p>
    };

    const useActionsBodyTemplate = (rowData) => {

        const isHasDeleteBtn = rowData?.status === 'Pending' || rowData?.status === 'pending_payment';

        const AUTH_TOKEN = getCookie('token');

        return (
            <Fragment>

                {
                    isHasDeleteBtn
                        ?
                        <TableActions
                            path={`/products/plans/edit-plan?id=${rowData?.id}`}
                            handelDeleteFunction={deleteUtailty.cancelPlan}
                            rowData={rowData}
                            deleteKey={'dashboard.orders.destroy'}
                            list={orders}
                            state={setOrders}
                        />
                        :
                        null
                }

                {
                    rowData?.status?.toLowerCase() === 'sending'
                        ?
                        <FontAwesomeIcon onClick={_ => {

                            window.open(`https://rovle.eslamghazy.net/web/orders/${rowData?.id}/order_onetime_code/${rowData?.order_onetime_code}/label`, '_blank');

                            // fetch(
                            //     `https://rovle.eslamghazy.net/web/orders/${rowData?.id}/label`,
                            //     {
                            //         method: "GET",
                            //         headers:{
                            //             "Accept" : "application/pdf",
                            //             "Authorization": AUTH_TOKEN

                            //         }
                            //     }

                            // )
                            // .then( response => response.text())
                            // .then( t => {
                            //     console.log(t);
                            //     var b = new Blob([t], {"type": "application/pdf"});
                            //     var a=document.createElement("A");
                            //     a.download=`etiqueta_${rowData?.id}.pdf`;
                            //     a.href=window.URL.createObjectURL(b);
                            //     a.click();
                            // });

                        }} icon={faPrint} className='text-[var(--primary-color)] cursor-pointer text-[20px]' />
                        :
                        null
                }

            </Fragment>
        )

    };

    const columns = [
        { field: "id", header: "ID", tamplate: tableService.idBodyTemplate },
        { field: "name", header: "Nombre de usuario", tamplate: nameBodyTemplate },
        { field: "address", header: "Dirección", tamplate: addressBodyTemplate },
        { field: "stauts", header: "Estado", tamplate: useStatusBodyTemplate },
        { field: "price", header: "Precio", tamplate: priceBodyTemplate },
        { field: "shop_name", header: "Tienda asignada", tamplate: shop_name_body_template },
        { field: "created_at", header: "Fecha de finalización", tamplate: tableService.startDateBodyTemplate },
        { field: "action", header: "Acción", tamplate: useActionsBodyTemplate },
    ];


    return { orders, columns }
}
export {
    useDataGetter
}