import { PageContent } from '../../../../components';
import { useAddProduct } from './data';
import ProductsForm from '../ProductsForm';

export default function AddProduct() {

    const { formik, clickHandler, } = useAddProduct();

    return (

        <PageContent title={'Product Form'} showActions={false}>
            <ProductsForm
                formik={formik}
                clickHandler={clickHandler}
            />
        </PageContent>

    )
}
