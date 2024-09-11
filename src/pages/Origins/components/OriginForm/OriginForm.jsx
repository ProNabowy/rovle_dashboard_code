import { Dropdown } from 'primereact/dropdown';
import { Input } from '../../../../components';
import { getSelectedOption } from '../../../../assets/utils/utils';
import { useDataGetter } from './data';


export default function OriginForm({ formik, clickHandler }) {

    const { user, roasters } = useDataGetter();

    return (
        <form onSubmit={e => e.preventDefault()} autoComplete='off'>

            {
                user?.provider?.id
                    ?
                    null
                    :
                    <div className='p-3 sm:p-10 pb-4'>

                        <label className='mb-3 block text-[#234486]'>Tostadores</label>

                        <Dropdown
                            filter
                            value={getSelectedOption(roasters, 'id', formik?.values?.provider_id)}
                            name='provider_id'
                            onChange={(e) => formik.setFieldValue('provider_id', e.target.value?.id)}
                            options={roasters}
                            optionLabel="commercial_name"
                            placeholder="Seleccionar Tostador"
                            className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none"
                        />

                    </div>
            }

            <div className='p-3 sm:p-10 pt-4'>

                <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Nombre</label>

                <Input
                    type='text'
                    name='name'
                    value={formik.values?.name}
                    onChange={formik.handleChange}
                    placeholder='Ingresar Nombre del Origen'
                />

            </div>

            <div className='flex-end-container'>

                <button
                    type='submit'
                    onClick={clickHandler}
                    className='min-btn'
                >
                    Enviar
                </button>

            </div>

        </form>
    )
}
