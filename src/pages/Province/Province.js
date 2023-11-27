import { PageContent, RenderTable } from '../../components';
import { useSelector } from 'react-redux';
import { columns } from './data';

export default function Province() {

    const province = useSelector(store => store.province);
    return (

        <PageContent
            url={'add-province'}
            title={'All Province'}
            roleKey={'dashboard.provinces.store'}
            PermissionsKey={'Provinces'}
            showActions={true} >


            <RenderTable columns={columns} list={province} />

        </PageContent>

    )
}
