import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import { useAddPlan } from './data';
import { AddPackageByDropdown, ChipsList } from '../../../../components';
import PlanStatus from '../PlanStatus';
import { getSelectedOption } from '../../../../assets/utils/utils';


export default function PlanForm({ formik, clickHandler }) {

    const {
        roasters,
        coffee,
        provider,
        handleChangeProvider,
        isHasPermissions
    } = useAddPlan(formik);

    return (

        <form onSubmit={e => e.preventDefault()} className='px-10'>

            <div className='flex items-center justify-between mb-8'>

                <div className='sm:w-[48%]'>

                    <label htmlFor={'plan-name'} className='text-[18px] text-[#252525] font-medium'>Nombre Plan</label>

                    <input type='text' id={'plan-name'} name='name' value={formik.values?.name} onChange={formik.handleChange}
                        className='p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Este sera el nombre que se verá en la aplicacion'} />

                </div>

                <PlanStatus formik={formik} />

            </div>


            {
                !provider?.id
                    ?
                    <div className='mb-8'>

                        <div className='flex items-center justify-between'>

                            <h2 className='text-[18px] text-[#252525] font-medium'>Nombre del Tostador</h2>

                            {
                                isHasPermissions('dashboard.providers.store')
                                    ?
                                    <Link to={'/groups/roasters/add-roaster'} className='flex items-center cursor-pointer'>

                                        <h2 className='font-medium underline text-[#45B8EA] me-3'>Añadir Tostador</h2>

                                    </Link>
                                    :
                                    null
                            }

                        </div>

                        <Dropdown
                            value={getSelectedOption(roasters, 'id', formik?.values?.provider_id)}
                            onChange={handleChangeProvider}
                            filter
                            options={roasters} optionLabel="commercial_name"
                            placeholder="Seleccionar Tostador Name" className="w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent" />

                    </div>
                    :
                    null
            }


            <div className='mb-8'>

                <label htmlFor={'Description'} className='text-[18px] text-[#252525] font-medium'>Descripción</label>

                <textarea onChange={formik.handleChange} value={formik.values.description} name='description' rows={5} type='text' id={'Description'}
                    className='p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]' placeholder={'Esta sera la descripcion que se verá en la aplicacion'} />

            </div>

            {/* For Add Product */}
            {/* <ChipsList
                formik={formik}
                dataKey={'products'}
                url={'/products/list/add-product'}
                optionLabel="commercial_name"
                title={'Productos'}
                pageKey={'Products'}
                pagePermissionKeyName={'dashboard.products.store'}
                options={getSelectedOption(roaster, 'id', formik?.values?.provider_id)?.products}
            /> */}

            {/* For Add CoffeShop */}
            <ChipsList
                formik={formik}
                dataKey={'coffee_shops'}
                url={'/setups/coffee-shop/add-coffee'}
                title={'Tiendas'}
                pageKey={'Coffee Shops'}
                pagePermissionKeyName={'dashboard.coffeeShops.store'}
                options={coffee}
            />

            <AddPackageByDropdown
                formik={formik}
                optionLabel={'name'}
                inputLabel={"Precio"}
                label={'Talla'}
            />

            <div className='flex items-center justify-end mt-10'>

                <button onClick={clickHandler} type='submit' className='bg-[#45B8EA] text-white py-[16px] px-32 rounded-full'>Enviar</button>

            </div>

        </form>

    )
}
