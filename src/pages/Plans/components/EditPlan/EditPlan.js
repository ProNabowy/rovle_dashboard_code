import PlanForm from '../PlanForm/PlanForm';
import { PageContent } from '../../../../components';
import { useEditPlan } from './data';

export default function EditPlan() {

    const { formik, clickHandler } = useEditPlan();

    return (

        <PageContent title={'Plan Form'} showActions={false}  >

            <PlanForm formik={formik} clickHandler={clickHandler} />

        </PageContent >

    )
}
