import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { useDataGetter } from './data';


export default function Orders() {

    const { orders, columns } = useDataGetter();

    const tableRef = useRef();

    const exportColumns = orders.map((item) => {
        return {
            ["Nombre de usuario"]: item.name,
            ["Dirección"]: item.delivery_type,
            ["Estado"]: item.status,
            ["Tienda asignada"]: item.coffee_shop?.name,
            ["Fecha de finalización"]: item.created_at,
        };
    });

    const exportPDFColumns = [
        {
            title: "Nombre de usuario",
            dataKey: "name",
        },
        {
            title: "Dirección",
            dataKey: "delivery_type",
        },
        {
            title: "Estado",
            dataKey: "status",
        },
        {
            title: "Fecha de finalización",
            dataKey: "created_at",
        },
    ]

    return (

        <PageContent
            PermissionsKey={'Orders'}
            roleKey={'dashboard.orders.store'}
            title={'Listado de pedidos'}
            showActions={true}
            table={tableRef}
            exportedExcelList={exportColumns}
            list={orders}
            exportPDFColumns={exportPDFColumns}
        >

            <RenderTable columns={columns} list={orders} table={tableRef} />

        </PageContent>

    )
}
