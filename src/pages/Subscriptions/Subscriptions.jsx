import { PageContent } from '../../components';
import { Dropdown } from 'primereact/dropdown';
import { useDataGetter } from './data';

export default function Subscriptions() {

    const {
        selectedRosters,
        setselectedRosters,
        rosters,
        selectedPlan,
        setselectedPlan,
        plans,
        handleShowButton,
        provider
    } = useDataGetter();

    return (

        <PageContent title={'Suscripciones'} showActions={false} >

            <form onSubmit={e => e.preventDefault()}>

                {
                    !provider?.id
                        ?
                        <div className='px-10 py-3'>

                            <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Tostador</label>

                            <Dropdown filter value={selectedRosters} onChange={(e) => setselectedRosters(e.value)} options={rosters} optionLabel="commercial_name"
                                placeholder="Seleccionar proveedor" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                        </div>
                        :
                        null
                }

                <div className='px-10 py-3'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Plan name</label>

                    <Dropdown filter value={selectedPlan} onChange={(e) => setselectedPlan(e.value)} options={plans} optionLabel="name"
                        placeholder="Seleccionar plan" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

                <div className='flex items-center justify-end p-10 pb-5'>

                    <button onClick={handleShowButton} className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>
                        Mostrar
                    </button>

                </div>

            </form>


        </PageContent>
    )
}
