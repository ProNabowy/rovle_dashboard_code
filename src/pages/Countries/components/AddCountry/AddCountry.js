import { PageContent } from '../../../../components';
import NotFound from '../../../NotFound/NotFound';
import CountryForm from '../CountryForm';
import { useDataGetter } from './data';

export default function AddCountry() {

    const { formik, clickHandler } = useDataGetter();

    return (

        <PageContent title={'Country Form'} showActions={false}>

            <CountryForm formik={formik} clickHandler={clickHandler} />

        </PageContent>

    )
}
