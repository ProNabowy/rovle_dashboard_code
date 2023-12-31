import { PageContent, } from '../../../../components';
import ProductsForm from '../ProductsForm';
import { useEditProduct } from './data';


export default function EditProduct() {

    const { formik, clickHandler } = useEditProduct();

    return (

        <PageContent title={'Product Form'} showActions={false}>

            <ProductsForm formik={formik} clickHandler={clickHandler} />

        </PageContent>

    )
}
