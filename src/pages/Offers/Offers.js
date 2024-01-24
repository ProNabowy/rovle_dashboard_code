import { PageContent } from '../../components';
import React, { Fragment, useState } from "react";
import OfferListTable from './OffersListTable/OfferListTable';
import { columns, useDataGetter } from './data';
import TableHeader from './TableHeader/TableHeader';
import { useSelector } from 'react-redux';

export default function OfferList() {

    const [ingredients, setIngredients] = useState([0]);

    const { offers, level_one, level_two, level_three } = useDataGetter();

    const offeers = useSelector(store => store.offeers);

    return (

        <PageContent
            url={'add-offer'}
            title={'All Offers'}
            showActions={true}
            PermissionsKey={'Passports'}
            roleKey={'dashboard.passports.store'}
            columns={columns}
            list={offeers}
            saveName={'Offers'}
        >

            <TableHeader data={offers} ingredients={ingredients} setIngredients={setIngredients} />

            {
                ingredients.includes(0) || ingredients.includes(1)
                    ?
                    <OfferListTable data={level_one} />
                    :
                    null
            }

            {
                ingredients.includes(0) || ingredients.includes(2)
                    ?
                    <Fragment>

                        <div className='text-center bg-[#FFF8F4] p-3 text-[#58291E] font-medium text-[25px] my-10'>Level 2</div>

                        <OfferListTable data={level_two} />

                    </Fragment>
                    :
                    null
            }

            {
                ingredients.includes(0) || ingredients.includes(3)
                    ?
                    <Fragment>

                        <div className='text-center bg-[#FFF8F4] p-3 text-[#58291E] font-medium text-[25px] my-10'>Level 3</div>

                        <OfferListTable data={level_three} />

                    </Fragment>
                    :
                    null
            }

        </PageContent>

    )
}
