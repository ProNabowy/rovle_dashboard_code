import { useAddPackage } from './data';
import { RenderPacakges } from './components';
import { getSelectedOption } from '../../assets/utils/utils';
import Input from '../Input/Input';

export default function AddPackage({ formik, roasters, provider_id }) {

    const {
        inputWeightRef,
        inputQuntiyRef,
        setAddNewPackage,
        inputPriceRef,
        handelAddNewPackage,
        removePackage
    } = useAddPackage(formik, roasters, provider_id);

    return (

        <div className='rounded-[20px] mt-20 border border-[#252525] p-4 sm:p-[32px] grid grid-cols-12 gap-3 md:gap-10'>

            <form onSubmit={e => e.preventDefault()} autoComplete='off' className='col-span-12 md:col-span-6'>

                <div className='mb-8'>

                    <label htmlFor={'Weight /gm'} className='label'>Peso</label>

                    <Input
                        type='number'
                        ref={inputWeightRef}
                        placeholder={'Ingresar Peso /gr'}
                        onChange={e => setAddNewPackage(prev => ({ ...prev, weight: e.target.value }))}
                        id={'Weight /gm'}
                    />

                </div>

                <div className='mb-8'>

                    <label htmlFor={'PriceEuro'} className='label'>Precio</label>

                    <Input
                        type='number'
                        ref={inputPriceRef}
                        placeholder={'Ingresar Precio /Euro'}
                        onChange={e => setAddNewPackage(prev => ({ ...prev, price: e.target.value }))}
                        id={'PriceEuro'}
                    />

                </div>

                {
                    getSelectedOption(roasters, 'id', provider_id)?.manage_stock
                        ?
                        <div className='mb-8'>

                            <label htmlFor={'Units'} className='label'>Cantidad</label>

                            <Input
                                type='number'
                                ref={inputQuntiyRef}
                                placeholder={'Cantidad'}
                                onChange={e => setAddNewPackage(prev => ({ ...prev, units: e.target.value }))}
                                id={'Units'}
                            />

                        </div>
                        :
                        null
                }

                <button type='button' onClick={handelAddNewPackage} className='bg-[#58291E] text-[20px] text-center text-white font-medium w-full py-[16px] px-[24px] rounded-full'>Añadir Paquete</button>

            </form>

            <RenderPacakges formik={formik} removePackage={removePackage} />

        </div >
    )
}
