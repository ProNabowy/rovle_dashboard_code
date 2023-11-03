import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown } from 'primereact/dropdown'

export default function TableHeader({ selectedEntries, setSelectedEntries, entries }) {
    return (
        <div className='flex items-center justify-between px-10 mb-5'>

            <div className='flex items-center'>

                <h3 className='text-[#252525] font-medium me-3'>Show</h3>

                <Dropdown value={selectedEntries} onChange={(e) => setSelectedEntries(e.value)} options={entries} optionLabel="name"
                    placeholder="" className="w-full md:w-14rem" emptyMessage={'Table Is Empty'} />

                <h3 className='text-[#252525] font-medium ms-3'>entries</h3>

            </div>

            <div className='relative min-w-[400px]'>

                <input type='text' placeholder='Search (Ctrl+/)' className='px-10 py-3 rounded-full border w-full' />

                <FontAwesomeIcon icon={faSearch} className='text-[#252525] text-[13px] absolute left-4 top-[50%] translate-y-[-50%]' />

            </div>


        </div>
    )
}
