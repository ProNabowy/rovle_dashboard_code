import { PageContent, RenderTable } from '../../components';
import { Dropdown } from 'primereact/dropdown';
import { useDataGetter, columns } from './data';
import { useRef } from 'react';

export default function Subscriptions() {

    const {
        selectedRosters,
        setselectedRosters,
        rosters,
        selectedPlan,
        setselectedPlan,
        plans,
        provider,
        subscriptionsList,
    } = useDataGetter();

    const tableRef = useRef();

    const exportColumns = subscriptionsList.map((item) => {
        return {
            ["Nombre"]: item.name,
            ["Dirección"]: item.address,
            ["Estado"]: item.status,
            ["Paquete"]: `${item?.plan_size?.size?.weight}g = ${item?.plan_size?.price} Euro`,
        };
    });

    const exportPDFColumns = [
        {
            title: "Nombre",
            dataKey: "name",
        },
        {
            title: "Dirección",
            dataKey: "address",
        },
        {
            title: "Estado",
            dataKey: "status",
        }
    ]


    return (

        <PageContent
            url={'/products/plans/add-plan'}
            addnewClassNames={'hidden'}
            title={'Suscripciones'}
            showActions={true}
            table={tableRef}
            exportedExcelList={exportColumns}
            list={subscriptionsList}
            exportPDFColumns={exportPDFColumns}
        >

            <div className='grid grid-cols-12 gap-5 w-full my-3 sm:my-5 px-3 sm:px-10'>

                {
                    !provider?.id
                        ?
                        <div className='col-span-12 sm:col-span-6'>

                            <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Tostador</label>

                            <Dropdown emptyFilterMessage="No hay opciones disponibles"
                                emptyMessage="No hay opciones disponibles" filter value={selectedRosters && selectedRosters} onChange={(e) => setselectedRosters(e.value)} options={rosters} optionLabel="commercial_name"
                                placeholder="Seleccionar proveedor" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                        </div>
                        :
                        null
                }

                <div className={`${provider?.id ? "col-span-12" : "col-span-12 sm:col-span-6"}`}>

                    <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Nombre del plan</label>

                    <Dropdown emptyFilterMessage="No hay opciones disponibles"
                        emptyMessage="No hay opciones disponibles" filter value={selectedPlan && selectedPlan} onChange={(e) => setselectedPlan(e.value)} options={Array.from(plans)} optionLabel="name"
                        placeholder="Seleccionar Plan" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

            </div>

            <RenderTable columns={columns} list={subscriptionsList} table={tableRef} />

        </PageContent>

    )
}
