import OrderDetails from './components/OrderDetails/OrderDetails';
import { Fragment, useContext, useEffect, useState } from 'react';
import { Get } from '../../apis/apis';
import Table from '../../assets/utils/table';
import { AppContext } from '../../context/AppContext';

const tableService = new Table();

const useDataGetter = () => {

    const getUtailty = new Get();

    const [orders, setOrders] = useState([]);

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getOrders().then(response => setOrders(response)).finally(_ => setIsLoading(false));

        return () => { };
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
    { field: "name", header: "Nombre de usuario", tamplate: nameBodyTemplate },
    { field: "address", header: "Dirección", tamplate: addressBodyTemplate },
    { field: "stauts", header: "Estado", tamplate: useStatusBodyTemplate },
    { field: "price", header: "Precio", tamplate: priceBodyTemplate },
    { field: "created_at", header: "Fecha de finalización", tamplate: tableService.startDateBodyTemplate },
];


export {
    columns,
    useDataGetter
}