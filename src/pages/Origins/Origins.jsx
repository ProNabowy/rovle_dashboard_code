import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { useDataGetter } from './data';


export default function OriginsList() {

    const { origins, columns } = useDataGetter();

    const tableRef = useRef();

    const exportColumns = origins.map((item) => {
        return {
            ["Nombre"]: item.name,
            ["Introducido por"]: item.provider.commercial_name,
            ["Fecha"]: item.created_at,
        };
    });

    const exportPDFColumns = [
        {
            title: "Nombre",
            dataKey: "name",
        },
        {
            title: "Introducido por",
            dataKey: "provider.commercial_name",
        },
        {
            title: "Fecha",
            dataKey: "created_at",
        },
    ]


    return (
        <PageContent
            url={'add-origin'}
            title={'Todos los Orígenes'}
            PermissionsKey={'Origins'}
            roleKey={'dashboard.origins.store'}
            showActions={true}
            table={tableRef}
            exportedExcelList={exportColumns}
            list={origins}
            exportPDFColumns={exportPDFColumns}
        >

            <RenderTable columns={columns} list={origins} table={tableRef} />

        </PageContent>
    )
}
