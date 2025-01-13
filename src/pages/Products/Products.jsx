import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { useDataGetter, } from './data';

export default function ProductsList() {

    const { products, columns } = useDataGetter();

    const tableRef = useRef();

    const exportColumns = products.map((item) => {
        return {
            ["Nombre Productos"]: item.commercial_name,
            ["Codigo"]: item.code,
            ["Descripcion"]: item.description,
            ["Region"]: item.region,
            ["Finca"]: item.farm,
            ["Pupntuacion SCA"]: item.sca_score,
            ["Altitud"]: item.altitude,
            ["Procedimiento"]: item.process,
            ["Grados"]: item.grades,
            ["Propietario"]: item.owner_name,
            ["Puntuacion"]: item.rate,
            ["Numero de puntuaciones"]: item.rates_count,
            ["Presentaciones"]: item.presentations?.map((item) => item.weight).join(', '),
            ["Proveedor"]: item.commercial_name,
            ["Origenes"]: item.origins?.map((item) => item.name).join(', '),
            ["Cafeterias"]: item.coffee_shops?.map((item) => item.name).join(', '),
        };
    });

    const exportPDFColumns = [
        {
            title: "Nombre Productos",
            dataKey: "commercial_name",

        },
        {
            title: "Tostadores",
            dataKey: "provider.commercial_name"
        },
        {
            title: "Tiendas",
            dataKey: "coffee_shops"
        },
        {
            title: "Paquetes",
            dataKey: "presentations"
        },

    ]

    return (

        <PageContent
            url={'add-product/choose-owner'}
            title={'Todos los Productos'}
            showActions={true}
            PermissionsKey={'Products'}
            roleKey={'dashboard.products.store'}
            table={tableRef}
            exportedExcelList={exportColumns}
            list={products}
            exportPDFColumns={exportPDFColumns}
        >

            <RenderTable columns={columns} list={products} table={tableRef} />

        </PageContent>

    )
}
