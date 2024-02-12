import { PageContent } from '../../../../components';
import PermissionsForm from '../PermissionsForm/PermissionsForm';



export default function AddPermissions() {

    return (

        <PageContent title={'Formulario de Permisos'} showActions={false}>

            <PermissionsForm asEdit={false} />

        </PageContent>

    )
}
