import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter } from './data';
import { Dropdown } from 'primereact/dropdown';

const ProviderDropdownContainer = ({ selectedRosters, setselectedRosters, rosters }) => {

    return (
        <div className='w-[50%] mb-6 ms-6'>

            <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Tostador</label>

            <Dropdown filter value={selectedRosters} onChange={(e) => setselectedRosters(e.value)} options={rosters} optionLabel="commercial_name"
                placeholder="Seleccionar proveedor" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

        </div>
    )

}

export default function Orders() {

    const {
        customers,
        roasters,
        selectedRosters,
        setselectedRosters
    } = useDataGetter();

    const tableRef = useRef();

    return (

        <PageContent
            PermissionsKey={'Clientes'}
            title={'Clientes'}
            showActions={true}
            columns={columns}
            list={customers}
            table={tableRef}
            saveName={'Clientes'}
        >

            <RenderTable
                columns={columns}
                list={customers}
                table={tableRef}
                filterChildern={<ProviderDropdownContainer rosters={roasters} selectedRosters={selectedRosters} setselectedRosters={setselectedRosters} />}
            />

        </PageContent>

    )
}
