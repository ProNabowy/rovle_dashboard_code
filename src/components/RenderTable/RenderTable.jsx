import { DataTable } from 'primereact/datatable';
import { useDataGetter, FilterFields, data } from './data';
import { Dropdown } from 'primereact/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input/Input';
import { Fragment } from 'react';

export default function RenderTable({
    columns,
    list,
    table,
    filterChildern
}) {

    const {
        selectedEntries,
        setSelectedEntries,
        entries,
        filters,
        onGlobalFilterChange,
        globalFilterValue,
    } = useDataGetter(list);

    const showPaginator = list?.length > +selectedEntries?.name;

    return (

        <div className={`relative ${showPaginator ? "" : "pb-10"}`}>

            <div className='flex items-center justify-between flex-wrap p-3 sm:p-0'>

                {filterChildern}

                <div className={`${filterChildern ? "relative sm:me-8 mb-5 w-full sm:w-[400px]" : "relative sm:ms-8 mb-5 w-[90%] m-auto sm:w-[400px]"}`}>

                    <Input
                        type='text'
                        value={globalFilterValue}
                        placeholder={'Búsqueda'}
                        onChange={onGlobalFilterChange}
                        classNames="px-10 py-2 sm:py-3 rounded-md sm:rounded-full w-full border border-[#b3b3b3]"
                    />

                    <FontAwesomeIcon icon={faSearch} className='text-[#252525] text-[13px] absolute left-4 top-[50%] translate-y-[-50%]' />

                </div>

            </div>

            <div ref={table}>

                <DataTable value={list} filters={filters}
                    globalFilterFields={FilterFields}
                    paginator={showPaginator} rows={selectedEntries?.name} dataKey="id"
                    emptyMessage={<h1 className='text-center my-5'>No se encontraron datos</h1>} className='px-2 sm:px-8' >

                    {data(columns)}

                </DataTable>

            </div>
            {
                list?.length
                    ?
                    <div className={`flex items-center w-fit m-auto md:ms-3 lg:ms-0 md:absolute ${showPaginator ? "bottom-2 xl:bottom-0" : "-bottom-5"} left-8`}>

                        <h2 htmlFor="entries-dropdown" className='text-[#252525] font-medium me-3'>Mostrar</h2>

                        {
                            entries?.length < selectedEntries?.name
                                ?
                                <Fragment>

                                    <h3 className='text-[#252525] font-medium'>{entries?.length}</h3>

                                    <h3 className='text-[#252525] font-medium ms-3'>entradas</h3>

                                </Fragment>
                                :
                                <div className="ps-2 !rounded-full">
                                    <Dropdown

                                        value={selectedEntries}
                                        onChange={(e) => setSelectedEntries(e.value)}
                                        options={entries}
                                        optionLabel="name"
                                        placeholder=""
                                        aria-label='entries-dropdown'
                                        inputId="entries-dropdown"
                                        emptyMessage={'La tabla está vacía'}
                                    />
                                    <label htmlFor="entries-dropdown" className='visually-hidden text-[16px] ms-3 text-[#252525] font-medium'>
                                        entradas
                                    </label>
                                </div>
                        }


                    </div>
                    :
                    null
            }

        </div>

    )

}
