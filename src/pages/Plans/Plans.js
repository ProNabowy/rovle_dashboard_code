import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter } from './data';


export default function PlansList() {

    const { plans } = useDataGetter();

    return (

        <PageContent
            url={'/products/plans/add-plan'}
            title={'All Plan'}
            showActions={true}
            PermissionsKey={'Plans'}
            roleKey={'dashboard.plans.store'}
        >

            <RenderTable columns={columns} list={plans} />

        </PageContent>

    )
}
