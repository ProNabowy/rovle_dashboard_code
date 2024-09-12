import { useDataGetter } from './data';
import { PageContent } from '../../../../components';
import RoasterForm from '../RoasterForm';

export default function AddRoasters() {

    const { formik } = useDataGetter();

    return (

        <PageContent title={'Formulario de tostadores'} showActions={false} >

            <RoasterForm formik={formik} isRenderPassword={true} />

        </PageContent>
    )
}
