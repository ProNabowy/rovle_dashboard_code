import { Input, PageContent } from '../../components'
import { useDataGetter, useAddPackage } from './data'
import { Dropdown } from 'primereact/dropdown';
import RenderPackages from './components/RenderPackages/RenderPackages';

export default function ManagePackage() {

    const {
        formik,
        subscriptionItem,
        totalWeightOfPersentations,
        clickHandler,
        products
    } = useDataGetter();

    const {
        setAddNewPackage,
        inputWeightRef,
        handelAddNewPackage,
        removePackage,
        selectedProduct,
        setSelectProduct,
        selectedWeight,
        setSelectWeight
    } = useAddPackage(formik, subscriptionItem?.total, totalWeightOfPersentations);

    return (
        <PageContent
            title={`Gestionar paquetes ( ${subscriptionItem?.user?.name} / ${subscriptionItem?.plan_size?.size?.weight} = ${subscriptionItem?.price} )`}
            showActions={false}>

            <div className={`grid grid-cols-12 gap-3 sm:gap-10 p-3 sm:p-4 sm:px-10`}>

                <form onSubmit={e => e.preventDefault()} autoComplete='off' className='col-span-12 md:col-span-6'>

                    <div className='mb-4 sm:mb-8'>

                        <label className='label'>Nombre del Producto</label>

                        <Dropdown
                            value={selectedProduct}
                            onChange={e => {
                                setAddNewPackage(perv => ({ ...perv, commercial_name: e.value?.commercial_name }))
                                setSelectProduct(e.value);
                            }}
                            filter
                            emptyFilterMessage="No hay opciones disponibles"
                            emptyMessage="No hay opciones disponibles"
                            options={products}
                            optionLabel={"commercial_name"}
                            panelClassName='max-w-full'
                            placeholder={"Seleccionar Producto"}
                            className="w-full p-2 relative !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"
                        />

                    </div>

                    <div className='mb-4 sm:mb-8'>

                        <label htmlFor={'weight'} className='label'>Peso / gm </label>

                        {/* Don't Forget To Ask What U render Here */}
                        <Dropdown
                            value={selectedWeight}
                            onChange={e => {
                                setAddNewPackage(perv => ({ ...perv, weight: e.value?.weight, presentationId: e.value?.id }))
                                setSelectWeight(e.value)
                            }}
                            emptyFilterMessage="No hay opciones disponibles"
                            emptyMessage="No hay opciones disponibles"
                            filter
                            options={selectedProduct?.presentations} optionLabel={"weight"}
                            placeholder={"Seleccionar Peso"} className="w-full p-2 !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                    <div className='mb-4 sm:mb-8'>

                        <label htmlFor={'Quantity'} className='label'>Cantidad</label>

                        <Input
                            ref={inputWeightRef}
                            onChange={e => setAddNewPackage(prev => ({ ...prev, units: e.target.value }))}
                            type='number'
                            id={'Quantity'}
                            placeholder={'Cantidad'}
                        />

                    </div>

                    <button type='button' onClick={handelAddNewPackage} className='bg-[#58291E] sm:text-[20px] text-center text-white font-medium w-full py-2 md:py-[16px] px-3 md:px-[24px] rounded-md md:rounded-full'>Agregar paquete</button>

                </form>

                <RenderPackages formik={formik} selectedProduct={selectedProduct} removePackage={removePackage} />

            </div>


            <div className='flex flex-col items-end justify-center px-3 sm:px-10 mt-3 mb-5 sm:mb-10'>

                <h3 className='sm:text-[24px] text-[#58291E] mb-10 sm:mb-24'>{totalWeightOfPersentations} / {subscriptionItem?.plan_size?.size?.weight} gm</h3>

                <button onClick={clickHandler} type='submit' className='min-btn'>
                    Enviar
                </button>

            </div>

        </PageContent>
    )
}
