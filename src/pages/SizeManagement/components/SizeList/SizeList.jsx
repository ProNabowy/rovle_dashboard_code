import { PageContent, RenderTable } from '../../../../components';
import { useDataGetter } from './data';
import { useRef } from 'react';

export default function SizeList() {

    const {
        sizes,
        columns
    } = useDataGetter();

    const tableRef = useRef();

    const exportColumns = sizes.map((item) => {
        return {
            ["Personaje"]: item.name,
            ["Peso"]: item.weight,
            ["Fecha"]: item.updated_at,
        };
    });

    const exportPDFColumns = [
        {
            title: "Personaje",
            dataKey: "name",
        },
        {
            title: "Peso",
            dataKey: "weight",
        },
        {
            title: "Fecha",
            dataKey: "updated_at",
        }
    ]

    return (
        <PageContent
            url={'/products/plans/size/list/add-size'}
            title={'Gestión de tamaño'}
            showActions={true}
            PermissionsKey={'Sizes'}
            roleKey={'dashboard.sizes.store'}
            table={tableRef}
            exportedExcelList={exportColumns}
            list={sizes}
            exportPDFColumns={exportPDFColumns}
        >

            <RenderTable columns={columns} list={sizes} table={tableRef} />

        </PageContent>
    )
}
