import React, { useState } from 'react'
import { PageContent } from '../../../../components'
import { Dropdown } from 'primereact/dropdown'
import { useNavigate } from 'react-router-dom'


export default function ChooseOwner() {

    const options = [
        'Mis Productos',
        'Del proveedor existente',
        'De un proveedor no registrado',
    ]

    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState('');

    const handelClick = () => {
        if (selectedOption === 'Mis Productos') {

            return navigate('/products/list/add-product');

        } else if (selectedOption === 'Del proveedor existente') {

            return navigate('/products/list/add-product/another-owner');

        } else if (selectedOption === 'De un proveedor no registrado') {

            return navigate('/products/list/add-product?new-owner=true');

        }
        return null;
    }

    return (
        <PageContent title={'Elegir Propietario'} showActions={false} >

            <form onSubmit={e => e.preventDefault()} autoComplete='off'>

                <div className='px-3 sm:px-10 py-3'>

                    <label htmlFor='name-input' className='mb-3 block text-[#234486]'>Dueño del Producto</label>

                    <Dropdown filter value={selectedOption} onChange={(e) => setSelectedOption(e.value)} options={options} optionLabel=""
                        placeholder="Seleccionar Propietario" className="w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none" />

                </div>

                <div className='flex-end-container'>

                    <button onClick={handelClick} className='min-btn'>
                        Siguiente
                    </button>

                </div>

            </form>


        </PageContent>
    )
}
