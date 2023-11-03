import { PageContent, RenderTable, TableHeader } from '../../../../components';
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
        selectedEntries,
        setSelectedEntries,
        entries
    } = useDataGetter();
    console.log(subscriptionsList);
    return (

        selectedPlan?.id
            ?
            <PageContent url={'/products/plans/add-plan'} addnewClassNames={'hidden'} title={'Subscriptions'} showActions={true} >

                <TableHeader selectedEntries={selectedEntries} setSelectedEntries={setSelectedEntries} entries={entries} />

                <div className='grid grid-cols-12 gap-5 w-full my-5 px-10'>

                    <div className='col-span-6'>

                        <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Roaster</label>

                        <Dropdown value={selectedRosters && selectedRosters} onChange={(e) => setselectedRosters(e.value)} options={rosters} optionLabel="user.name"
                            placeholder="Select Province" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                    </div>

                    <div className='col-span-6'>

                        <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Plan Name</label>

                        <Dropdown value={selectedPlan && selectedPlan} onChange={(e) => setselectedPlan(e.value)} options={Array.from(plans)} optionLabel="name"
                            placeholder="Select Province" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                    </div>

                </div>

                <RenderTable columns={columns} list={subscriptionsList} selectedEntries={selectedEntries} />

            </PageContent>
            :
            <Navigate to={'/products/plans/subscriptions'} />

    )
}
