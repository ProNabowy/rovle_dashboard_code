import { Dropdown } from 'primereact/dropdown';
import { RenderPackages } from './components';
import { useAddPackage } from './data';
import { Link } from 'react-router-dom';

export default function AddPackageByDropdown({
    formik,
    options,
    optionLabel,
    classNames,
    placeholder,
    label,
    inputLabel,
    hasAddButton,
    inputPlaceholder
}) {

    const {
        inputWeightRef,
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        removePackage,
        selectedSize,
        setSelectedSize,

    } = useAddPackage(formik, options);

    return (
        <div className={`rounded-[20px] mt-20 border border-[#252525] p-[32px] grid grid-cols-12 gap-10 ${classNames}`}>

            <form onSubmit={e => e.preventDefault()} className='col-span-6'>


                <div className='mb-8'>

                    {
                        hasAddButton
                            ?
                            <div className='flex items-center justify-between'>

                                <h2 className='text-[18px] text-[#252525] font-medium'>Talla</h2>

                                <Link to={'/products/plans/size/list/add-size'} className='flex items-center cursor-pointer'>

                                    <h2 className='font-medium underline text-[#45B8EA] me-3'>Añadir Talla</h2>

                                </Link>

                            </div>
                            :
                            <label className='text-[18px] text-[#252525] font-medium'>{label}</label>
                    }

                    <Dropdown
                        ref={inputWeightRef}
                        value={selectedSize}
                        onChange={e => {
                            setAddNewPackage(prev => ({ ...prev, size_id: e.target.value?.id }));
                            setSelectedSize(e.value)
                        }}
                        options={options} optionLabel={optionLabel || "name"}
                        placeholder={placeholder || "Seleccionar Talla"} className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                </div>

                <div className='mb-8'>

                    <label htmlFor={'PriceEuro'} className='text-[18px] text-[#252525] font-medium'>{inputLabel}</label>

                    <input ref={inputPriceRef} onChange={e => setAddNewPackage(prev => ({ ...prev, price: e.target.value }))} type='number' id={'PriceEuro'} className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={inputPlaceholder} />

                </div>

                <button type='button' onClick={handelAddNewPackage} className='bg-[#58291E] text-[20px] text-center text-white font-medium w-full py-[16px] px-[24px] rounded-full'>Añadir Paquete</button>

            </form>

            <RenderPackages formik={formik} removePackage={removePackage} />

        </div>
    )
} 