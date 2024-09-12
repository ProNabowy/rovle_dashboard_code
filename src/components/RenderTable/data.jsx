import { Column } from "primereact/column";
import { useState } from "react";
import { FilterMatchMode } from 'primereact/api';
import { useAppHooks } from "../../hooks/AppHooks";

const useDataGetter = (list) => {

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const { useTableDefaults } = useAppHooks();

    const { selectedEntries, setSelectedEntries, entries } = useTableDefaults(list);

    return {
        selectedEntries,
        setSelectedEntries,
        entries,
        filters,
        onGlobalFilterChange,
        globalFilterValue
    }

}

const data = (columns) => {

    return columns?.map((column, index) => {

        return <Column key={index} field={column?.field} sortable header={column?.header} className={column?.classNames} body={column?.tamplate} />;

    })

}

const FilterFields = [
    'name',
    'province?.name',
    'status',
    'start_date',
    'end_date',
    'email',
    'created_at',
    'updated_at',
    'id',
    'commercial_name',
    'official_name',
    'provider.commercial_name',
    'recurren',
    'post_code',
    'address',
    'city.name',
    'country.name',
    'user.name',
    'user.email',
    'weight',
    'shop_name',
    'card_id',
    'roles.name'
]

export {
    useDataGetter,
    data,
    FilterFields
}