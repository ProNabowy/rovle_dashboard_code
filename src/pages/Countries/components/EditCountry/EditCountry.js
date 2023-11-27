import { PageContent } from '../../../../components';
import CountryForm from '../CountryForm';
import { useDataGetter } from './data';

export default function EditCountry() {

    const { formik, clickHandler } = useDataGetter();

    return (

        <PageContent title={'Country Form'} showActions={false}>

            <CountryForm formik={formik} clickHandler={clickHandler} />

        </PageContent>

    )
}
