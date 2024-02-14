import { useHandleAddUserLogic } from './data';
import { PageContent } from '../../../../components';
import UserForm from '../UserForm';


export default function AddUser() {

    const { formik } = useHandleAddUserLogic();

    return (
        <PageContent title={'Formulario de usuario'} showActions={false} >

            <UserForm formik={formik} />

        </PageContent>
    )
}
