import { PageContent, RenderTable } from '../../../../components';
import { Dropdown } from 'primereact/dropdown';
import { columns, useDataGetter } from './data';

export default function SizeList() {

    const {
        rosters,
        selectedRosters,
        setselectedRosters,
        sizes,
        provider
    } = useDataGetter();

    return (
        <PageContent
            url={'/products/plans/size/list/add-size'}
            title={'Gestión de tamaño'}
            showActions={true}
            PermissionsKey={'Sizes'}
            roleKey={'dashboard.sizes.store'}
            columns={columns}
            list={sizes}
            saveName={'Sizes'}
        >

            {
                !provider?.id
                    ?
                    <div className='w-full my-5 px-10'>

                        <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Tostadors</label>

                        <Dropdown value={selectedRosters} onChange={(e) => setselectedRosters(e.value)} options={rosters} optionLabel="commercial_name"
                            placeholder="Seleccionar Tostadors" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                    </div>
                    :
                    null
            }

            <RenderTable columns={columns} list={sizes} />

        </PageContent>
    )
}
