import { PageContent } from '../../components';
import React, { Fragment, useRef, useState } from "react";
import OfferListTable from './OffersListTable/OfferListTable';
import { useDataGetter } from './data';
import TableHeader from './TableHeader/TableHeader';

export default function OfferList() {

    const [ingredients, setIngredients] = useState([0]);

    const tableRef = useRef();

    const {
        offers,
        level_one,
        level_two,
        level_three,
        columns
    } = useDataGetter();
    return (

        <PageContent
            url={'add-offer'}
            title={'Todas las ofertas'}
            showActions={true}
            PermissionsKey={'Passports'}
            roleKey={'dashboard.passports.store'}
            columns={columns}
            table={tableRef}
            list={offers}
            saveName={'Offers'}
        >

            <TableHeader
                data={offers}
                ingredients={ingredients}
                setIngredients={setIngredients}
                columns={columns}
            />

            {
                ingredients.includes(0) || ingredients.includes(1)
                    ?
                    <OfferListTable
                        data={level_one}
                        table={tableRef}
                        columns={columns}
                    />
                    :
                    null
            }

            {
                ingredients.includes(0) || ingredients.includes(2)
                    ?
                    <Fragment>

                        <div className='text-center bg-[#FFF8F4] p-3 text-[#58291E] font-medium text-[25px] my-10'>Nivel 2</div>

                        <OfferListTable
                            data={level_two}
                            columns={columns}
                            table={tableRef}
                        />

                    </Fragment>
                    :
                    null
            }

            {
                ingredients.includes(0) || ingredients.includes(3)
                    ?
                    <Fragment>

                        <div className='text-center bg-[#FFF8F4] p-3 text-[#58291E] font-medium text-[25px] my-10'>Nivel 3</div>

                        <OfferListTable
                            columns={columns}
                            data={level_three}
                            table={tableRef}
                        />

                    </Fragment>
                    :
                    null
            }

        </PageContent>

    )
}
