import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { useDataGetter } from './data';


export default function PlansList() {

    const { plans, columns } = useDataGetter();

    const tableRef = useRef();

    const exportColumns = plans.map((item) => {
        return {
            ["Nombre Planes"]: item.name,
            ["Nombre del Tostador"]: item.provider.commercial_name,
            ["Estado"]: item.status,
            ["Tallas"]: item.sizes?.map((item) => `${item.size.name} = ${item.price}`).join(', '),
            ["Fecha de inicio"]: item.updated_at,
        };
    });

    const exportPDFColumns = [
        {
            title: "Nombre Planes",
            dataKey: "name",
        },
        {
            title: "Nombre del Tostador",
            dataKey: "provider.commercial_name",
        },
        {
            title: "Estado",
            dataKey: "status",
        },
        {
            title: "Tallas",
            dataKey: "sizes",
        },
    ]

    return (

        <PageContent
            url={'/products/plans/add-plan'}
            title={'Todos los Planes'}
            showActions={true}
            PermissionsKey={'Plans'}
            roleKey={'dashboard.plans.store'}
            table={tableRef}
            exportedExcelList={exportColumns}
            list={plans}
            exportPDFColumns={exportPDFColumns}
        >

            <RenderTable columns={columns} list={plans} table={tableRef} />

        </PageContent>

    )
}
