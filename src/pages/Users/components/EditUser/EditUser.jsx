import { useHandleAddUserLogic } from './data';
import { PageContent } from '../../../../components';
import UserForm from '../UserForm/UserForm';


export default function EditUser() {

    const { formik, clickHandler } = useHandleAddUserLogic();

    return (

        <PageContent title={'Formulario de usuario'} showActions={false} >

            <UserForm formik={formik} clickHandler={clickHandler} />

        </PageContent>
    )
}
