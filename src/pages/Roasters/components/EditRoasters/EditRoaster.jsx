import { useDataGetter } from './data';
import { PageContent } from '../../../../components';
import RoasterForm from '../RoasterForm';


export default function EditRoaster() {

    const { formik, clickHandler } = useDataGetter();

    return (

        <PageContent title={'Formulario de tostadores'} showActions={false} >

            <RoasterForm formik={formik} clickHandler={clickHandler} />

        </PageContent>
    )
}
