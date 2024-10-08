import PlanForm from '../PlanForm/PlanForm';
import { PageContent } from '../../../../components';
import { useEditPlan } from './data';

export default function EditPlan() {

    const { formik } = useEditPlan();

    return (

        <PageContent title={'Formulario de Plan'} showActions={false}  >

            <PlanForm formik={formik} />

        </PageContent >

    )
}
