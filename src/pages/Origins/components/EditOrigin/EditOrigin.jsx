import { PageContent } from '../../../../components';
import { useDataGetter } from './data';
import OriginForm from '../OriginForm/OriginForm';


export default function EditOrigin() {

  const {
    formik,
    clickHandler
  } = useDataGetter();

  return (

    <PageContent
      title={'Formulario de Orígenes'}
      showActions={false}
      PermissionsKey={'Origins'}
      roleKey={'Edit'}    >

      <OriginForm
        clickHandler={clickHandler}
        formik={formik}
      />

    </PageContent>
  )
}
