import { PageContent } from '../../components';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import { useDataGetter } from './data';

export default function Subscriptions() {

    const {
        selectedRosters,
        setselectedRosters,
        rosters,
        selectedPlan,
        setselectedPlan,
        plans
    } = useDataGetter();

    return (

        <PageContent title={'Subscriptions'} showActions={false} >

            <form onSubmit={e => e.preventDefault()}>

                <div className='px-10 py-3'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Roaster</label>

                    <Dropdown value={selectedRosters} onChange={(e) => setselectedRosters(e.value)} options={rosters} optionLabel="user.name"
                        placeholder="Select Province" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

                <div className='px-10 py-3'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Plan name</label>

                    <Dropdown value={selectedPlan} onChange={(e) => setselectedPlan(e.value)} options={plans} optionLabel="name"
                        placeholder="Select Plan" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

                <div className='flex items-center justify-end p-10 pb-5'>

                    <Link to={'/products/plans/subscriptions/list'} className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>
                        Show
                    </Link>

                </div>

            </form>


        </PageContent>
    )
}
