import { PageContent, RenderTable } from '../../../../components';
import { Dropdown } from 'primereact/dropdown';
import { columns } from './data';
import { Navigate } from 'react-router-dom';
import { useDataGetter } from '../../data';


export default function SubscriptionsList() {

    const {
        selectedRosters,
        setselectedRosters,
        rosters,
        selectedPlan,
        setselectedPlan,
        subscriptionsList,
        plans,
        provider
    } = useDataGetter();

    return (

        selectedPlan?.id
            ?
            <PageContent
                url={'/products/plans/add-plan'}
                addnewClassNames={'hidden'}
                title={'Suscripciones'}
                showActions={true}
                columns={columns}
                list={subscriptionsList}
                saveName={'Subscriptions'}
            >

                <div className='grid grid-cols-12 gap-5 w-full my-5 px-10'>

                    {
                        !provider?.provider?.id
                            ?
                            <div className='col-span-6'>

                                <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Tostador</label>

                                <Dropdown value={selectedRosters && selectedRosters} onChange={(e) => setselectedRosters(e.value)} options={rosters} optionLabel="commercial_name"
                                    placeholder="Seleccionar proveedor" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                            </div>
                            :
                            null
                    }

                    <div className={`${provider?.provider?.id ? "col-span-12" : "col-span-6"}`}>

                        <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Nombre del plan</label>

                        <Dropdown value={selectedPlan && selectedPlan} onChange={(e) => setselectedPlan(e.value)} options={Array.from(plans)} optionLabel="name"
                            placeholder="Seleccionar Plan" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                    </div>

                </div>

                <RenderTable columns={columns} list={subscriptionsList} />

            </PageContent>
            :
            <Navigate to={'/products/plans/subscriptions'} />

    )
}
