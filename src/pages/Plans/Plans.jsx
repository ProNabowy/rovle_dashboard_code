import { useRef } from 'react';
import { PageContent, RenderTable } from '../../components';
import { useDataGetter } from './data';


export default function PlansList() {

    const { plans, columns } = useDataGetter();

    const tableRef = useRef();

    return (

        <PageContent
            url={'/products/plans/add-plan'}
            title={'Todos los Planes'}
            showActions={true}
            PermissionsKey={'Plans'}
            roleKey={'dashboard.plans.store'}
            columns={columns}
            table={tableRef}
            list={plans}
            saveName={'Plans'}
        >

            <RenderTable columns={columns} list={plans} table={tableRef} />

        </PageContent>

    )
}
