import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter } from './data';
import { Dropdown } from 'primereact/dropdown';

const ProviderDropdownContainer = ({ selectedRosters, setselectedRosters, rosters }) => {

    return (
        <div className='w-full sm:w-[50%] mb-6 sm:ms-6'>

            <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Tostador</label>

            <Dropdown filter value={selectedRosters}
                emptyFilterMessage="No hay opciones disponibles"
                emptyMessage="No hay opciones disponibles"
                onChange={(e) => setselectedRosters(e.value)} options={rosters} optionLabel="commercial_name"
                placeholder="Seleccionar proveedor" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

        </div>
    )

}


export default function Customers() {

    const {
        customers,
        roasters,
        selectedRosters,
        setselectedRosters
    } = useDataGetter();

    const tableRef = useRef();

    const exportColumns = customers.map((item) => {
        return {
            ["Nombre"]: item.name,
            ["Correo electrónico"]: item.email,
            ["Teléfono"]: item.phone,
            ["Ubicaciones"]: item.address,
            ["Fecha de finalización"]: item.created_at,
        };
    });

    const exportPDFColumns = [
        {
            title: "Nombre",
            dataKey: "name",
        },
        {
            title: "Correo electrónico",
            dataKey: "email",
        },
        {
            title: "Teléfono",
            dataKey: "phone",
        },
        {
            title: "Ubicaciones",
            dataKey: "address",
        },
        {
            title: "Fecha de finalización",
            dataKey: "created_at",
        },
    ]

    return (

        <PageContent
            PermissionsKey={'Clientes'}
            title={'Clientes'}
            showActions={true}
            table={tableRef}
            exportedExcelList={exportColumns}
            list={customers}
            exportPDFColumns={exportPDFColumns}
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
