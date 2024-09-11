import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import lock from '../../../../assets/images/lock.png';

export default function FirstStep({ setData, handelSubmit }) {
    return (
        <Fragment>

            <Link to={'/login'} className='flex items-center mb-10 cursor-pointer'>

                <FontAwesomeIcon icon={faAngleLeft} />

                <span className='ms-3 text-[#252525]'>Back to log in</span>

            </Link>

            <img src={lock} className='m-auto mb-4' />

            <form onSubmit={handelSubmit} autoComplete='off'>

                <h3 className='text-[24px] text-[#252525] text-center mb-2 font-medium'>Forget password</h3>

                <h5 className='text-[#252525] max-w-[380px] text-center mb-8'>Enter your Email and we will send a code to reset your password</h5>

                <label className='block font-[400] text-[14px]' htmlFor='email'>Dirección de correo electrónico</label>

                <input
                    autoFocus
                    onChange={e => setData(perv => ({ ...perv, email: e.target.value }))}
                    id='email'
                    type='email'
                    className='w-full mb-6 h-[40px] px-5 rounded-[8px]'
                    style={{ background: 'linear-gradient(120deg, #FFF -45.57%, rgba(217, 217, 217, 0.00) 134.89%)', backdropFilter: 'blur(12.343469619750977px)' }}
                />

                <button className='w-full h-[45px] mt-[16px] text-center rounded-[8px] text-white bg-[#45B8EA]' style={{ backdropFilter: 'blur(12.343469619750977px)' }}>
                    Enviar
                </button>

            </form>

        </Fragment>
    )
}
