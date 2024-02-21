import { PageContent } from '../../../../components';
import CoffeeFrom from '../CoffeeFrom/CoffeeFrom';

export default function AddCoffee({ stateList }) {

    return (
        <PageContent title={'Formulario de Cafetería'} showActions={false}  >

            <CoffeeFrom stateList={stateList} />

        </PageContent>
    )
}

