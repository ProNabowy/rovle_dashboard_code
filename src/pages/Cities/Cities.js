import { PageContent, RenderTable } from '../../components';
import { useSelector } from 'react-redux';
import { columns } from './data';


export default function Cities() {

    const cities = useSelector(store => store.cities);

    return (

        <PageContent
            url={'add-city'}
            title={'City Form'}
            showActions={true}
            PermissionsKey={'Cities'}
            roleKey={'dashboard.cities.store'}
        >

            <RenderTable list={cities} columns={columns} />

        </PageContent>

    )
}
