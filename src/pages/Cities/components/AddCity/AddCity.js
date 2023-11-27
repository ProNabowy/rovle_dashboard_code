import { PageContent } from '../../../../components'
import { useDataGetter } from "./data";
import CityForm from '../CityForm';


export default function AddCity() {

    const { formik, clickHandler } = useDataGetter();

    return (

        <PageContent title={'City Form'} showActions={false}>

            <CityForm formik={formik} clickHandler={clickHandler} />

        </PageContent>

    )
}
