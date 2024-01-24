import { PageContent, RenderTable } from '../../components';
import { columns, useDataGetter } from './data';


export default function Cities() {

    const { cities } = useDataGetter();

    return (

        <PageContent
            url={'add-city'}
            title={'City Form'}
            showActions={true}
            PermissionsKey={'Cities'}
            roleKey={'dashboard.cities.store'}
            columns={columns}
            list={cities}
            saveName={'Cities'}
        >

            <RenderTable list={cities} columns={columns} />

        </PageContent>

    )
}
