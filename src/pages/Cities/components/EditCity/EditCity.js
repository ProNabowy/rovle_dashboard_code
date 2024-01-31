import { PageContent } from '../../../../components'
import { useDataGetter } from "./data";
import CityForm from '../CityForm';


export default function EditCity() {

    const { formik, clickHandler } = useDataGetter();

    return (

        <PageContent title={'Formulario de Ciudad'} showActions={false}>

            <CityForm formik={formik} clickHandler={clickHandler} />

        </PageContent>

    )
}
