import { PageContent } from '../../../../components';
import CoffeeFrom from '../CoffeeFrom/CoffeeFrom';

export default function EditCoffee() {

    return (
        <PageContent title={'Formulario de Cafetería'} showActions={false}  >

            <CoffeeFrom asEdit={true} />

        </PageContent>
    )
}

