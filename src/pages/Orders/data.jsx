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

    return { orders }
}

const nameBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.user?.name}</p>
};
const addressBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.delivery_type}</p>
};

const useStatusBodyTemplate = (rowData) => {

    const [visible, setVisible] = useState(false);

    return (
        <Fragment>

            <p onClick={_ => setVisible(true)} className={`mb-1 capitalize text-[13px] cursor-pointer underline font-medium ${rowData?.status == 'completed' ? "text-[#28C76F]" : rowData?.status === 'canceld' ? 'text-[red]' : "text-[#C9CC3A]"}`}>{rowData?.status}</p>

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