import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, } from 'react'
import { Link } from 'react-router-dom'
import ConfiremCodeForm from '../ConfiremCodeForm/ConfiremCodeForm'
import { useDataGetter } from './data'

export default function SecondStep({ setActiveIndex }) {

    const {
        handelSubmit,
        code,
        email,
        invalid,
        setCode
    } = useDataGetter(setActiveIndex);

    return (
        <Fragment>

            <Link to={'/login'} onClick={() => sessionStorage.clear()} className='flex items-center mb-5 sm:mb-10 cursor-pointer'>

                <FontAwesomeIcon icon={faAngleLeft} />

                <span className='ms-3 text-[#252525]'>Volver a iniciar sesión</span>

            </Link>

            <form onSubmit={handelSubmit} autoComplete='off'>

                <h3 className='text-[24px] text-[#252525] text-center mb-2 font-medium'>Olvidar Contraseña</h3>

                <h5 className='text-[#252525] max-w-[380px] text-center mb-8 mx-auto'>Por favor, introduce el código enviado a tu correo electrónico. <br /> {email}</h5>

                <ConfiremCodeForm
                    setUpdatePasswordData={setCode}
                    data={code}
                    invalid={invalid}
                />

                <button className='w-full h-[45px] mt-[16px] text-center rounded-[8px] text-white bg-[#45B8EA]' style={{ backdropFilter: 'blur(12.343469619750977px)' }}>
                    Enviar
                </button>

            </form>

        </Fragment>
    )
}
