import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import {
    data,
    idBodyTemplate,
    getCustomers,
    nameBodyTemplate,
    actionsBodyTemplate,
    roasterNameBodyTemplate,
    recurrenBodyTemplate,
    lastDateBodyTemplate,
    startDateBodyTemplate
} from '../data';
import useCustomEffect from '../../../hooks/useCustomEffect';


const CustomerService = {
    getCustomersMedium: function () {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }
};



export default function OfferListTable({ children }) {

    const [customers, setCustomers] = useState(null);
    const [selectedEntries, setSelectedEntries] = useState({ name: 4, code: 4 });
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState(null);
    const { useReplacePagnitToText, useFetchData } = useCustomEffect();
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        });
        setGlobalFilterValue('');
    };


    useFetchData(CustomerService, setCustomers, getCustomers, setLoading, initFilters);


    return (
        <DataTable value={customers} paginator showGridlines rows={10} loading={loading} dataKey="id"

            filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
            emptyMessage="No Products Found." className='px-8'>

            <Column field="id" header="Id" className='!px-[15px]' body={idBodyTemplate} />

            <Column field='name' header="Offer Name" className='' body={nameBodyTemplate} />

            <Column field='roasterName' header="Roaster Name" className='!px-[0px]' body={roasterNameBodyTemplate} />

            <Column field='recurren' header="Recurren" className='!px-[15px]' body={recurrenBodyTemplate} />

            <Column field='startDate' header="Start Date" className='!px-[15px]' body={startDateBodyTemplate} />

            <Column field="lastDate" header="Last Date" className='!px-[15px]' body={lastDateBodyTemplate} />

            <Column field="STATUS" header="Action" className='!px-[15px]' body={actionsBodyTemplate} />


            {children}

        </DataTable>
    )
}
