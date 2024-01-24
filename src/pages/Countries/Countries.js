import { PageContent, RenderTable } from '../../components';
import { useSelector } from 'react-redux';
import { columns } from './data';



export default function Countries() {

    const countries = useSelector(store => store.countries);

    return (

        <PageContent
            PermissionsKey={'Countries'}
            roleKey={'dashboard.countries.store'}
            url={'add-country'}
            title={'All Countries'}
            showActions={true}
            columns={columns}
            list={countries}
            saveName={'countries'}
        >

            <RenderTable columns={columns} list={countries} />

        </PageContent>

    )
}
