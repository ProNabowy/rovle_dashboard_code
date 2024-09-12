import { PageContent, } from '../../../../../components';
import ProductsForm from '../ProductsForm';
import { useEditProduct } from './data';


export default function EditProduct() {

    const { formik } = useEditProduct();

    return (

        <PageContent title={'Formulario de Producto'} showActions={false}>

            <ProductsForm formik={formik} />

        </PageContent>

    )
}
