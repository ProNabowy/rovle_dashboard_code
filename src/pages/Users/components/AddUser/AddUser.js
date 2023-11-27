import { useHandleAddUserLogic } from './data';
import { PageContent } from '../../../../components';
import UserForm from '../UserForm';


export default function AddUser() {

    const { formik, clickHandler } = useHandleAddUserLogic();

    return (

        <PageContent title={'User Form'} showActions={false} >

            <UserForm formik={formik} clickHandler={clickHandler} renderPassword={true} />

        </PageContent>
    )
}
