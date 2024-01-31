import { PageContent } from '../../../../components';
import { useDataGetter } from './data';
import OffeerForm from '../OffeerForm';


export default function AddOffer() {

    const { formik, clickHandler } = useDataGetter();

    return (
        <PageContent title={'Formulario de oferta'} showActions={false} >
            <OffeerForm formik={formik} clickHandler={clickHandler} />
        </PageContent>
    )
}
