import { PageContent } from '../../../../components';
import CoffeeFrom from '../CoffeeFrom/CoffeeFrom';

export default function EditCoffee() {

    return (
        <PageContent title={'Coffee Form'} showActions={false}  >

            <CoffeeFrom asEdit={true} />

        </PageContent>
    )
}

