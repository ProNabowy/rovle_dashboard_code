import { useContext, useEffect, useState } from 'react';
import { Get } from '../../apis/apis';
import Table from '../../assets/utils/table';
import { AppContext } from '../../context/AppContext';

const tableService = new Table();

const useDataGetter = () => {

    const getUtailty = new Get();

    const [customers, setCustomers] = useState([]);

    const [selectedRosters, setselectedRosters] = useState({});

    const { setIsLoading } = useContext(AppContext);

    const [roasters, setRoasters] = useState([]);

    useEffect(() => {

        setIsLoading(true);

        getUtailty.getCustomers()
            .then(response => setCustomers(response))
            .then(_ => getUtailty.getRoasters().then(response => setRoasters(response)))
            .finally(_ => setIsLoading(false));

        return () => { };
    }, []);

    // Filter Clients By Provider Id
    useEffect(() => {

        if (selectedRosters?.id) {

            setIsLoading(true);

            getUtailty.getCustomers(`?provider_id=${selectedRosters?.id}`)
                .then(response => setCustomers(response))
                .finally(_ => setIsLoading(false));

        }

        return _ => { };
    }, [selectedRosters]);

    return {
        customers,
        roasters,
        selectedRosters,
        setselectedRosters
    }
}

const phoneBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.phone}</p>
};
const addressBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.addresses?.[0]?.name}</p>
};


const columns = [
    { field: "id", header: "ID", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "Nombre", tamplate: tableService.nameBodyTemplate },
    { field: "email", header: "Correo electrónico", tamplate: tableService.emailBodyTemplate },
    { field: "phone", header: "Teléfono", tamplate: phoneBodyTemplate },
    { field: "address", header: "Ubicaciones", tamplate: addressBodyTemplate },
    { field: "created_at", header: "Fecha de finalización", tamplate: tableService.startDateBodyTemplate },
];


export {
    columns,
    useDataGetter
}