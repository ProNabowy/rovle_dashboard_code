import { useAddPlan } from './data';
import { PageContent } from '../../../../components';
import PlanForm from '../PlanForm/PlanForm';


export default function AddPlan() {

    const { formik, clickHandler } = useAddPlan();

    return (

        <PageContent title={'Formulario de Plan'} showActions={false}  >

            <PlanForm formik={formik} clickHandler={clickHandler} />

        </PageContent >
    )
}
