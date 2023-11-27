import OrderDetails from './components/OrderDetails/OrderDetails';
import { Fragment, useEffect, useState } from 'react';
import { Orders } from '../../apis/apis';
import Table from '../../assets/js/table';

const tableService = new Table();

const useDataGetter = () => {

    const ordersUtailty = new Orders();

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        ordersUtailty.fetchOrders(setOrders);

    }, []);
    return { orders }
}

const nameBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.user?.name}</p>
};
const addressBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.delivery_type}</p>
};

const useStatusBodyTemplate = (rowData) => {

    const status = rowData?.status == 0 ? "Received" : "Pending";

    const [visible, setVisible] = useState(false);

    return (
        <Fragment>

            <p onClick={_ => setVisible(true)} className={`mb-1 capitalize text-[13px] cursor-pointer underline font-medium ${rowData?.status == 0 ? "text-[#28C76F]" : "text-[#C9CC3A]"}`}>{status}</p>

            <OrderDetails row={rowData} visible={visible} setVisible={setVisible} />

        </Fragment>
    )
};

const priceBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.price}Euro</p>
};

const columns = [
    { field: "id", header: "ID", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "User name", tamplate: nameBodyTemplate },
    { field: "address", header: "Address", tamplate: addressBodyTemplate },
    { field: "stauts", header: "Status", tamplate: useStatusBodyTemplate },
    { field: "price", header: "Price", tamplate: priceBodyTemplate },
    { field: "created_at", header: "Last Date", tamplate: tableService.startDateBodyTemplate },
];


export {
    columns,
    useDataGetter
}