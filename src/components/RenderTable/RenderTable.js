import { DataTable } from 'primereact/datatable';
import { useDataGetter, FilterFields, data } from './data';
import { Dropdown } from 'primereact/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function RenderTable({
    columns,
    list
}) {

    const {
        selectedEntries,
        setSelectedEntries,
        entries,
        filters,
        onGlobalFilterChange,
        globalFilterValue
    } = useDataGetter(list);

    const showPaginator = list?.length > +selectedEntries?.name;

    return (

        <div className={`relative ${showPaginator ? "" : "pb-10"}`}>

            <div className='relative ms-8 mb-5 w-[400px]'>

                <input type='text' placeholder='Search (Ctrl+/)' value={globalFilterValue} onChange={onGlobalFilterChange} className='px-10 py-3 rounded-full border w-full' />

                <FontAwesomeIcon icon={faSearch} className='text-[#252525] text-[13px] absolute left-4 top-[50%] translate-y-[-50%]' />

            </div>

            <DataTable DataTable value={list} filters={filters}
                globalFilterFields={FilterFields}
                paginator={showPaginator} rows={selectedEntries?.name} dataKey="id"
                emptyMessage={<h1 className='text-center my-5'>No Data Found</h1>} className='px-8' >

                {data(columns)}

            </DataTable>

            {
                list?.length
                    ?
                    <div className={`flex items-center w-fit absolute ${showPaginator ? "bottom-5" : "-bottom-5"} left-8`}>

                        <h3 className='text-[#252525] font-medium me-3'>Show</h3>

                        {
                            entries?.length < selectedEntries?.name
                                ?
                                <h2 className='text-[#252525] font-medium'>{entries?.length}</h2>
                                :
                                <Dropdown value={selectedEntries} onChange={(e) => setSelectedEntries(e.value)} options={entries} optionLabel="name"
                                    placeholder="" className="w-[89px] ps-2 !rounded-full" emptyMessage={'Table Is Empty'} />
                        }

                        <h3 className='text-[#252525] font-medium ms-3'>entries</h3>

                    </div>
                    :
                    null
            }

        </div>

    )

}
