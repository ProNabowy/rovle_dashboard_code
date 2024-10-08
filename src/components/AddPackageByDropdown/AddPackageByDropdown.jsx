import { Dropdown } from 'primereact/dropdown';
import { RenderPackages } from './components';
import { useAddPackage } from './data';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';

export default function AddPackageByDropdown({
    formik,
    optionLabel,
    classNames,
    placeholder,
    label,
    inputLabel,
    hasAddButton,
    formikKey,
    inputPlaceholder
}) {

    const {
        inputWeightRef,
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        removePackage,
        selectedSize,
        options,
        setSelectedSize,

    } = useAddPackage(formik, formikKey);

    return (
        <div className={`rounded-[20px] mt-20 border border-[#252525] p-3 sm:p-[32px] grid grid-cols-12 gap-3 md:gap-10 ${classNames}`}>

            <form onSubmit={e => e.preventDefault()} autoComplete='off' className='col-span-12 md:col-span-6'>

                <div className='mb-8'>

                    {
                        hasAddButton
                            ?
                            <div className='flex items-center justify-between'>

                                <h2 className='label'>Talla</h2>

                                <Link to={'/products/plans/size/list/add-size'} className='flex items-center cursor-pointer'>

                                    <h2 className='font-medium underline text-[#45B8EA] me-3'>Añadir Talla</h2>

                                </Link>

                            </div>
                            :
                            <label className='label'>{label}</label>
                    }

                    <Dropdown
                        ref={inputWeightRef}
                        value={selectedSize}
                        filter
                        onChange={e => {
                            setAddNewPackage(prev => ({ ...prev, size_id: e.target.value?.id, weight: e.target.value?.weight, name: e.target.value?.name }));
                            setSelectedSize(e.value)
                        }}
                        options={options}
                        optionLabel={optionLabel || "name"}
                        placeholder={placeholder || "Seleccionar Talla"}
                        className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"
                    />

                </div>

                <div className='mb-8'>

                    <label htmlFor={'PriceEuro'} className='label'>{inputLabel}</label>

                    <Input
                        type='number'
                        ref={inputPriceRef}
                        placeholder={inputPlaceholder}
                        onChange={e => setAddNewPackage(prev => ({ ...prev, price: e.target.value }))}
                        id={'PriceEuro'}
                    />

                </div>

                <button
                    type='button'
                    onClick={handelAddNewPackage}
                    className='bg-[#58291E] text-[20px] text-center text-white font-medium w-full py-[16px] px-[24px] rounded-full'
                >Añadir Paquete</button>

            </form>

            <RenderPackages
                formik={formik}
                removePackage={removePackage}
                formikKey={formikKey}
                options={options}
            />

        </div>
    )
} 