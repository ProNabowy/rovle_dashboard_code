import { Dropdown } from 'primereact/dropdown';
import { useFormDataGetter } from './data';
import { getSelectedOption } from '../../../../../assets/utils/utils';
import { AddPackage, ChipsList, AddOrigin, Input } from '../../../../../components';
import { Fragment } from 'react';

export default function ProductsForm({ formik, originsList, packagesList }) {

    const {
        coffee,
        isByNewOWner,
        isProvider,
        selectedProvider,
        setSelectedProvider,
        rosters,
        allRoasters,
        setAddedShops,
        addedShops
    } = useFormDataGetter(formik, originsList, packagesList);

    return (

        <form onSubmit={formik.handleSubmit} autoComplete='off' className='px-3 sm:px-10 add-product'>

            <div className='flex-container'>

                {
                    isByNewOWner
                        ?
                        <div className={`${isProvider ? "w-full" : "w-full sm:w-[48%]"}`}>

                            <label htmlFor={'factor'} className='label'>Nombre del proveedor</label>

                            <Input
                                required
                                value={formik?.values?.owner_name}
                                name={'owner_name'}
                                type={'text'}
                                onChange={formik.handleChange}
                                id={'factor'}
                                placeholder={'Enter factor name'}
                            />

                        </div>
                        :
                        null
                }

                {
                    !isProvider
                        ?
                        <div className={`w-[48%] ${!isByNewOWner ? "flex-1" : ""}`}>

                            <label htmlFor={'owner'} className='label'>Roaster To</label>

                            <Dropdown
                                value={selectedProvider}
                                onChange={(e) => setSelectedProvider(getSelectedOption(rosters, 'id', e.target.value?.id))}
                                options={rosters} optionLabel="commercial_name"
                                inputId='owner'
                                filter
                                placeholder="Seleccionar Tostador"
                                className="w-full p-2  !shadow-none !rounded-none border-[#b3b3b3] !border-t-transparent !border-l-transparent !border-r-transparent" />

                        </div>
                        :
                        null
                }

            </div>

            <div className='flex-container'>

                <div className='w-full sm:w-[48%]'>

                    <label htmlFor={'commercial_name'} className='label'>Nombre del Producto</label>

                    <Input
                        value={formik?.values?.commercial_name}
                        name={'commercial_name'}
                        type={'text'}
                        required={true}
                        onChange={formik.handleChange}
                        id={'commercial_name'}
                        placeholder={'Este será el nombre que aparecerá en el listado en el shop.'}
                    />

                </div>

                <div className='w-full sm:w-[48%]'>

                    <label htmlFor={'code'} className='label'>Código</label>

                    <Input
                        onChange={formik.handleChange}
                        value={formik?.values?.code}
                        name={'code'}
                        type={'text'}
                        id={'code'}
                        placeholder={'Ingresar Código'}
                    />

                </div>

            </div>

            <AddOrigin
                classNames={'!w-full mb-8'}
                formik={formik}
                provider_id={formik.values?.provider_id}
            />

            <div className='mb-8'>

                <label htmlFor={'Region'} className='label'>Region</label>

                <Input
                    value={formik?.values?.region}
                    name={'region'}
                    type={'text'}
                    onChange={formik.handleChange}
                    id={'Region'}
                    placeholder={'Ingresar Region'}
                />

            </div>

            <div className='flex-container'>

                <div className='w-full sm:w-[48%]'>

                    <label htmlFor={'farm'} className='label'>Finca</label>

                    <Input
                        value={formik?.values?.farm}
                        name={'farm'}
                        type={'text'}
                        onChange={formik.handleChange}
                        id={'farm'}
                        placeholder={'Ingresar Finca'}
                    />

                </div>

                <div className='w-full sm:w-[48%]'>

                    <label htmlFor={'sca_score'} className='label'>Puntunaction Sca s</label>

                    <Input
                        value={formik?.values?.sca_score}
                        name={'sca_score'}
                        type={'number'}
                        min={80}
                        max={100}
                        required={true}
                        step="0.01"
                        onChange={formik.handleChange}
                        id={'sca_score'}
                        placeholder={'Ingresar Puntunaction Sca s'}
                    />

                </div>

            </div>

            <div className='flex-container'>

                <div className='w-full sm:w-[48%]'>

                    <label htmlFor={'altitude'} className='label'>Altitud</label>

                    <Input
                        value={formik?.values?.altitude}
                        name={'altitude'}
                        type={'number'}
                        min={0}
                        max={8000}
                        required={true}
                        onChange={formik.handleChange}
                        id={'altitude'}
                        placeholder={'Ingresar Altitud'}
                    />

                </div>

                <div className='w-full sm:w-[48%]'>

                    <label htmlFor={'process'} className='label'>Proceso</label>

                    <Input
                        value={formik?.values?.process}
                        name={'process'}
                        type={'text'}
                        onChange={formik.handleChange}
                        id={'process'}
                        placeholder={'Ingresar process'}
                    />

                </div>

            </div>

            <div className='mb-8'>

                <label htmlFor={'Variedad'} className='label'>Variedad</label>

                <Input
                    value={formik?.values?.grades}
                    name={'grades'}
                    type={'text'}
                    onChange={formik.handleChange}
                    id={'Variedad'}
                    placeholder={'Ingresar Variedad'}
                />

            </div>

            {/* For Add CoffeShop */}
            <ChipsList
                formik={formik}
                dataKey={'coffeeShops'}
                url={'/setups/coffee-shop/add-coffee'}
                title={'Tiendas'}
                pageKey={'Coffee Shops'}
                pagePermissionKeyName={'dashboard.coffeeShops.store'}
                options={coffee}
                stateList={setAddedShops}
                listOfState={addedShops}
            />

            <Fragment>

                <label htmlFor={'Description'} className='label'>Descripción</label>

                <textarea
                    rows={5}
                    onChange={formik.handleChange}
                    type='text'
                    value={formik?.values?.description}
                    name='description'
                    id={'Description'}
                    className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]'
                    placeholder={'Ingresar Descripción'}
                />

            </Fragment>

            <AddPackage
                formik={formik}
                roasters={allRoasters}
                provider_id={selectedProvider?.id}
            />

            <button
                type='submit'
                className='min-btn mt-10 block ml-auto'
            >
                Enviar
            </button>

        </form>
    )
}
