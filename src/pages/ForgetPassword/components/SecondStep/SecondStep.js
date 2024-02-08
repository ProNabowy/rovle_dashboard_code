import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import ConfiremCodeForm from '../ConfiremCodeForm/ConfiremCodeForm'

export default function SecondStep({ handelSubmit, email = 'example@gmail.com' }) {

    const [data, setData] = useState({ invalid: true });

    return (
        <Fragment>

            <Link to={'/login'} className='flex items-center mb-10 cursor-pointer'>

                <FontAwesomeIcon icon={faAngleLeft} />

                <span className='ms-3 text-[#252525]'>Back to log in</span>

            </Link>

            <form onSubmit={handelSubmit}>

                <h3 className='text-[24px] text-[#252525] text-center mb-2 font-medium'>Forget password</h3>

                <h5 className='text-[#252525] max-w-[380px] text-center mb-8'>Please enter the code sent to your email <br /> {email}</h5>

                <ConfiremCodeForm setUpdatePasswordData={setData} data={data} />

                <button className='w-full h-[45px] mt-[16px] text-center rounded-[8px] text-white bg-[#45B8EA]' style={{ backdropFilter: 'blur(12.343469619750977px)' }}>
                    Enviar
                </button>

            </form>

        </Fragment>
    )
}
