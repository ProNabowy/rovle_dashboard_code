import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import { useAddPlan } from './data';
import { AddPackageByDropdown, ChipsList, Input } from '../../../../components';
import PlanStatus from '../PlanStatus';
import { getSelectedOption } from '../../../../assets/utils/utils';


export default function PlanForm({ formik }) {

    const {
        roasters,
        coffee,
        provider,
        handleChangeProvider,
        isHasPermissions,
        setAddedShops,
        addedShops,
        is_created_by_provider
    } = useAddPlan(formik);

    return (

        <form onSubmit={formik.handleSubmit} autoComplete='off' className='px-3 sm:px-10'>

            <div className='flex-container'>

                <div className='w-full sm:w-[48%]'>

                    <label htmlFor={'plan-name'} className='label'>Nombre Plan</label>

                    <Input
                        type='text'
                        id={'plan-name'}
                        name='name'
                        required={true}
                        value={formik.values?.name}
                        onChange={formik.handleChange}
                        placeholder={'Este sera el nombre que se verá en la aplicacion'}
                    />

                </div>

                <PlanStatus formik={formik} />

            </div>

            {
                !provider?.id && !is_created_by_provider
                    ?
                    <div className='mb-8'>

                        <div className='flex items-center justify-between gap-2'>

                            <h2 className='label line-clamp-1'>Nombre del Tostador</h2>

                            {
                                isHasPermissions('dashboard.providers.store')
                                    ?
                                    <Link to={'/groups/roasters/add-roaster'} className='flex items-center cursor-pointer '>

                                        <h2 className='font-medium underline text-[#45B8EA] line-clamp-1 me-3'>Añadir Tostador</h2>

                                    </Link>
                                    :
                                    null
                            }

                        </div>

                        <Dropdown
                            value={getSelectedOption(roasters, 'id', formik?.values?.provider_id)}
                            onChange={handleChangeProvider}
                            filter
                            emptyFilterMessage="No hay opciones disponibles"
                            emptyMessage="No hay opciones disponibles"
                            options={roasters} optionLabel="commercial_name"
                            placeholder="Seleccionar Tostador Name" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>
                    :
                    null
            }


            <div className='mb-8'>

                <label htmlFor={'Description'} className='label'>Descripción</label>

                <textarea onChange={formik.handleChange} value={formik.values.description} name='description' rows={5} type='text' id={'Description'}
                    className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Esta sera la descripcion que se verá en la aplicacion'} />

            </div>

            {/* For Add CoffeShop */}
            <ChipsList
                formik={formik}
                dataKey={'coffee_shops'}
                url={'/setups/coffee-shop/add-coffee'}
                title={'Tiendas'}
                pageKey={'Coffee Shops'}
                stateList={setAddedShops}
                listOfState={addedShops}
                pagePermissionKeyName={'dashboard.coffeeShops.store'}
                options={coffee}
            />

            <AddPackageByDropdown
                formik={formik}
                optionLabel={'name'}
                inputLabel={"Precio"}
                label={'Talla'}
            />

            <button type='submit' className='min-btn block !mt-10 ml-auto'>Enviar</button>

        </form>

    )
}
