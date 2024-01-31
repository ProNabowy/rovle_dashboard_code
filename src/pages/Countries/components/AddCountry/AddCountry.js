import { PageContent } from '../../../../components';
import CountryForm from '../CountryForm';
import { useDataGetter } from './data';

export default function AddCountry() {

    const { formik, clickHandler } = useDataGetter();

    return (

        <PageContent title={'Formulario de País'} showActions={false}>

            <CountryForm formik={formik} clickHandler={clickHandler} />

        </PageContent>

    )
}
