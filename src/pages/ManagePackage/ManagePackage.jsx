import { Input, PageContent } from '../../components'
import { useDataGetter, useAddPackage } from './data'
import { Dropdown } from 'primereact/dropdown';
import RenderPackages from './components/RenderPackages/RenderPackages';

export default function ManagePackage() {

    const {
        formik,
        subscriptionItem,
        totalWeightOfPersentations,
        clickHandler
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

            <div className={`grid grid-cols-12 gap-10 p-4 px-10`}>

                <form onSubmit={e => e.preventDefault()} className='col-span-6'>

                    <div className='mb-8'>

                        <label className='label'>Nombre del Producto</label>

                        <Dropdown
                            value={selectedProduct}
                            onChange={e => {
                                setAddNewPackage(perv => ({ ...perv, commercial_name: e.value?.commercial_name }))
                                setSelectProduct(e.value);
                            }}
                            filter
                            options={subscriptionItem?.plan?.products} optionLabel={"commercial_name"}
                            placeholder={"Seleccionar Producto"} className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                    <div className='mb-8'>

                        <label htmlFor={'weight'} className='label'>Peso / gm </label>

                        {/* Don't Forget To Ask What U render Here */}
                        <Dropdown
                            value={selectedWeight}
                            onChange={e => {
                                setAddNewPackage(perv => ({ ...perv, weight: e.value?.weight, presentationId: e.value?.id }))
                                setSelectWeight(e.value)
                            }}
                            filter
                            options={selectedProduct?.presentations} optionLabel={"weight"}
                            placeholder={"Seleccionar Peso"} className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>

                    <div className='mb-8'>

                        <label htmlFor={'Quantity'} className='label'>Cantidad</label>

                        <Input
                            ref={inputWeightRef}
                            onChange={e => setAddNewPackage(prev => ({ ...prev, units: e.target.value }))}
                            type='number'
                            id={'Quantity'}
                            placeholder={'Cantidad'}
                        />

                    </div>

                    <button type='button' onClick={handelAddNewPackage} className='bg-[#58291E] text-[20px] text-center text-white font-medium w-full py-[16px] px-[24px] rounded-full'>Agregar paquete</button>

                </form>

                <RenderPackages formik={formik} selectedProduct={selectedProduct} removePackage={removePackage} />

            </div>


            <div className='flex flex-col items-end justify-center px-10 mt-3 mb-10'>

                <h3 className='text-[24px] text-[#58291E] mb-24'>{totalWeightOfPersentations} / {subscriptionItem?.plan_size?.size?.weight} gm</h3>


                <button onClick={clickHandler} type='submit' className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>
                    Enviar
                </button>

            </div>

        </PageContent>
    )
}
