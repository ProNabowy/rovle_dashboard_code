import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function ThiredStep({ setData, handelSubmit, email = 'example@email.com' }) {
    return (
        <Fragment>

            <Link to={'/login'} className='flex items-center mb-10 cursor-pointer'>

                <FontAwesomeIcon icon={faAngleLeft} />

                <span className='ms-3 text-[#252525]'>Back to log in</span>

            </Link>

            <form onSubmit={handelSubmit} className='w-[400px]'>

                <h3 className='text-[24px] text-[#252525] text-center mb-2 font-medium'>Forget password</h3>

                <h5 className='text-[#252525] text-center mb-8'>Enter new password for {email}</h5>

                <label className='block font-[400] text-[14px]' htmlFor='password'>Enter new password</label>

                <input
                    autoFocus
                    onChange={e => setData(perv => ({ ...perv, password: e.target.value }))}
                    id='password'
                    type='password'
                    className='w-full mb-4 h-[40px] px-5 rounded-[8px]'
                    style={{ background: 'linear-gradient(120deg, #FFF -45.57%, rgba(217, 217, 217, 0.00) 134.89%)', backdropFilter: 'blur(12.343469619750977px)' }}
                />

                <label className='block font-[400] text-[14px]' htmlFor='conf_password'>Confirm password</label>

                <input
                    autoFocus
                    onChange={e => setData(perv => ({ ...perv, conf_password: e.target.value }))}
                    id='conf_password'
                    type='password'
                    className='w-full mb-6 h-[40px] px-5 rounded-[8px]'
                    style={{ background: 'linear-gradient(120deg, #FFF -45.57%, rgba(217, 217, 217, 0.00) 134.89%)', backdropFilter: 'blur(12.343469619750977px)' }}
                />

                <button className='w-full h-[45px] mt-[16px] text-center rounded-[8px] text-white bg-[#45B8EA]' style={{ backdropFilter: 'blur(12.343469619750977px)' }}>
                Restablecer la contraseña
                </button>

            </form>

        </Fragment>
    )
}
