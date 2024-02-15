import { Input, PageContent } from "../../../../components";
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

                    <Input
                        type='text'
                        id="name-input"
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values?.name}
                        placeholder='Ingresar Personaje'
                    />

                </div>

                <div className='p-10 pt-4'>

                    <label htmlFor='weight' className='mb-3 block text-[#234486]'>Peso</label>

                    <Input
                        type='number'
                        id="weight"
                        name='weight'
                        value={formik.values?.weight}
                        onChange={formik.handleChange}
                        placeholder='Ingresar Peso'
                    />

                </div>

                <div className='flex-end-container'>

                    <button onClick={clickHandler} type='submit' className='min-btn'>
                        Enviar
                    </button>

                </div>

            </form>


        </PageContent>
    )
}
