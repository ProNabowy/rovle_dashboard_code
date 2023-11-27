import { PageContent, RenderTable } from '../../../../components';
import { Dropdown } from 'primereact/dropdown';
import { columns, useDataGetter } from './data';
import { Navigate } from 'react-router-dom';


export default function SizeList() {

    const {
        rosters,
        selectedRosters,
        setselectedRosters,
        sizes
    } = useDataGetter();

    return (

        selectedRosters?.id ?
            <PageContent
                url={'/products/plans/size/list/add-size'}
                title={'Size Management'}
                showActions={true}
                PermissionsKey={'Sizes'}
                roleKey={'dashboard.sizes.store'}
            >

                <div className='w-full my-5 px-10'>

                    <label htmlFor='name-input' className='mb-3 block font-medium text-[#234486]'>Roasters</label>

                    <Dropdown value={selectedRosters} onChange={(e) => setselectedRosters(e.value)} options={rosters} optionLabel="commercial_name"
                        placeholder="Select Province" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

                <RenderTable columns={columns} list={sizes} />

            </PageContent>
            :
            <Navigate to={'/products/plans/size'} />
    )
}
