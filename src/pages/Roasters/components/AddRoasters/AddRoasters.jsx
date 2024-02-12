import { useDataGetter } from './data';
import { PageContent } from '../../../../components';
import RoasterForm from '../RoasterForm';

export default function AddRoasters() {

    const { formik, clickHandler } = useDataGetter();

    return (

        <PageContent title={'Formulario de tostadores'} showActions={false} >

            <RoasterForm formik={formik} clickHandler={clickHandler} isRenderPassword={true} />

        </PageContent>
    )
}
