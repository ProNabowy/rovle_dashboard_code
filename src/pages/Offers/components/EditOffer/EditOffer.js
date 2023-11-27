import { PageContent } from '../../../../components';
import { useDataGetter } from './data';
import OffeerForm from '../OffeerForm';


export default function EditOffer() {

    const { formik, clickHandler } = useDataGetter();

    return (
        <PageContent title={'Offer Form'} showActions={false} >
            <OffeerForm formik={formik} clickHandler={clickHandler} />
        </PageContent>
    )
}
