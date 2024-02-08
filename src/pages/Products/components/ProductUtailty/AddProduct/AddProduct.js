import { PageContent } from '../../../../../components';
import { useAddProduct } from './data';
import ProductsForm from '../ProductsForm';

export default function AddProduct() {

    const { formik } = useAddProduct();

    return (

        <PageContent title={'Formulario de Producto'} showActions={false}>
            <ProductsForm
                formik={formik}
            />
        </PageContent>

    )
}
