import { PageContent } from "../../../../components";
import { useDataGetter } from "./data";

export default function AddSize() {

    const {
        formik,
        clickHandler,
    } = useDataGetter();

    return (

        <PageContent title={'Formulario de tamaño'} showActions={false}>

            <form onSubmit={e => e.preventDefault()}>

                <div className='p-10 py-4'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Personaje</label>

                    <input type='text' id="name-input" name='name' onChange={formik.handleChange} value={formik.values?.name}
                        className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' placeholder='Ingresar Personaje' />

                </div>

                <div className='p-10 pt-4'>

                    <label htmlFor='weight' className='mb-3 block text-[#234486]'>Peso</label>

                    <input type='number' id="weight" name='weight' value={formik.values?.weight} onChange={formik.handleChange}
                        className='p-3 px-5 placeholder:!text-[#b3b3b3] border-b border-b-[#b3b3b3] w-full' placeholder='Ingresar Peso' />

                </div>

                <div className='flex items-center justify-end p-10 pb-5'>

                    <button onClick={clickHandler} type='submit' className='p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]'>
                        Enviar
                    </button>

                </div>

            </form>


        </PageContent>
    )
}
